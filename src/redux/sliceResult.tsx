import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../services/faker";
import { SearchData } from "../interfaces/Search";

const INITIAL_STATE: SearchData[] = data;

const sliceResult = createSlice({
  name: "result",
  initialState: INITIAL_STATE,
  reducers: {
    addResult(state, { payload }: PayloadAction<SearchData>) {
      state.push(payload);
    },
    resetResult() {
      return INITIAL_STATE;
    },
    emptyResult() {
      return [];
    },
  },
});

export const { addResult, resetResult, emptyResult } = sliceResult.actions;
export default sliceResult.reducer;

export const useResult = (state: any) => {
  return state.result as SearchData[];
};
