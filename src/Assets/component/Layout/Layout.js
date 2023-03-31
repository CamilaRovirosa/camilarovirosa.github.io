import {Outlet} from "react-router-dom";
import './Layout.scss';
import NavBar from '../Nav/NavBar';
import Banner from "../Banner/Banner";
import About from "../About/AboutMe";
import Home from "../Home/Home";
import Skills from "../Skills/Skills.js";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Loader from "../loader/Loader"
import work from '../../images/WorkPortrait.png';
const Layout = ()=>{
    return(
        
          <div className="pic">
        <img src={work}></img>
            ¡¡¡Hola
          </div>

    );
}
export default Layout;