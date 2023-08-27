import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const baseURL = "https://restcountries.com/v2/all";

export const fetchAsyncCountries = createAsyncThunk(
  "countries/fetchAsyncCountries",
  async () => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      throw Error("Error while fetching countries: ", error);
    }
  }
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
  },
});

export default countriesSlice.reducer;
