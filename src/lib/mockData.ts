export interface User {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalRaised: number;
  memberSince: string;
  rewardsUnlocked: number;
  totalRewards: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  amount: number;
  status: string;
  rank: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  requiredAmount: number;
  unlocked: boolean;
  icon: string;
}

export const mockUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  referralCode: "alex2025",
  totalRaised: 15750,
  memberSince: "Jan 2024",
  rewardsUnlocked: 3,
  totalRewards: 5,
};

export const mockLeaderboard: LeaderboardUser[] = [
  {
    id: "1",
    name: "David Kim",
    amount: 21450,
    status: "Champion",
    rank: 1,
  },
  {
    id: "2",
    name: "Marcus Williams",
    amount: 18900,
    status: "Runner-up",
    rank: 2,
  },
  {
    id: "3",
    name: "Alex Johnson",
    amount: 15750,
    status: "Third Place",
    rank: 3,
  },
  {
    id: "4",
    name: "Sarah Chen",
    amount: 12300,
    status: "Fundraising Champion",
    rank: 4,
  },
  {
    id: "5",
    name: "Emma Rodriguez",
    amount: 9850,
    status: "Fundraising Champion",
    rank: 5,
  },
];

export const mockRewards: Reward[] = [
  {
    id: "1",
    title: "First Milestone",
    description: "Raise your first $1,000",
    requiredAmount: 1000,
    unlocked: true,
    icon: "🎯",
  },
  {
    id: "2",
    title: "Community Builder",
    description: "Raise $5,000 for the community",
    requiredAmount: 5000,
    unlocked: true,
    icon: "🏆",
  },
  {
    id: "3",
    title: "Impact Leader",
    description: "Raise $10,000 and make real impact",
    requiredAmount: 10000,
    unlocked: true,
    icon: "⭐",
  },
  {
    id: "4",
    title: "Champion Fundraiser",
    description: "Raise $20,000 - Elite status",
    requiredAmount: 20000,
    unlocked: false,
    icon: "👑",
  },
  {
    id: "5",
    title: "Legendary Contributor",
    description: "Raise $50,000 - Hall of Fame",
    requiredAmount: 50000,
    unlocked: false,
    icon: "✨",
  },
];

export const communityStats = {
  totalCommunityImpact: 78250,
  activeFundraisers: 5,
  averageRaised: 15650,
};