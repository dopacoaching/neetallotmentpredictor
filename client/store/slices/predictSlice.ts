import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllotmentResult } from '@/types';

interface PredictState {
  filters: {
    counsellingBody: string;
    collegeType: string;
    category: string;
    specialty: string;
    round: string;
  };
  results: AllotmentResult[] | null;
  resultCount: number;
}

const initialState: PredictState = {
  filters: {
    counsellingBody: "All",
    collegeType: "All Colleges",
    category: "All",
    specialty: "All Fields",
    round: "All Rounds",
  },
  results: null,
  resultCount: 0,
};

const predictSlice = createSlice({
  name: 'predict',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<PredictState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setResults: (state, action: PayloadAction<{ results: AllotmentResult[]; resultCount: number }>) => {
      state.results = action.payload.results;
      state.resultCount = action.payload.resultCount;
    },
    resetPredict: () => initialState,
  },
});

export const { setFilters, setResults, resetPredict } = predictSlice.actions;
export default predictSlice.reducer;
