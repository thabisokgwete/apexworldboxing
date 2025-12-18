
import { Fighter, Event } from './types';

export const FIGHTERS: Fighter[] = [
  {
    id: 'f1',
    name: 'Bad Boy Siba',
    nickname: 'Bad Boy',
    weightClass: 'Heavyweight',
    record: '28-0-0 (26 KOs)',
    height: '6\'5"',
    reach: '82"',
    stance: 'Orthodox',
    country: 'UK',
    image: '', // Image removed
    description: 'A devastating puncher with an iron chin. The current ABE Heavyweight Champion.'
  },
  {
    id: 'f2',
    name: 'Himothy Sizwe',
    nickname: 'Himothy',
    weightClass: 'Heavyweight',
    record: '31-2-0 (19 KOs)',
    height: '6\'3"',
    reach: '79"',
    stance: 'Southpaw',
    country: 'Mexico',
    image: '', // Image removed
    description: 'Known for his technical brilliance and counter-punching ability.'
  },
  {
    id: 'f3',
    name: 'Main Man',
    nickname: 'Main Man',
    weightClass: 'Bantamweight',
    record: '15-0-0 (8 KOs)',
    height: '5\'6"',
    reach: '66"',
    stance: 'Orthodox',
    country: 'USA',
    image: '', // Image removed
    description: 'The king of the bantamweight division. Unstoppable pace.'
  },
  {
    id: 'f4',
    name: 'King T',
    nickname: 'King T',
    weightClass: 'Bantamweight',
    record: '12-1-0 (10 KOs)',
    height: '5\'7"',
    reach: '68"',
    stance: 'Orthodox',
    country: 'Russia',
    image: '', // Image removed
    description: 'Precision striker with surgical accuracy.'
  },
  {
    id: 'f5',
    name: 'Magic Kelly',
    nickname: 'Magic',
    weightClass: 'Middleweight',
    record: '22-0-0 (15 KOs)',
    height: '5\'11"',
    reach: '74"',
    stance: 'Southpaw',
    country: 'Ghana',
    image: '', // Image removed
    description: 'Explosive speed and unorthodox movement.'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'ABE 45: Siba vs. Sizwe II',
    date: 'Feb 14, 2026',
    venue: 'Apex Arena, East Rand',
    mainEvent: {
      fighterAId: 'f1',
      fighterBId: 'f2'
    },
    undercard: ['Magic Kelly vs. Johnson', 'King T vs. Davis', 'Chen vs. O\'Malley'],
    price: 'R49.99',
    status: 'Upcoming'
  },
  {
    id: 'e2',
    title: 'ABE Fight Night: East Rand',
    date: 'Nov 12, 2025',
    venue: 'Apex Arena, East Rand',
    mainEvent: {
      fighterAId: 'f3',
      fighterBId: 'f4'
    },
    undercard: ['Smith vs. Brown', 'Lee vs. Park'],
    price: 'R49.99',
    status: 'Upcoming'
  }
];

export const MERCHANDISE = [
  {
    id: 'm1',
    name: 'ABE Pro Fight Gloves',
    price: 'R2,499.00',
    category: 'Equipment',
    image: '', // Image removed
    tag: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Champion Gold Hoodie',
    price: 'R1,199.00',
    category: 'Apparel',
    image: '', // Image removed
  },
  {
    id: 'm3',
    name: 'Official Ring Canvas Tee',
    price: 'R649.00',
    category: 'Apparel',
    image: '', // Image removed
    tag: 'New'
  },
  {
    id: 'm4',
    name: 'Legacy Snapback',
    price: 'R549.00',
    category: 'Accessories',
    image: '', // Image removed
  },
  {
    id: 'm5',
    name: 'Wraps & Tape Kit',
    price: 'R299.00',
    category: 'Accessories',
    image: '', // Image removed
  },
  {
    id: 'm6',
    name: 'Training Tech Tank',
    price: 'R849.00',
    category: 'Apparel',
    image: '', // Image removed
  }
];

export const NEWS_UPDATES = [
  {
    id: 1,
    headline: "Siba storms out of press conference after Sizwe taunt",
    time: "2 hours ago",
    category: "Drama",
    author: "Mike Bohn",
    image: "", // Image removed
    summary: "Tensions reached a boiling point in Las Vegas today as the heavyweight champion flipped the table and exited the stage following a heated exchange about his training camp."
  },
  {
    id: 2,
    headline: "Magic Kelly fined R5k for backstage altercation",
    time: "5 hours ago",
    category: "Discipline",
    author: "Sarah Lane",
    image: "", // Image removed
    summary: "The commission has handed down a hefty fine to Magic Kelly following the incident at the weigh-ins. Kelly's team plans to appeal the decision immediately."
  },
  {
    id: 3,
    headline: "King T signs historic 5-fight contract extension",
    time: "1 day ago",
    category: "Business",
    author: "Fight Beat Staff",
    image: "", // Image removed
    summary: "The Bantamweight king isn't going anywhere. ABE officials confirmed today that King T has put pen to paper on the most lucrative deal in division history."
  }
];

export const BROADCAST_HIGHLIGHTS = [
  {
    id: 1,
    title: "Sizwe Press Conference Highlights",
    duration: "03:12",
    image: "" // Image removed
  },
  {
    id: 2,
    title: "Official Weigh-In Recap",
    duration: "01:45",
    image: "" // Image removed
  }
];
