import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./features/countries/countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;
