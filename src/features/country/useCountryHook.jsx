import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCountries } from "../countries/countriesSlice";

const useCountryHook = () => {
  const { countries, isLoading } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountries());
  }, [dispatch]);

  return { countries, isLoading };
};

export default useCountryHook;
