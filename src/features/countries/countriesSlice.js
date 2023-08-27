import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const baseURL = "https://restcountries.com/v2";

export const fetchAsyncCountries = createAsyncThunk(
  "countries/fetchAsyncCountries",
  async () => {
    try {
      const response = await axios.get(baseURL + "/all");
      return response.data;
    } catch (error) {
      throw Error("Error while fetching countries: ", error);
    }
  },
);

export const fetchAsyncCountryByName = createAsyncThunk(
  "countries/fetchAsyncCountryByName",
  async (searchValue) => {
    try {
      const response = await axios.get(baseURL + "/name/" + searchValue);
      return response.data;
    } catch (error) {
      throw Error("Error while fetching country: ", error);
    }
  },
);

const initialState = {
  countries: [],
  isLoading: true,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCountries.fulfilled]: (state, { payload }) => {
      state.countries = payload;
      state.isLoading = false;
    },
    [fetchAsyncCountryByName.fulfilled]: (state, { payload }) => {
      state.countries = payload;
    },
  },
});

export default countriesSlice.reducer;
