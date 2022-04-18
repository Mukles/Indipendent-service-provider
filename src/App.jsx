import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/index";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Services from "./components/services/services";
import Navbar from "./components/shared/navbar";
import Required from "./components/shared/Required/required";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/services"
          element={
            <Required>
              <Services />
            </Required>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
