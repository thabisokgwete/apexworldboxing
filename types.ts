export interface Fighter {
  id: string;
  name: string;
  nickname: string;
  weightClass: string;
  record: string; // e.g., "24-0-0 (20 KOs)"
  height: string;
  reach: string;
  stance: 'Orthodox' | 'Southpaw';
  country: string;
  image: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  mainEvent: {
    fighterAId: string;
    fighterBId: string;
  };
  undercard: string[];
  price: string;
  status: 'Upcoming' | 'Live' | 'Completed';
}

export interface AnalysisResult {
  prediction: string;
  keyFactor: string;
  summary: string;
  roundPrediction?: number;
}