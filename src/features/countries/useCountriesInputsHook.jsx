import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncCountries,
  fetchAsyncCountryByName,
  fetchAsyncCountryByRegion,
} from "./countriesSlice";

const useCountriesInputsHook = () => {
  const countriesInputRef = useRef();
  const regionInputRef = useRef();

  const dispatch = useDispatch();

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()) {
      dispatch(fetchAsyncCountryByName(searchValue));
    }
  };

  const selectRegion = () => {
    const searchValue = regionInputRef.current.value;
    searchValue === "All"
      ? dispatch(fetchAsyncCountries())
      : dispatch(fetchAsyncCountryByRegion(searchValue));
  };

  return { countriesInputRef, regionInputRef, searchCountries, selectRegion };
};

export default useCountriesInputsHook;
