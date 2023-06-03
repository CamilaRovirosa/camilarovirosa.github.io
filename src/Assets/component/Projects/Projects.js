import React from "react";
import { useState, useEffect } from "react";
import './Projects.scss';
import {SiCodefactor, SiExercism} from "react-icons/si"
import { IoGameController } from "react-icons/io5";
import Modal from './Modal';
import Pro1 from  './../../images/Parallax/Compressed/casa1-5_compressed.png';
const Projects = ()=> {
    const [active, setActive]= useState(false);
    const [projectsClass, setProjectsClass]= useState('top3-project');

    useEffect (()=>{
        if(active === true){
            setProjectsClass('top3-change')
        }
    },[projectsClass, active]
    )
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
                       <span onClick={() => setActive(true)}>
                            <img src={Pro1}
                                alt="Proyecto del protafolio"
                                className="top3-poster">
                            </img>
                            </span> 
                        <Modal open={active} onClose={()=> setActive(false)}/> 
                        
                        <div className="top3-title">Portafolio :)</div>
                        <div className="top3-info">
                            <span className="top3-comment">Por que me gusto mucho como quedo este portafolio.</span>
                        </div>
                        
                    </div>
                {/* //////////////proyecto 2//////////////*/}  
                    <div className="top3-project">
                        <img src={Pro1}
                            alt="Proyecto del protafolio"
                            className="top3-poster">
                        </img>
                        <div className="top3-title">Portafolio :^</div>
                        <div className="top3-info">
                            <span className="top3-comment">Por que me gusto mucho como quedo este portafolio.</span>
                        </div>
                        <div className="top3-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris commodo nisi eu magna maximus, eget rhoncus diam dictum. 
                            Aenean vulputate commodo fringilla. 
                            Suspendisse tortor magna, bibendum nec lobortis in, consectetur id magna. Nam ut dolor at sapien blandit semper eu ac ipsum. Sed nec tempor massa, vel sodales ipsum. Proin tristique sapien eu odio finibus, nec suscipit turpis ornare. Proin euismod cursus magna, ut semper diam eleifend non. Phasellus cursus massa arcu, sit amet rutrum magna ullamcorper sed. 
                        </div>
                    </div>
                {/* //////////////proyecto 3//////////////*/}
                    <div className="top3-project">
                        <img src={Pro1}
                            alt="Proyecto del protafolio"
                            className="top3-poster">
                        </img>
                        <div className="top3-title">Portafolio :^</div>
                        <div className="top3-info">
                            <span className="top3-comment">Por que me gusto mucho como quedo este portafolio.</span>
                        </div>
                        <div className="top3-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris commodo nisi eu magna maximus, eget rhoncus diam dictum. 
                            Aenean vulputate commodo fringilla. 
                            Suspendisse tortor magna, bibendum nec lobortis in, consectetur id magna. Nam ut dolor at sapien blandit semper eu ac ipsum. Sed nec tempor massa, vel sodales ipsum. Proin tristique sapien eu odio finibus, nec suscipit turpis ornare. Proin euismod cursus magna, ut semper diam eleifend non. Phasellus cursus massa arcu, sit amet rutrum magna ullamcorper sed. 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;