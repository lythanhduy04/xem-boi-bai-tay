import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Tarot from "./Tarot";
import "./App.css";
import TarotResult from "./TarotResult";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isViewResult, setIsViewResult] = useState(false);

  const clickKhamPha = () => setIsWelcome(false);
  const clickPhanTich = () => setIsViewResult(true);

  return (
    <div className="App w-full">
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
    </div>
  );
}

export default App;
