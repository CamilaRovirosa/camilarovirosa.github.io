import './About.scss';
//import Banner from "../../component/Banner/Banner";
import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import cuadrado from '../../images/cuadroazul.png';
import core from '../../images/CorePortrait.png';
import verde from '../../images/CuadroVerde.png';
import work from '../../images/WorkPortrait.png';


const AboutMe =() =>{
    return( 
        <section name='about' className='shape'>               
            <div className='title'>
                <h1 className="me">Un Poco Sobre Mi</h1>
            </div>
            <div className='slider'>  
                <div className='slider__item'>                 
                    <div className='slider__pic'>
                        <div className="slider__pic--holder">
                            <img src={circulo} className="circulo" alt=" circulo rosa"/>
                            <img src={love} className="img1 img-scale"alt="retrato feliz con gato"/>
                        </div>                                
                    </div>
                    <div className="slider__content">
                        <div className="slider__box">
                            <div className="slider__title">En Escencia</div>
                            <div className="slider__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>  
                </div>
            </div >
            <div className='slider'>  
               <div className='slider__item'>                 
                    <div className='slider__pic'>
                        <div className="slider__pic--holder">
                            <img src={cuadrado} className="cuadro" alt=" cuadro azul"/>
                            <img src={core} className="img2 img-scaleC"alt="retrato basico"/>
                        </div>                                
                    </div>
                    <div className="slider__content">
                        <div className="slider__box">
                            <div className="slider__title">En Escencia</div>
                            <div className="slider__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>  
                </div>
            </div >
            <div className='slider'>  
                <div className='slider__item'>                 
                    <div className='slider__pic'>
                        <div className="slider__pic--holder">
                            <img src={verde} className="verde" alt="cuadro verde"/>
                            <img src={work} className="img3 img-scaleV"alt="retrato trabajadora"/>
                        </div>                                
                    </div>
                    <div className="slider__content">
                        <div className="slider__box">
                            <div className="slider__title">En Escencia</div>
                            <div className="slider__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>  
                        </div>                              
                        </div >  
        </section>
    );
}
export default AboutMe;