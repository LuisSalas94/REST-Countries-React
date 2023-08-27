import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from "./features/countries/CountryList";
import Header from "./ui/Header";
import CountryDetails from "./features/country/CountryDetails";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <BrowserRouter>
        <Header onClick={switchMode} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={<CountryList onClick={switchMode} darkMode={darkMode} />}
          />
          <Route
            path="/:alpha3Code"
            element={
              <CountryDetails onClick={switchMode} darkMode={darkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
