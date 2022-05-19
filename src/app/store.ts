import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import memSlice from "../store/memSlice";
import userSlice from "../store/userSlice";

export const store = configureStore({
  reducer: {
    mems: memSlice,
    user: userSlice,
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
