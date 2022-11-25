import React from "react";
import './Projects.scss';
import {SiCodefactor, SiExercism} from "react-icons/si"
import {AiOutlineCheckCircle, AiOutlineRightSquare} from "react-icons/ai"
import { IoGameController } from "react-icons/io5";
const Projects = ()=> {
    return (
        <section name="projects" className='pro'>         
                <div className='title'>
                    <h2 className="me">Proyectos</h2>
                </div>
                <div className='title__arr'>
                    <SiCodefactor/>
                    <span> </span>
                    <SiExercism/>
                    <span> </span>
                    <IoGameController />
                </div>
        </section>
    );
}
export default Projects;