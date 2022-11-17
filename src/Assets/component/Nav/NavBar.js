import React from "react";
import {Link} from 'react-scroll';
import "./NavBar.scss";
import Logo from '../../images/favicon/favicon-96x96.png';



const NavBar = () =>{
    
    return ( 
       
       /* <div className="nav-bar-container">
            <Link className="logo nav-bar-tab" to='/'>
                <img src = {Logo} className='ico' alt="logo"/>
            </Link>
            <div className="space">
            

                <NavLink  to="/AboutMe" className="nav-bar-tab" >
                    SOBRE MI
                        
                </NavLink>
                <NavLink  to="/Skills" className="nav-bar-tab" >
                    HABILIDADES
                        
                </NavLink>
                <NavLink  to="/Projects" className="nav-bar-tab" >
                    PROYECTOS
                        
                </NavLink>
                <NavLink  to="/Contact" className="nav-bar-tab" >
                    CONTACTO
                        
                </NavLink>
                </div>
        </div>*/
        <div className="nav-bar-container">
            
                <ul className="left">
                    <li className="logo nav-bar-tab left">
                        <Link  to='home'>
                            <img src = {Logo} className='ico' alt="logo"/>
                        </Link>
                    </li>
                </ul>
                <ul className="right">
                    <li className="nav-bar-tab">
                        <Link  to="about" smooth={true} duration={500} >
                            SOBRE MI                      
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                        <Link  to="skills" smooth={true} duration={500}>
                            HABILIDADES                         
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                        <Link  to="projects" smooth={true} duration={500}>
                            PROYECTOS        
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                        <Link  to="contact" smooth={true} duration={500} >
                            CONTACTO
                        </Link>
                    </li>
                </ul>
            
        </div>
       
            
        
    );
}
export default NavBar;