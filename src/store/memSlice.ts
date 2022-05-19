import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { NewMem } from "../components/memForm/memForm.d";
import { mems } from "../data/mems";
import { Mem, Mems } from "../data/mems.d";
import { MemTypes } from "./../components/mem-list/Mem-list.d";
import { ChangeMemPayload } from "./store.d";

const initialState: Mems = mems;

export const memSlice = createSlice({
  name: "mems",
  initialState,

  reducers: {
    changeVoute: (state, action: PayloadAction<ChangeMemPayload>) => {
      const foundMemIndex: number = state.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (foundMemIndex > -1) {
        switch (action.payload.type) {
          case "down-mem":
            state[foundMemIndex].downvotes++;
            break;
          case "up-mem":
            state[foundMemIndex].upvotes++;
            break;
        }
      }
    },
    addMem: (state, action: PayloadAction<NewMem>) => {
      state.push({
        id: state.length+1,
        title: action.payload.title,
        upvotes: 0,
        downvotes: 0,
        img: {
          type: "link",
          value: action.payload.img,
        },
        description: action.payload.description,
      })
    },
  },
});

export const { changeVoute, addMem } = memSlice.actions;

const getMem =
  (type: MemTypes) =>
  (mem: Mem): boolean => {
    const expresion: boolean = mem.upvotes - mem.downvotes > 5;

    return type === "hot" ? expresion : !expresion;
  };

export const selectMemesByType = (type: MemTypes) => (state: RootState) => {
  if (type === "favourites") {
    const userFavouritesMems: number[] = state.user.favouritesMemesIds;
    return state.mems.filter((mem: Mem) => userFavouritesMems.some(userFavouriteMemId => userFavouriteMemId === mem.id))
  } else {
    return state.mems.filter(getMem(type));
  }
};

export default memSlice.reducer;
