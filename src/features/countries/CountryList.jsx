import Country from "../country/Country";
import CountriesInputs from "./CountriesInputs";

const CountryList = ({ onClick, darkMode }) => {
  return (
    <div
      className={`app h-screen bg-slate-50 pt-8 ${darkMode ? "darkMode" : ""} `}
    >
      <div className="max-width">
        <CountriesInputs onClick={onClick} darkMode={darkMode} />
      </div>
      <div
        className={`app mt-5  grid grid-cols-1 justify-items-center gap-10 bg-slate-50 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
          darkMode ? "darkMode" : ""
        }`}
      >
        <Country onClick={onClick} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default CountryList;
