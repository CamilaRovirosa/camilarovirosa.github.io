import React from "react";
import './Skills.scss';
import { MdHandyman, MdSmartToy} from "react-icons/md";
import { IoMdHand} from "react-icons/io";
const Skills =() =>{
    return(
        <section name="skills" className='skills'>         
            <div className='title'>
                <h2 className="me">Mis Habilidades</h2>
                
            </div>
            <div className='title__arr'>
                    <MdHandyman/>
                    <span> </span>
                    <MdSmartToy/>
                    <span> </span>
                    <IoMdHand/>
                </div>
        </section>
    );
}
export default Skills;