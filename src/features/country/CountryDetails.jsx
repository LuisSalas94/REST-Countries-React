import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncCountryByCode } from "./countryByCodeSlice";

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { alpha3Code } = useParams();

  const { country, isLoading } = useSelector((state) => state.countryByCode);

  useEffect(() => {
    dispatch(fetchAsyncCountryByCode(alpha3Code));
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
  } = country;

  const currenciesCountry = currencies?.map((currency) => currency.name) || [];
  const languagesCountry = languages?.map((language) => language.name) || [];
  const bordersCountry = borders || [];

  return <div>CountryDetails</div>;
};

export default CountryDetails;
