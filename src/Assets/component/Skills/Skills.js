import React from "react";
import './Skills.scss';
import { MdHandyman, MdSmartToy, MdOutlineWeb} from "react-icons/md";
import { IoMdHand} from "react-icons/io";
import { SiUnity, SiReact, SiAseprite} from "react-icons/si";
import { BsGithub, BsMicrosoft} from "react-icons/bs";
import Controller from "./control/controller";
import Progress from "./Progress";
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
                            <span className="sk-percent"> 30%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="30" />
                                
                            </div>
                        </div>
                    </div>
                    <div className="d2">
                        <div className="sk-ico" id="react" ><SiReact/></div>
                        <div className="sk-tl">React Native
                            <span className="sk-percent"> 50%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="50" />
                                
                            </div>
                        </div>
                    </div>
                    <div className="d3">
                        <div className="sk-ico" id="git"><BsGithub/></div>
                        <div className="sk-tl">Git
                            <span className="sk-percent"> 40%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="40" />
                                
                            </div>
                        </div>
                    </div> 
                    <div className="d6">
                        <div className="sk-ico" id="micro"><BsMicrosoft/></div>
                        <div className="sk-tl">Microsoft 
                            <span className="sk-percent"> 70%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="70" />
                                
                            </div>
                        </div>
                    </div>
                    <div className="d5">
                        <div className="sk-ico" id="mongo"><MdOutlineWeb/></div>
                        <div className="sk-tl">HTML5 & CSS
                            <span className="sk-percent"> 60%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="40" />
                                
                            </div>
                        </div>
                    </div>
                    <div className="d4">
                        <div className="sk-ico" id="aseprite"><SiAseprite/></div>
                        <div className="sk-tl">Aseprite
                            <span className="sk-percent"> 70%</span>
                            <div className="sk-bar" >
                                
                                    <Progress  done="70" />
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="abs">
                <div className="abs-title ribbon">Abilities
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i> 
                    </div>
                    <div className="controller" id="controller"> <Controller/></div>
                    <div className="m1">
                            <div className="abs-color" id="r"></div>
                                <div className="abs-tl"> Organizada</div> 
                                <p className="abs-p"> </p>
                        </div>
                        <div className="m2">
                            <div className="abs-color" id="y"></div >
                                <div className="abs-tl"> Adaptable</div>
                                <p className="abs-p">
                                    </p>
                        </div>
                        <div className="m3">
                            <div className="abs-color" id="g"></div>
                                <div className="abs-tl">Proactiva</div>
                                <p className="abs-p"></p>
                        </div>
                        <div className="m4">
                            <div className="abs-color" id="b"></div>
                                <div className="abs-tl">Creativa</div>
                                <p className="abs-p"> </p>
                        </div>
                        <div className="m5">
                        <div className="abs-t" ></div>
                            <div className="abs-tl" >Honesta </div>
                            <p className="abs-p"></p>
                        </div>
                </div>
                </div>      
            </div>
        </section>
    );
}
export default Skills;