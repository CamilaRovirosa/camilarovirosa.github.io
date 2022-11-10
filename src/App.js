import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Assets/component/Layout/Layout.js";
import Home from "./Assets/component/Home/Home";
import Projects from "./Assets/component/Projects/Projects";
import AboutMe from "./Assets/component/About/AboutMe";
import Contact from "./Assets/component/Contact/Contact";
import Skills from "./Assets/component/Skills/Skills";
//import NavBar from "./Assets/component/Nav/NavBar.js";
//import Loader from "./Assets/component/loader/Loader";
import  "./App.scss";
function App() {
  return (
    <>
    
      <Routes>
        <Route path = "/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Projects" element={<Projects/>} />           
            <Route path="/Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
