import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCountry, fetchAsyncCountryByCode } from "./countryByCodeSlice";

const useCountryDetailsHook = () => {
  const dispatch = useDispatch();
  const { alpha3Code } = useParams();

  const { country, isLoading } = useSelector((state) => state.countryByCode);

  useEffect(() => {
    dispatch(fetchAsyncCountryByCode(alpha3Code));
    return () => {
      dispatch(clearCountry());
    };
  }, [dispatch, alpha3Code]);

  const {
    name,
    flag,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    population,
  } = country;

  const currenciesCountry = currencies?.map((currency) => currency.name) || [];
  const languagesCountry = languages?.map((language) => language.name) || [];
  const bordersCountry = borders || [];

  return {
    isLoading,
    name,
    flag,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currenciesCountry,
    languagesCountry,
    bordersCountry,
    population,
  };
};

export default useCountryDetailsHook;
