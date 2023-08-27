import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://restcountries.com/v2/alpha";

export const fetchAsyncCountryByCode = createAsyncThunk(
  "countryByCode/fetchAsyncCountryByCode",
  async (code) => {
    try {
      const response = await axios.get(`${baseURL}/${code}`);
      return response.data;
    } catch (error) {
      throw Error("Error while fetching country by code: ", error.message);
    }
  },
);

const initialState = {
  country: [],
  isLoading: true,
};

const countryByCodeSlice = createSlice({
  name: "countryByCode",
  initialState,
  reducers: {
    clearCountry: (state) => {
      state.country = [];
    },
  },
  extraReducers: {
    [fetchAsyncCountryByCode.fulfilled]: (state, { payload }) => {
      state.country = payload;
      state.isLoading = false;
    },
  },
});

export const { clearCountry } = countryByCodeSlice.actions;

export default countryByCodeSlice.reducer;
