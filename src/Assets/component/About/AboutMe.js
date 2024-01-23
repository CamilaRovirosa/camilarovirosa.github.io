import './About.scss';
import React , { useState } from 'react';
import { useTranslation } from "react-i18next";

import { GiThink, GiAxolotl, GiHeartOrgan, GiBrain } from "react-icons/gi";
import { FaLaptopCode} from "react-icons/fa";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";

import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import cuadrado from '../../images/cuadroazul.png';
import core from '../../images/CorePortrait.png';
import verde from '../../images/CuadroVerde.png';
import work from '../../images/WorkPortrait.png';
/*global slides*/
const AboutMe =() =>{
    const {t} = useTranslation();
    

    const [current, setCurrent] = useState(0);
    const length = t('slides').length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    return( 
        <section name='about' className='about'>  
            <div className='about-container'>             
                <div className='title'>
                    <h2 id="h2">{t('aboutTitle')}</h2>
                </div>
                <div className='title__arrA'>
                    <GiHeartOrgan/>
                    <span> </span>
                    <IoGameController/>
                    <span> </span>
                    <FaLaptopCode/>
                        
                </div>
                <div className='slider' >  
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
            </div>
        </section>
    );
}
export default AboutMe;