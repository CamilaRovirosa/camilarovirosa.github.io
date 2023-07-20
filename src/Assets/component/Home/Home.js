import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll';
import AnimatedLettes from "../AnimatedLetters/AnimatedLetters.js";
import Banner from "../Banner/Banner.js";
import './Home.scss'
const Home = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate');
    const[isMobile]= useState(false);
    const helloArray=['H','o','l','a','  !'];
    const amArray=['S','o','y'];
    const nameArray=['C','a','m','i','l','a'];
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
        
        <div name="home" className="home-page">
         
            <div className="text-zone" id="txt" style ={ isMobile? {transform:`translate(0, ${offsetY *1}px)`} : {transform:`none`} } >
                <h1 className="h1"> 
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
                <h2 className="h2">Frontend Developer / Game Developer?</h2>
                <Link to='contact' className="flat-button">Hablemos</Link>
            </div>
            <Banner/>
         </div> 
            
    );
}
export default Home;