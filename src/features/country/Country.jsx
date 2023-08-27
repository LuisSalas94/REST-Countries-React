import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCountries } from "../countries/countriesSlice";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";

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
          <Link
            to={`/${country.alpha3Code}`}
            key={country.alpha2Code}
            className="mt-5 w-72 transform cursor-pointer rounded-lg border border-gray-100 bg-white shadow-lg transition duration-500 hover:scale-105"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="h-44 w-full rounded-t-lg object-cover shadow-sm"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                {country.name}
              </h5>
              <p className="pt-2">
                Population:{" "}
                <span className="values text-zinc-400">
                  {country.population}
                </span>
              </p>
              <p className="py-2">
                Region:{" "}
                <span className="values text-zinc-400">{country.region}</span>
              </p>
              <p className="pb-5">
                Capital:{" "}
                <span className="values text-zinc-400">{country.capital}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Country;
