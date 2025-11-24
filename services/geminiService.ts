import { GoogleGenAI, Type } from "@google/genai";
import { Fighter, AnalysisResult } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is missing in environment");
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeMatchup = async (fighterA: Fighter, fighterB: Fighter): Promise<AnalysisResult> => {
  const ai = getClient();

  const prompt = `
    You are an expert boxing analyst for ApexWorld Boxing Entertainment (ABE).
    Analyze the following hypothetical matchup between two fighters from our roster.

    Fighter A:
    Name: ${fighterA.name}
    Nickname: ${fighterA.nickname}
    Record: ${fighterA.record}
    Height: ${fighterA.height}
    Reach: ${fighterA.reach}
    Stance: ${fighterA.stance}
    Style/Desc: ${fighterA.description}

    Fighter B:
    Name: ${fighterB.name}
    Nickname: ${fighterB.nickname}
    Record: ${fighterB.record}
    Height: ${fighterB.height}
    Reach: ${fighterB.reach}
    Stance: ${fighterB.stance}
    Style/Desc: ${fighterB.description}

    Provide a detailed analysis in JSON format.
    Identify the winner, the method of victory, the key strategic factor, and a predicted round (1-12).
    Keep the "summary" exciting, like a sports commentator.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            prediction: { type: Type.STRING, description: "Who wins and how (e.g., 'Sterling via KO')" },
            keyFactor: { type: Type.STRING, description: "The main strategic reason for the outcome" },
            summary: { type: Type.STRING, description: "A paragraph summarizing how the fight plays out" },
            roundPrediction: { type: Type.INTEGER, description: "The round the fight ends, if applicable" }
          },
          required: ["prediction", "keyFactor", "summary"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      prediction: "Analysis Failed",
      keyFactor: "N/A",
      summary: "Our analyst bot is currently dazed and confused. Please try again later.",
      roundPrediction: 0
    };
  }
};