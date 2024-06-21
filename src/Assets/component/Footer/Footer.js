import {IoLogoGithub, IoLogoTwitter, IoLogoCodepen} from "react-icons/io"
import './Footer.scss';
const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="grid">
                <div className="column-xs-8">
                    <ul className="social">
                    <li className="fab icons"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a></li>
                    <li className="fab icons"><a href="https://codepen.io" target="_blank" rel="noopener noreferrer"><IoLogoCodepen/></a></li>
                    <li className="fab icons"><a href="https://github.com" target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a></li>
                    </ul>
                    <p className="copyright">&copy; Gracias por visitar mi pagina</p>
                </div>
                </div>
            </div>
        </footer>
    );
} 
export default Footer;