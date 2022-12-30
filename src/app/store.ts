import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import caseSlice from '../features/caseSlice/case';

export const store = configureStore({
  reducer: {
    case: caseSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
