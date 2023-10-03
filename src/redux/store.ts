import { configureStore } from "@reduxjs/toolkit"
import sliceSearch from "./sliceSearch";
import sliceInputSearch from "./sliceInputSearch";
import sliceResult from "./sliceResult";

const store = configureStore({
  reducer: {
    search: sliceSearch,
    inputSearch: sliceInputSearch,
    result: sliceResult
  }
})


export default store;