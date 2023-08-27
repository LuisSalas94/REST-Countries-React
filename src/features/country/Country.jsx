import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import useCountryHook from "./useCountryHook";

const Country = ({ darkMode }) => {
  const { countries, isLoading } = useCountryHook();

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
            className={`country mt-5 w-72 transform cursor-pointer rounded-lg border border-gray-100 bg-white shadow-lg transition duration-500 hover:scale-105 ${
              darkMode ? "darkMode" : ""
            }`}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="h-44 w-full rounded-t-lg object-cover shadow-sm"
            />
            <div className="p-5">
              <h5
                className={`values mb-2 text-2xl font-bold tracking-tight text-gray-700 ${
                  darkMode ? "darkMode" : ""
                }`}
              >
                {country.name}
              </h5>
              <p className="pt-2">
                Population:{" "}
                <span
                  className={`values text-zinc-400 ${
                    darkMode ? "darkMode" : ""
                  }`}
                >
                  {country.population}
                </span>
              </p>
              <p className="py-2">
                Region:{" "}
                <span
                  className={`values text-zinc-400 ${
                    darkMode ? "darkMode" : ""
                  }`}
                >
                  {country.region}
                </span>
              </p>
              <p className="pb-5">
                Capital:{" "}
                <span
                  className={`values text-zinc-400 ${
                    darkMode ? "darkMode" : ""
                  }`}
                >
                  {country.capital}
                </span>
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Country;
