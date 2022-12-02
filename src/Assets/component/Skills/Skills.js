import React from "react";
import './Skills.scss';
import { MdHandyman, MdSmartToy} from "react-icons/md";
import { IoMdHand} from "react-icons/io";
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
                <div className=".gridBox">
                    <div className="row">
                     {/*   <fieldset><legend>
                            tech
                            </legend>
                        </fieldset>*/}
                         <div className="column">
                     {/*   <fieldset><legend>
                            tech
                            </legend>
                        </fieldset>*/}
                        <p>Row</p>
                        </div>
                    
                
                        <div className="column item">
                            <div id="controller">
                                <Controller/>
                            </div> 
                        </div>
                    </div>
                
                </div>
                
            </div>
        </section>
    );
}
export default Skills;