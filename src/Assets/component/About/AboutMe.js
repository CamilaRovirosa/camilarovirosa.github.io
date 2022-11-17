import './About.scss';
import React , { useState } from 'react';

import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { GiThink, Gi3DMeeple, GiAxolotl, GiHeartOrgan, GiBrain } from "react-icons/gi";
import { FaLaptopCode} from "react-icons/fa";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";

import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import cuadrado from '../../images/cuadroazul.png';
import core from '../../images/CorePortrait.png';
import verde from '../../images/CuadroVerde.png';
import work from '../../images/WorkPortrait.png';
import Card from './Card';

const AboutMe =() =>{
    const but = [<GiHeartOrgan/>,<IoGameController/>, <FaLaptopCode/>];
    const slides = [
        {id: 1,
         button:  <GiHeartOrgan/> ,
         image: cuadrado,
         image2: core ,
         title: "¡¡¡Hola!!!",
         icon: <GiThink/>,
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         style: "cuadro",
         style1: "img2 img-scaleC",
        },
        {id: 2,
            button:<IoGameController/>, 
            image: circulo,
            image2: love ,
            style: "circulo",
            style1: "img1 img-scale",
        title: "Mis Hobbies" ,
        icon: <GiAxolotl/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {id: 3,
            button:  <FaLaptopCode/> ,
            image: verde,
            image2: work ,
            style: "verde",
            style1: "img3 img-scaleV",
        title: "Estilo de Trabajo",
        icon: <GiBrain/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    /*const goToSlide = (id) => {
        setCurrent(id);
    };*/


    return( 
        <section name='about' className='shape'>               
            <div className='title'>
                <h1 className="me">Un Poco Sobre Mi</h1>
            </div>
            <div className='title__arr'>
                <GiHeartOrgan/>
                <span> </span>
                <IoGameController/>
                <span> </span>
                <FaLaptopCode/>
               {/* {slides.map((obj, id) =>(
                    <div 
                    >
                         <GiHeartOrgan  key={id} onClick={()=>goToSlide(0)}/>
                        <IoGameController key={id} onClick={()=>goToSlide(1)}/>
                        <FaLaptopCode key={id} onClick={()=>goToSlide(2)}/>
                        
                    </div>
                ))}*/}
                    
            </div>
            <div className='slider slider'>  
                <div className='slider__item'>
                                     
                    <div className='slider__pic'>
                        <div className="slider__pic--holder"  onClick={nextSlide}>
                            <img src={slides[current].image} className={slides[current].style} alt={slides[current].id}/>
                            <img src={slides[current].image2} className={slides[current].style1} alt={slides[current].id}/>
                        </div>                                
                    </div>
                    <div className="slider__content">
                        
                            <div className="slider__title space">{slides[current].title}
                            <span className=" space">{slides[current].icon} </span>
                            </div>
                            <div className="slider__text">{slides[current].description}</div>
                            <div className='arrow'>
                            
                               
                                <TiArrowLeftOutline className='slider__content--arrow ' onClick={nextSlide}/>
                                
                                <TiArrowRightOutline className='slider__content--arrow'onClick={prevSlide}/>
                                
                            </div>
                        
                    </div>  
                    
                </div>
            </div >
            {/*<div className='slider'>  
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
            </div >  */}
        </section>
    );
}
export default AboutMe;