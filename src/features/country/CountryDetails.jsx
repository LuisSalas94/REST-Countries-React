import Spinner from "../../utils/Spinner";
import CountryButton from "./CountryButton";
import useCountryDetailsHook from "./useCountryDetailsHook";

const CountryDetails = ({ darkMode }) => {
  const {
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
  } = useCountryDetailsHook();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={`app h-screen bg-slate-50 ${darkMode ? "darkMode" : ""}`}>
      <CountryButton />
      <div
        className={`app flex flex-col items-center justify-center gap-14 bg-slate-50 px-10 pt-2 lg:flex-row lg:gap-32 ${
          darkMode ? "darkMode" : ""
        }`}
      >
        <img src={flag} alt={name} className="h-56 md:h-80 lg:h-80" />
        <div className="info">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="items-baseline gap-10 md:flex">
            <ul className="my-6">
              <li>
                <span className="font-medium">Native Name: </span>{" "}
                <span className="values font-extralight">{nativeName}</span>
              </li>
              <li className="my-3">
                <span className="font-medium">Population: </span>{" "}
                <span className="font-extralight">{population}</span>
              </li>
              <li className="my-3">
                <span className="font-medium">Region: </span>
                <span className="font-extralight">{region}</span>
              </li>
              <li className="my-3">
                <span className="font-medium">Sub Region: </span>
                <span className="font-extralight">{subregion}</span>
              </li>
              <li>
                <span className="font-medium">Capital: </span>
                <span className="font-extralight">{capital}</span>
              </li>
            </ul>
            <ul className="mt-12">
              <li>
                <span className="font-medium">Top Level Domain: </span>{" "}
                <span className="font-extralight">{topLevelDomain}</span>
              </li>
              <li className="my-3">
                <span className="font-medium">Currencies: </span>{" "}
                <span className="font-extralight">{currenciesCountry}</span>
              </li>
              <li className="my-3">
                <span className="font-medium">Languages: </span>
                {languagesCountry.map((item) => (
                  <span key={item}>
                    <span className="font-extralight">{item}</span>
                    {", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div className="my-14">
            <span className="font-medium">Border Countries: </span>
            {!bordersCountry.length && (
              <span className="font-extralight">No borders were found</span>
            )}
            <ul className="flex flex-wrap items-center gap-2 pt-3">
              {bordersCountry.map((border) => (
                <li key={border} className="mt-3">
                  <span
                    className={`border_country rounded border bg-white px-9 py-2 text-xs shadow ${
                      darkMode ? "darkMode" : ""
                    }`}
                  >
                    <span className="font-extralight">{border}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
