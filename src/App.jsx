import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/index";
import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
