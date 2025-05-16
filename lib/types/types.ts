export interface FilterType {
  category: string[];
  stage: string[];
  fundingRange: { min: number; max: number } | null;
  location: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Metrics {
  activeUsers: number;
  userGrowthRate: number;
  userGrowth: { month: string; users: number }[];
  revenue: number;
  revenueGrowthRate: number;
  revenueGrowth: { month: string; revenue: number }[];
  retentionRate: number;
  dailyActiveUsers: number;
  weeklyActiveUsers: number;
  customerAcquisitionCost: number;
  lifetimeValue: number;
  conversionRate: number;
  churnRate: number;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  category: string;
  stage: string;
  location: string;
  founder: string;
  founderAvatar: string;
  technology: string[];
  problemStatement: string;
  solution: string;
  businessModel: string;
  fundingGoal: number;
  minInvestment: number;
  equity: number;
  fundingEndDate: string;
  foundedYear: string;
  revenue: string;
  teamSize: number;
  team: TeamMember[];
  metrics: Metrics;
}