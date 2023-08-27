import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from "./features/countries/CountryList";
import Header from "./ui/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
