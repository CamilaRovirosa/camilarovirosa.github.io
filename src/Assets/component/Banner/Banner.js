import {useEffect, useState} from 'react';

import './Banner.scss';
import AzulOscuro from './../../images/Parallax/Compressed/fondoOscuro_compressed.png'
import Edificio from './../../images/Parallax/Compressed/edificio_compressed.png'
import Nubes1 from './../../images/Parallax/Compressed/nubes1_compressed.png' 
import Nubes2 from './../../images/Parallax/Compressed/nubes2_compressed.png' 
import Nubes3 from './../../images/Parallax/Compressed/nubes3_compressed.png' 
import Casa from './../../images/Parallax/Compressed/casaYverde.png' 
import Piso from './../../images/Parallax/Compressed/piso_compressed.png' 
import Luz from './../../images/Parallax/Compressed/luz_compressed.png'
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
        // Render the parallax banner
        <> 
            <span className='base'> 
                <div className='hero'>
                    {/* Background layer */}
                    <div className="layer layer-bg"></div>
                    {/* Blue layer */}
                    <div 
                        className="layer layer-blue" 
                        style={{transform:`translate(0, ${offsetY *2}px)`}}>    
                    </div>
                    {/* Dark blue layer */}
                    <img 
                        src= {AzulOscuro} 
                        alt='azul oscuro' 
                        className="layer"  
                        style={{transform:`translate(0, ${offsetY *2}px)`}}>
                    </img>
                    {/* Building image layer */}
                    <img 
                        src={Edificio} 
                        alt='edificios'className="layer" 
                        style={{transform:`translate(${offsetY *-0.5}px, ${offsetY *0.5}px)`}}>
                    </img>
                    {/* Blue clouds layer */}
                    <img 
                        src={Nubes1} 
                        alt='nubes azules'className="layer"  
                        style={{transform:`translate(0, ${offsetY *0.8}px)`}}>
                    </img>
                    {/* Pink clouds layer */}
                    <img 
                        src={Nubes2} 
                        alt='nubez rosas'className="layer" 
                        style={{transform:`translate(0, ${offsetY *0.5}px)`}}>
                    </img>
                    {/* Salmon clouds layer */}
                    <img 
                        src={Nubes3} 
                        alt='nubes salmon'className="layer" 
                        style={{transform:`translate(${offsetY *0.5}px, ${offsetY *0.8}px)`}}>
                    </img>
                    {/* House and greenery layer */}
                    <img 
                        src={Casa}  
                        sizes="50%" 
                        alt='casa y arbustos' 
                        className="layer" 
                        style={{transform:`translate(0, ${offsetY *0.8}px)`}}>
                    </img>
                    {/* Grass layer */}
                    <img 
                        src={Piso} 
                        alt='pasto' 
                        className="layer"  
                        style={{transform:`translate(0, ${offsetY *0.05}px)`}}>      
                    </img>
                     {/* Light layer */}
                    <img 
                        src={Luz} 
                        alt='luz'
                        className="layer layer_b8"  
                        style={{transform:`translate(0, ${offsetY *0.8}px)`} }>
                    </img>           
                </div>
                
                <div className="hero-mobile "></div>
            </span>
        </>
  
    );
}
export default Banner;