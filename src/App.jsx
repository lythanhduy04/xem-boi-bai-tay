import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Welcome from "./Welcome";
import Tarot from "./Tarot";
import TarotResult from "./TarotResult";

import "./App.css";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isViewResult, setIsViewResult] = useState(false);

  const clickKhamPha = () => {
    setIsWelcome(false);
  };

  const clickPhanTich = () => {
    setIsViewResult(true);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            isWelcome ? (
              <Welcome clickKhamPha={clickKhamPha} />
            ) : isViewResult ? (
              <TarotResult />
            ) : (
              <Tarot clickPhanTich={clickPhanTich} />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
