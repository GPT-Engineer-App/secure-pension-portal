import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userDetails = action.payload.userDetails;
    },
    clearAuth: (state) => {
      state.accessToken = null;
      state.userDetails = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;