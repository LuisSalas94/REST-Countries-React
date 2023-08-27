import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from "./features/countries/CountryList";
import Header from "./ui/Header";
import CountryDetails from "./features/country/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
