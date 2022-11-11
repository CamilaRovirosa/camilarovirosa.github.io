import './About.scss';
//import Banner from "../../component/Banner/Banner";
import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import Card from './Card'

const AboutMe =() =>{
    return(
        
        <section className='shape'>         
                <div className='title'>
                    <h1>Un Poco Sobre Mi</h1>
                </div>
                <div className='slider'>                   
                        <div className='slider__pic'>
                            <img src={love} alt=""/>
                                                       
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
                </div >    
        </section>
    );
}
export default AboutMe;