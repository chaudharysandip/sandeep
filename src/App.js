import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import generateTheme from "./Services/Generate-theme";
import Home from "./Layouts/Home/Home";
import Header from "./Layouts/Header/index";
import "./App.css";
import Footer from "./Layouts/Footer";
import Loader from "Services/Loader";
import { ModeContext } from "Services/Mode-context";

const App = () => {
  const [loader, setLoader] = useState(true);
  const themeMode = localStorage.getItem("themeMode");
  const [modeName, _setModeName] = useState(
    themeMode !== null ? themeMode : "dark"
  );

  const theme = generateTheme(modeName);

  const setModeName = (mode) => {
    _setModeName(mode);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", modeName);
    setTimeout(()=>{
      setLoader(false);
    }, 1000)
  }, [modeName]);

  return loader ? (
    <Loader />
  ) : (
    <ModeContext.Provider
      value={{
        mode: modeName,
        setMode: setModeName,
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ModeContext.Provider>
  );
};

export default App;
