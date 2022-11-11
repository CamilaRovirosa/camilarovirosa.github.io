import React from "react";
import './Skills.scss';
import love from '../../images/LovePortrait.png';
const Skills =() =>{
    return(
        <section className='shape'>         
                <div className='title'>
                    <h1>Mis Habilidades</h1>
                </div>
                <div className='slider-grid'>                   
                        <div className='slider-grid__pic'>
                            <img src={love} alt=""/>
                        </div>
                        <div className="slider-grid__content">
                            <h3>Core</h3>
                        </div>                  
                </div >    
        </section>
    );
}
export default Skills;