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
    image: 'https://picsum.photos/400/600?random=1',
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
    image: 'https://picsum.photos/400/600?random=2',
    description: 'Known for his technical brilliance and counter-punching ability.'
  },
  {
    id: 'f3',
    name: 'Sarah "Valkyrie" Jenkins',
    nickname: 'Valkyrie',
    weightClass: 'Bantamweight',
    record: '15-0-0 (8 KOs)',
    height: '5\'6"',
    reach: '66"',
    stance: 'Orthodox',
    country: 'USA',
    image: 'https://picsum.photos/400/600?random=3',
    description: 'The queen of the bantamweight division. Unstoppable pace.'
  },
  {
    id: 'f4',
    name: 'Elena "The Blade" Volkova',
    nickname: 'The Blade',
    weightClass: 'Bantamweight',
    record: '12-1-0 (10 KOs)',
    height: '5\'7"',
    reach: '68"',
    stance: 'Orthodox',
    country: 'Russia',
    image: 'https://picsum.photos/400/600?random=4',
    description: 'Precision striker with surgical accuracy.'
  },
  {
    id: 'f5',
    name: 'Kofi "The King" Mensah',
    nickname: 'The King',
    weightClass: 'Middleweight',
    record: '22-0-0 (15 KOs)',
    height: '5\'11"',
    reach: '74"',
    stance: 'Southpaw',
    country: 'Ghana',
    image: 'https://picsum.photos/400/600?random=5',
    description: 'Explosive speed and unorthodox movement.'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'ABE 45: Siba vs. Sizwe II',
    date: 'Oct 24, 2025',
    venue: 'Apex Arena, Las Vegas',
    mainEvent: {
      fighterAId: 'f1',
      fighterBId: 'f2'
    },
    undercard: ['Mensah vs. Johnson', 'Volkova vs. Davis', 'Chen vs. O\'Malley'],
    price: '$79.99',
    status: 'Upcoming'
  },
  {
    id: 'e2',
    title: 'ABE Fight Night: London',
    date: 'Nov 12, 2025',
    venue: 'O2 Arena, London',
    mainEvent: {
      fighterAId: 'f3',
      fighterBId: 'f4'
    },
    undercard: ['Smith vs. Brown', 'Lee vs. Park'],
    price: '$49.99',
    status: 'Upcoming'
  },
  {
    id: 'e3',
    title: 'ABE 44: Collision Course',
    date: 'Sep 15, 2025',
    venue: 'Riyadh Super Dome, Saudi Arabia',
    mainEvent: {
      fighterAId: 'f2',
      fighterBId: 'f5' 
    },
    undercard: ['Siba vs. Null', 'Jenkins vs. Tate'],
    price: '$79.99',
    status: 'Completed' // Added for Past Results tab
  }
];

export const MERCHANDISE = [
  {
    id: 'm1',
    name: 'ABE Pro Fight Gloves',
    price: '$129.99',
    category: 'Equipment',
    image: 'https://picsum.photos/400/400?random=101',
    tag: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Champion Gold Hoodie',
    price: '$65.00',
    category: 'Apparel',
    image: 'https://picsum.photos/400/400?random=102'
  },
  {
    id: 'm3',
    name: 'Official Ring Canvas Tee',
    price: '$35.00',
    category: 'Apparel',
    image: 'https://picsum.photos/400/400?random=103',
    tag: 'New'
  },
  {
    id: 'm4',
    name: 'Legacy Snapback',
    price: '$29.99',
    category: 'Accessories',
    image: 'https://picsum.photos/400/400?random=104'
  },
  {
    id: 'm5',
    name: 'Wraps & Tape Kit',
    price: '$15.00',
    category: 'Accessories',
    image: 'https://picsum.photos/400/400?random=105'
  },
  {
    id: 'm6',
    name: 'Training Tech Tank',
    price: '$45.00',
    category: 'Apparel',
    image: 'https://picsum.photos/400/400?random=106'
  }
];

export const NEWS_UPDATES = [
  {
    id: 1,
    headline: "Siba storms out of press conference after Sizwe taunt",
    time: "2 hours ago",
    category: "Drama",
    author: "Mike Bohn",
    image: "https://picsum.photos/800/600?random=300",
    summary: "Tensions reached a boiling point in Las Vegas today as the heavyweight champion flipped the table and exited the stage following a heated exchange about his training camp."
  },
  {
    id: 2,
    headline: "Mensah fined $50k for backstage altercation",
    time: "5 hours ago",
    category: "Discipline",
    author: "Sarah Lane",
    image: "https://picsum.photos/800/600?random=301",
    summary: "The commission has handed down a hefty fine to Kofi Mensah following the incident at the weigh-ins. Mensah's team plans to appeal the decision immediately."
  },
  {
    id: 3,
    headline: "Volkova signs historic 5-fight contract extension",
    time: "1 day ago",
    category: "Business",
    author: "Fight Beat Staff",
    image: "https://picsum.photos/800/600?random=302",
    summary: "The Bantamweight queen isn't going anywhere. ABE officials confirmed today that Volkova has put pen to paper on the most lucrative deal in division history."
  }
];

export const VULGAR_TEASERS = [
  {
    id: 1,
    title: "UNFILTERED: The Sizwe Rant",
    duration: "03:12",
    image: "https://picsum.photos/400/250?random=201"
  },
  {
    id: 2,
    title: "Backstage Brawl: Full Footage",
    duration: "01:45",
    image: "https://picsum.photos/400/250?random=202"
  }
];