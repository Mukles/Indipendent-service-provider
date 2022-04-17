import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/index";
import Fotter from "./components/shared/footer";
import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Fotter />
    </React.Fragment>
  );
};

export default App;
