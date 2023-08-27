import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCountries } from "../countries/countriesSlice";
import Spinner from "../../utils/Spinner";

const Country = () => {
  const { countries, isLoading } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountries());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {countries.map((country) => {
        return (
          <div
            key={country.alpha2Code}
            className="mt-5 cursor-pointer w-72 bg-white rounded-lg border border-gray-100 shadow-lg hover:scale-105 transform transition duration-500"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="rounded-t-lg shadow-sm h-44 w-full object-cover"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                {country.name}
              </h5>
              <p className="pt-2">
                Population:{" "}
                <span className="text-zinc-400 values">
                  {country.population}
                </span>
              </p>
              <p className="py-2">
                Region:{" "}
                <span className="text-zinc-400 values">{country.region}</span>
              </p>
              <p className="pb-5">
                Capital:{" "}
                <span className="text-zinc-400 values">{country.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Country;
