import {useEffect, useState} from 'react';
import './Banner.scss';
import banner from '../../images/banner1-2N1-1.png';
const Banner =() =>{
    const [offsetY, setOffsetY]= useState('layer');
    useEffect(()=>{
        
        const handleScroll = () => setOffsetY(window.scrollY)
            window.addEventListener('scroll',handleScroll
            );
            return()=>{
                window.removeEventListener('scroll', handleScroll);
            };

        }, []);
    return(
    <>
       { /*<img src={banner} className="banner" alt ="banner"/>*/}
       <span className='base'> 
            <div className='hero'>
                <div className="layer layer-bg"></div>
                <div className="layer layer-blue" style={{transform:`translate(0, ${offsetY *2}px)`}}></div>
                <div className="layer layer-bg1" style={{transform:`translate(0, ${offsetY *2}px)`}}></div>
                <div className="layer layer-4" style={{transform:`translate(${offsetY *-0.5}px, ${offsetY *0.5}px)`}}></div>
                <div className="layer layer-1" style={{transform:`translate(0, ${offsetY *0.8}px)`}}></div>
                <div className="layer layer-2" style={{transform:`translate(0, ${offsetY *0.5}px)`}}></div>
                <div className="layer layer-3" style={{transform:`translate(${offsetY *0.5}px, ${offsetY *0.8}px)`}}></div>
                <div className="layer layer-5" style={{transform:`translate(0, ${offsetY *0.90}px)`}}></div>
                <div className="layer layer-6" style={{transform:`translate(0, ${offsetY *0.8}px)`}}></div>
                <div className="layer layer-7 " style={{transform:`translate(0, ${offsetY *0.2}px)`}}></div>
                <div className="layer layer-8" style={{transform:`translate(0, ${offsetY *0.8}px)`} }  ></div>
            </div>
            <div className="hero-mobile "></div>
       </span>
     </>
  
    );
}
export default Banner;