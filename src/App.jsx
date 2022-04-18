import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/blog";
import Home from "./components/index";
import Login from "./components/Login/login";
import NotFound from "./components/Notfound/notfound";
import Register from "./components/Register/register";
import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
