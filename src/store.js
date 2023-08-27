import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./features/countries/countriesSlice";
import countryByCodeSlice from "./features/country/countryByCodeSlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    countryByCode: countryByCodeSlice,
  },
});

export default store;
