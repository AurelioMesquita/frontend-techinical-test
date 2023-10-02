import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../services/faker";
import { SearchData } from "../interfaces/Search";

const INITIAL_STATE: SearchData[] = data;

const sliceSearch = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  reducers: {
    addSearch(state, { payload }: PayloadAction<SearchData>) {
      state.push(payload);
    },
    reset() {
      return INITIAL_STATE;
    },
    empty() {
      return [];
    },
  },
});

export const { addSearch, reset, empty } = sliceSearch.actions;
export default sliceSearch.reducer;

export const useSearch = (state: any) => {
  return state.search as SearchData[];
};
