import useCountriesInputsHook from "./useCountriesInputsHook";

const CountriesInputs = ({ darkMode }) => {
  const { countriesInputRef, regionInputRef, searchCountries, selectRegion } =
    useCountriesInputsHook();

  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      <div className={`search_input relative ${darkMode ? "darkMode" : ""}`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          className="block w-80 rounded-lg border border-gray-300 p-2.5 pl-10 text-sm text-gray-500 shadow-md md:w-80"
          ref={countriesInputRef}
          onChange={searchCountries}
        />
      </div>
      <div>
        <select
          className="block w-80 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-500 shadow-md md:w-80"
          ref={regionInputRef}
          onChange={selectRegion}
        >
          <option>Filter by Region</option>
          <option>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default CountriesInputs;
