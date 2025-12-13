
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
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=800&auto=format&fit=crop', // Intense portrait black boxer
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
    image: 'https://images.unsplash.com/photo-1615117970747-4906ec20721e?q=80&w=800&auto=format&fit=crop', // Black boxer in ring
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
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop', // Female boxer action
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
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop', // Female boxer athletic
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
    image: 'https://images.unsplash.com/photo-1509563408-7b98d3637683?q=80&w=800&auto=format&fit=crop', // Boxer intense shadow
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
    price: 'R49.99',
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
    price: 'R49.99',
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
    price: 'R49.99',
    status: 'Completed'
  }
];

export const MERCHANDISE = [
  {
    id: 'm1',
    name: 'ABE Pro Fight Gloves',
    price: '$129.99',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1616004663363-d34346859345?q=80&w=800&auto=format&fit=crop', // Real Boxing Gloves
    tag: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Champion Gold Hoodie',
    price: '$65.00',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop', // Hoodie
  },
  {
    id: 'm3',
    name: 'Official Ring Canvas Tee',
    price: '$35.00',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop', // T-Shirt
    tag: 'New'
  },
  {
    id: 'm4',
    name: 'Legacy Snapback',
    price: '$29.99',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop', // Cap
  },
  {
    id: 'm5',
    name: 'Wraps & Tape Kit',
    price: '$15.00',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1629252080344-09c313a07b7b?q=80&w=800&auto=format&fit=crop', // Wraps/Texture
  },
  {
    id: 'm6',
    name: 'Training Tech Tank',
    price: '$45.00',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=800&auto=format&fit=crop', // Sportswear
  }
];

export const NEWS_UPDATES = [
  {
    id: 1,
    headline: "Siba storms out of press conference after Sizwe taunt",
    time: "2 hours ago",
    category: "Drama",
    author: "Mike Bohn",
    image: "https://images.unsplash.com/photo-1563297244-6e828135832a?q=80&w=800&auto=format&fit=crop", // Microphones/Press
    summary: "Tensions reached a boiling point in Las Vegas today as the heavyweight champion flipped the table and exited the stage following a heated exchange about his training camp."
  },
  {
    id: 2,
    headline: "Mensah fined $50k for backstage altercation",
    time: "5 hours ago",
    category: "Discipline",
    author: "Sarah Lane",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop", // Stare down/Intense
    summary: "The commission has handed down a hefty fine to Kofi Mensah following the incident at the weigh-ins. Mensah's team plans to appeal the decision immediately."
  },
  {
    id: 3,
    headline: "Volkova signs historic 5-fight contract extension",
    time: "1 day ago",
    category: "Business",
    author: "Fight Beat Staff",
    image: "https://images.unsplash.com/photo-1554774853-71015e28c1ea?q=80&w=800&auto=format&fit=crop", // Signing/Pen
    summary: "The Bantamweight queen isn't going anywhere. ABE officials confirmed today that Volkova has put pen to paper on the most lucrative deal in division history."
  }
];

export const BROADCAST_HIGHLIGHTS = [
  {
    id: 1,
    title: "Sizwe Press Conference Highlights",
    duration: "03:12",
    image: "https://images.unsplash.com/photo-1505243542579-da5adfe8338f?q=80&w=800&auto=format&fit=crop" // Angry/Shouting
  },
  {
    id: 2,
    title: "Official Weigh-In Recap",
    duration: "01:45",
    image: "https://images.unsplash.com/photo-1509563408-7b98d3637683?q=80&w=800&auto=format&fit=crop" // Blurred action
  }
];
