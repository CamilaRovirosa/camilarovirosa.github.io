import React from "react";
import { useState} from "react";
import './Projects.scss';
import {SiCodefactor, SiExercism} from "react-icons/si"
import { IoGameController } from "react-icons/io5";
import Modal from './Modal';
import Pro1 from  './../../images/projects/portafoli1.png';
import Temp from './../../images/projects/progress.png'

const Projects = ()=> {
    const [active, setActive]= useState(false);
    const [ident, setId]=useState();
    return (

        <section name="projects" className='pro'>
            <div className="project-container">         
                <div className='title'>
                    <h2 className="me">Proyectos</h2>
                
                    <div className='title__arr'>
                        <SiCodefactor/>
                        <span> </span>
                        <SiExercism/>
                        <span> </span>
                        <IoGameController />
                    </div>
                </div>
                
                <div className="top3">
                {/* //////////////proyecto 1//////////////*/}  
                    <div className="top3-project" >
                       <span onClick={() => setActive(true) & setId(0)}>
                            <img src={Pro1}
                                alt="Proyecto del protafolio"
                                className="top3-poster">
                            </img>
                        </span> 
                        
                            <Modal open={active} onClose={()=> setActive(false)} idx={ident}/> 
                        
                        <div className="top3-title">Portafolio</div>
                        <div className="top3-info">
                            <span className="top3-comment"> este portafolio.</span>
                        </div>
                        
                    </div>
                {/* //////////////proyecto 2////////////// */}
                    <div className="top3-project">
                        <span onClick={() => setActive(true) & setId(1)}>
                            <img src={Temp}
                                alt="Proyecto del protafolio"
                                className="top3-poster"
                                width = "350" height = "325">
                            </img>
                        </span> 
                        <Modal open={active} onClose={()=> setActive(false)} idx={ident}/> 
                        <div className="top3-title">Bounce 3D</div>
                        <div className="top3-info">
                            <span className="top3-comment">Proyecto de la universidad</span>
                        </div>
                    </div>
                {/* //////////////proyecto 3//////////////*/}
                    <div className="top3-project">
                        <span onClick={() => setActive(true) & setId(2)}>
                            <img src={Temp}
                                alt="Proyecto del protafolio"
                                className="top3-poster"
                                width = "350" height = "325">
                            </img>
                        </span> 
                        <Modal open={active} onClose={()=> setActive(false)} idx={ident}/> 
                        <div className="top3-title">The Cat</div>
                        <div className="top3-info">
                            <span className="top3-comment">un juego desarrollado por mi </span>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>
    );
}
export default Projects;