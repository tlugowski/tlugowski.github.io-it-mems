import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { mems } from "../data/mems";
import { Mem, Mems } from "../data/mems.d";
import { MemTypes } from "./../components/mem-list/Mem-list.d";
import { ChangeMemPayload } from "./store.d";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

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
  },
});

export const { changeVoute } = memSlice.actions;

const getMem =
  (type: MemTypes) =>
  (mem: Mem): boolean => {
    const expresion: boolean = mem.upvotes - mem.downvotes > 5;
    return type === "hot" ? expresion : !expresion;
  };

export const selectMemesByType = (type: MemTypes) => (state: RootState) =>
  state.mems.filter(getMem(type));

export default memSlice.reducer;
