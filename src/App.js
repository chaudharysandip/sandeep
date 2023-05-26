import React from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import generateTheme from "./Services/Generate-theme";
import Home from "./Layouts/Home/Home";
import Header from "./Layouts/Header/index";
import "./App.css";
import Footer from "./Layouts/Footer";

const App = () => {
  const theme = generateTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
