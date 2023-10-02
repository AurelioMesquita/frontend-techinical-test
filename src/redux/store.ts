import { configureStore } from "@reduxjs/toolkit"
import sliceSearch from "./sliceSearch";
import sliceInputSearch from "./sliceInputSearch";

const store = configureStore({
  reducer: {
    search: sliceSearch,
    inputSearch: sliceInputSearch
  }
})


export default store;