import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  mobile: string | null;
  rank: number | null;
  isRegistered: boolean;
}

const initialState: UserState = {
  id: null,
  name: null,
  mobile: null,
  rank: null,
  isRegistered: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload, isRegistered: !!(action.payload.id || state.id) };
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
