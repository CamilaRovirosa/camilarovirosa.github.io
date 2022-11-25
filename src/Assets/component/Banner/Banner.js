import {useEffect, useState} from 'react';

import './Banner.scss';
import AzulOscuro from './../../images/Parallax/Compressed/fondoOscuro_compressed.png'
import Edificio from './../../images/Parallax/Compressed/edificio_compressed.png'
import Nubes1 from './../../images/Parallax/Compressed/nubes1_compressed.png' 
import Nubes2 from './../../images/Parallax/Compressed/nubes2_compressed.png' 
import Nubes3 from './../../images/Parallax/Compressed/nubes3_compressed.png' 
//import img6 from './../../images/Parallax/Compressed/verde_compressed.png' 
import Casa from './../../images/Parallax/Compressed/casaYverde.png' 
import Piso from './../../images/Parallax/Compressed/piso_compressed.png' 
import Luz from './../../images/Parallax/Compressed/luz_compressed.png'
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
                <img src= {AzulOscuro} alt='azul oscuro' className="layer"  style={{transform:`translate(0, ${offsetY *2}px)`}}></img>
                <img src={Edificio} alt='edificios'className="layer" style={{transform:`translate(${offsetY *-0.5}px, ${offsetY *0.5}px)`}}></img>
                <img src={Nubes1} alt='nubes azules'className="layer"  style={{transform:`translate(0, ${offsetY *0.8}px)`}}></img>
                <img src={Nubes2} alt='nubez rosas'className="layer" style={{transform:`translate(0, ${offsetY *0.5}px)`}}></img>
                <img src={Nubes3} alt='nubes salmon'className="layer" style={{transform:`translate(${offsetY *0.5}px, ${offsetY *0.8}px)`}}></img>
               
                <img src={Casa}  sizes="50%" alt='casa y arbustos' className="layer" style={{transform:`translate(0, ${offsetY *0.8}px)`}}></img>
                <img src={Piso} alt='pasto' className="layer"  style={{transform:`translate(0, ${offsetY *0.2}px)`}}></img>
                <img src={Luz} alt='luz'className="layer layer_b8"  style={{transform:`translate(0, ${offsetY *0.8}px)`} }></img>

               {/*} <div className="layer layer-bg"></div>
                <div className="layer layer-blue" style={{transform:`translate(0, ${offsetY *2}px)`}}></div>
                <div className="layer layer-bg1" style={{transform:`translate(0, ${offsetY *2}px)`}}></div>
                <div className="layer layer-4" style={{transform:`translate(${offsetY *-0.5}px, ${offsetY *0.5}px)`}}></div>
                <div className="layer layer-1" style={{transform:`translate(0, ${offsetY *0.8}px)`}}></div>
                <div className="layer layer-2" style={{transform:`translate(0, ${offsetY *0.5}px)`}}></div>
                <div className="layer layer-3" style={{transform:`translate(${offsetY *0.5}px, ${offsetY *0.8}px)`}}></div>
                
                <div className="layer layer-6" style={{transform:`translate(0, ${offsetY *0.8}px)`}}></div>
                <div className="layer layer-7 " style={{transform:`translate(0, ${offsetY *0.2}px)`}}></div>
                <div className="layer layer-8" style={{transform:`translate(0, ${offsetY *0.8}px)`} }></div> */}
            </div>
            <div className="hero-mobile "></div>
       </span>
     </>
  
    );
}
export default Banner;