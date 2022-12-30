import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caseIndex: 0,
};

export const caseIndexSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    setCaseIndex: (state, action) => {
      state.caseIndex = action.payload;
    },
  },
});

export const { setCaseIndex } = caseIndexSlice.actions;
export default caseIndexSlice.reducer;
