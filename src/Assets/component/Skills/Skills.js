import React from "react";
import './Skills.scss';
import { MdHandyman, MdSmartToy} from "react-icons/md";
import { IoMdHand} from "react-icons/io";
import { FaNode, FaBomb} from "react-icons/fa";
import { SiUnity, SiReact, SiMongodb} from "react-icons/si"
import { BsGithub, BsMicrosoft} from "react-icons/bs"
import { GiSkeletonKey} from "react-icons/gi"
import Controller from "./control/controller"
const Skills =() =>{
    return(
        <section name="skills" className='skills'> 
            <div id="dashboard-container">    
                <div className='title'>
                    <h2 className="me">Mis Habilidades</h2>
                    <div className='title__arr'>
                        <MdHandyman/>
                        <span> </span>
                        <MdSmartToy/>
                        <span> </span>
                        <IoMdHand/>
                    </div>
                </div> 
                <div className="manual-container">
                                    
                <div className="sideB">
                    <div className="abs-title ribbon">Abilities
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i> 
                    </div>
                    <div className="controller" id="controller"> <Controller/></div>
                    <div className="m1">Dedicada </div>
                    <div className="m2">Adaptable</div>
                    <div className="m3">Organizada</div>
                    <div className="m4">Creativa</div>
                    <div className="m5">Colaboradora con equipos</div>
                </div>
                <div className="items">
                    <div className="items-title ribbon">Items
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i> 
                    </div>
                    <div className="d1">
                        <div className="sk-ico" id="unity"><SiUnity/></div>
                        <div className="sk-tl">Unity
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d2">
                        <div className="sk-ico" id="react" ><SiReact/></div>
                        <div className="sk-tl">React Native
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d3">
                        <div className="sk-ico" id="git"><BsGithub/></div>
                        <div className="sk-tl">Git
                            <div className="sk-bar"> </div>
                        </div>
                    </div> 
                    <div className="d6">
                        <div className="sk-ico" id="micro"><BsMicrosoft/></div>
                        <div className="sk-tl">Microsoft Office
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d5">
                        <div className="sk-ico" id="mongo"><SiMongodb/></div>
                        <div className="sk-tl">Mongo
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d4">
                        <div className="sk-ico" id="node"><FaNode/></div>
                        <div className="sk-tl">Node
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d7">
                    <div className="sk-ico" id="bomb"><FaBomb/></div>
                        <div className="sk-tl">Bombs
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                    <div className="d8">
                        <div className="sk-ico" id="key"><GiSkeletonKey/></div>
                        <div className="sk-tl">Skull Key
                            <div className="sk-bar"> </div>
                        </div>
                    </div>
                </div>
                </div>      
            </div>
        </section>
    );
}
export default Skills;