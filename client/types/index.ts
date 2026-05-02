export interface AllotmentResult {
  collegeName: string;
  state: string;
  specialty: string;
  degree: string;
  category: string;
  quota: string;
  round: string;
  cutoffRank: number;
  counsellingBody: string;
  year: number;
  probability: 'High' | 'Good' | 'Difficult';
  highChance: boolean;
}

export interface PredictResponse {
  resultCount: number;
  userRank: number;
  results: AllotmentResult[];
}

export interface FilterOptions {
  categories: string[];
  rounds: string[];
  collegeTypes: string[];
}

export interface RegisterResponse {
  success: boolean;
  userId?: string;
  error?: string;
  message?: string;
}
