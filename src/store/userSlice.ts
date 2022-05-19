import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "./store";

const initialState: User = {
  nick: "MemAppUser",
  favouritesMemesIds: [2],
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addToFavourites: (state, action: PayloadAction<number>) => {
      state.favouritesMemesIds.push(action.payload)
      
    },
    removeFromFavourites: (state, action: PayloadAction<number>)  => {
      state.favouritesMemesIds = state.favouritesMemesIds.filter(id => id !== action.payload);
    }
  },
});

export const {addToFavourites, removeFromFavourites} = userSlice.actions;

export const isMemFavourite = (memId: number) => (state: RootState) => 
state.user.favouritesMemesIds.some((id: number) => id === memId);

export default userSlice.reducer;
