import React from "react";
import './Skills.scss';
import love from '../../images/LovePortrait.png';
const Skills =() =>{
    return(
        <section className='shape'>
            <div className="container">
                <div className='title'>
                    <h1>Mis Habilidades</h1>
                </div>
                <div className='slider-grid'>
                    
                    <div className='card'>
                        <div className='slider-potrait'>
                        <img src={love} alt=""/>
                        </div>
                        <div className="slide-content">

                        </div>
                    </div>
                </div >    
            </div>  
        </section>
    );
}
export default Skills;