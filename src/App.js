import React from "react";
import { useState, useEffect } from 'react';
//import { Routes, Route } from 'react-router-dom';
import Home from "./Assets/component/Home/Home";
import Projects from "./Assets/component/Projects/Projects";
import About from "./Assets/component/About/AboutMe";
import Contact from "./Assets/component/Contact/Contact";
import Skills from "./Assets/component/Skills/Skills";
import Footer from "./Assets/component/Footer/Footer";
import Loader from "./Assets/component/loader/Loader";
import  "./App.scss";
import './i18n';
import NavBar from "./Assets/component/Nav/NavBar.js";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
  <div>
    {loading ? (<Loader/> ) : (
      <span>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </span>
    )}
  </div>
  );
}

export default App;
