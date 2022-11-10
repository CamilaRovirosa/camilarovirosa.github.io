import React from "react";
import {Link, NavLink} from 'react-router-dom';
import "./NavBar.scss";
import Logo from '../../images/favicon/favicon-96x96.png';



const NavBar = () =>{
    
    return ( 
       
        <div className="nav-bar-container">
            <Link className="logo nav-bar-tab" to='/'>
                <img src = {Logo} className='ico' alt="logo"/>
            </Link>
            <div className="space">
            

                <NavLink  to="/AboutMe" className="nav-bar-tab about-link" >
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
        </div>
       
            
        
    );
}
export default NavBar;