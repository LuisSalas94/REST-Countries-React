import Country from "../country/Country";
import CountriesInputs from "./CountriesInputs";

const CountryList = () => {
  return (
    <div>
      <div>
        <CountriesInputs />
      </div>
      <div>
        <Country />
      </div>
    </div>
  );
};

export default CountryList;
