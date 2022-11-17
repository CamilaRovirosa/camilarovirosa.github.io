//import "../styles/Loader.scss";
import Expire from "./Expire";
import "./loader2.scss";

const Loader = () => {
    return (  
        <Expire delay="3000">
                <div className="loader">
                        <div className="loading">
                                
                                <span></span> 
                                <span></span> 
                                <span></span> 
                                <span></span>            
                                <div className="loading__text" data-text="CAMILA">CAMILA</div>            
                                <div className="loading__text" data-text="ROVIROSA">ROVIROSA</div>            
                                <div className="loading__text" data-text="Portafolio">Portafolio</div>
                        </div>
                </div>
        </Expire>
    );
  }
  
  export default Loader;
