// import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./layouts/maincontainer";
import HomePage from "./pages/Home";
import SearchAddress from "./pages/SearchResult";
import { MyAddressContext } from "./components/Context/address";
import { useEffect, useState } from "react";
import ReviewPage from "./pages/Review";
import { MyModalContext } from "./components/Context/modal";

function App() {
  const [address, setAddress] = useState(
    "Bonny and Clyde Street, Ajao Estate, Lagos."
  );
  const [show, setShow] = useState(false);
  useEffect(() => {
    const storedState = localStorage.getItem("addressState");
    if (storedState) {
      setAddress(JSON.parse(storedState));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("addressState", JSON.stringify(address));
  }, [address]);

  return (
    <>
      <BrowserRouter>
        <MyAddressContext.Provider value={{ address, setAddress }}>
          <MyModalContext.Provider value={{ show, setShow }}>
            <MainContainer>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchAddress />} />
                <Route path="/review" element={<ReviewPage />} />
              </Routes>
            </MainContainer>
          </MyModalContext.Provider>
        </MyAddressContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
