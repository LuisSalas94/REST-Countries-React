import Country from "../country/Country";
import CountriesInputs from "./CountriesInputs";

const CountryList = () => {
  return (
    <div className="h-screen bg-slate-50 pt-8">
      <div className="max-width">
        <CountriesInputs />
      </div>
      <div className=" mt-5 grid grid-cols-1 justify-items-center gap-10 bg-slate-50 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Country />
      </div>
    </div>
  );
};

export default CountryList;
