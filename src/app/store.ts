import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import memSlice from '../store/memSlice';

export const store = configureStore({
  reducer: {
    mems: memSlice,
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
