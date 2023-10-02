import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = [""];

const sliceInputSearch = createSlice({
  name: "inputSearch",
  initialState: INITIAL_STATE,
  reducers: {
    addInputSearch(state, { payload }: PayloadAction<string>) {
      return [payload];
    },
  },
});

export const { addInputSearch } = sliceInputSearch.actions;
export default sliceInputSearch.reducer;

export const useInputSearch = (state: any) => {
  return state.inputSearch;
};
