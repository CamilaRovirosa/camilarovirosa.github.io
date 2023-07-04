import React, {  useState }  from "react";
import {Link} from 'react-scroll';
import "./NavBar.scss";
import Logo from '../../images/favicon/favicon-96x96.png';
import CV from '../../Documents/CV_CamilaRovirosa_Español.pdf';
import  {GiHamburgerMenu} from "react-icons/gi"


const NavBar = () =>{
   const [showNav, setShowNav] = useState(false);
   const handleShowNav=()=>{
        setShowNav(!showNav);
   }
    return ( 
        //Desktop
        <div className="nav-bar-container">
            {/*Desktop*/}
                <ul className="left">
                    <li className="logo nav-bar-tab left">
                        <Link  to='home'>
                            <img src = {Logo} className='ico' alt="logo"/>
                        </Link>
                    </li>
                </ul>
                <ul className={showNav ? 'movil-show' : 'right'} >
                    <li className="nav-bar-tab">
                        <Link  to="about" smooth={true} duration={500}  onClick={handleShowNav}>
                            SOBRE MI                      
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                        <Link  to="skills" smooth={true} duration={500} onClick={handleShowNav}>
                            HABILIDADES                         
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                        <Link  to="projects" smooth={true} duration={500}  onClick={handleShowNav}>
                            PROYECTOS        
                        </Link>
                    </li>
                    <li className="nav-bar-tab" >
                        <Link  to="contact" smooth={true} duration={500}  onClick={handleShowNav} >
                            CONTACTO
                        </Link>
                    </li>
                    <li className="nav-bar-tab">
                    <a href={CV}  target="_blank" rel="noopener noreferrer"  onClick={handleShowNav}>CV</a>

                    </li>
                </ul>
            {/*/Mobile*/} 
            <span className="menu"
                onClick={handleShowNav}>
                    <GiHamburgerMenu/>
            </span>
            
        </div>
       
            
        
    );
}
export default NavBar;