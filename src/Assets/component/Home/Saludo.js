import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLettes from "../AnimatedLetters/AnimatedLetters";
import './Home.scss'
const Saludo = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate');
    const helloArray=['H','o','l','a','  !'];
    const amArray=['S','o','y'];
    const nameArray=['C','a','m','i','l','a'];
    //const jobArray=['G','a','m','e','D','e','v','e','l','o','p','e','r']
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer);
      }, []);

      const [offsetY, setOffsetY]= useState('layer');
      useEffect(()=>{
          
          const handleScroll = () => setOffsetY(window.scrollY)
              window.addEventListener('scroll',handleScroll
              );
              return()=>{
                  window.removeEventListener('scroll', handleScroll);
              };
  
          }, []);
    return (
        //loader
        <div className="home-page">
            
            <div className="text-zone"  style={{transform:`translate(0, ${offsetY *1}px)`} } >
                <h1> 
                    <AnimatedLettes letterClass={letterClass}
                    strArray={helloArray}
                    idx={1}
                    />  
                    <br/> 
                    <AnimatedLettes letterClass={letterClass}
                    strArray={amArray}
                    idx={5}
                    />  
                    <span> </span>
                    <AnimatedLettes letterClass={letterClass}
                        strArray={nameArray}
                        idx={10}
                    /> 
                </h1>
                <br/>
                <h2>Frontend Developer / Game Devepler?</h2>
                <Link to='/Contact' className="flat-button">Hablemos</Link>
            </div>
        
         </div> 
            
    );

}
export default Saludo