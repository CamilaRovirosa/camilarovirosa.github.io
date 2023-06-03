import React from "react";
import './Modal.scss';
import Pro1 from  './../../images/Parallax/Compressed/casa1-5_compressed.png';
import {AiFillCloseSquare, AiFillGithub, AiOutlineLink} from "react-icons/ai"

const Modal = ({open, onClose}) =>{
    if(!open)return null
    return(
    <div onClick={onClose} className="overlay">
        <div onClick={(e)=>{
            e.stopPropagation()
        }}
         className="modal-container">
            <img src={Pro1}
                alt="Proyecto del protafolio"
                className="modal-poster">
            </img>
            <div className="modal-right">
                <p onClick={onClose} className="closebtn"><AiFillCloseSquare/></p>
                <div className="modal-content">
                    <p className="modal-title">Portafolio :)</p>
                    <p className="modal-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris commodo nisi eu magna maximus, eget rhoncus diam dictum. 
                        Aenean vulputate commodo fringilla. 
                        Suspendisse tortor magna, bibendum nec lobortis in, consectetur id magna. Nam ut dolor at sapien blandit semper eu ac ipsum. Sed nec tempor massa, vel sodales ipsum. Proin tristique sapien eu odio finibus, nec suscipit turpis ornare. Proin euismod cursus magna, ut semper diam eleifend non. Phasellus cursus massa arcu, sit amet rutrum magna ullamcorper sed. 
                    </p>
                    <div className="modal-links">
                        <span className="link"><AiOutlineLink/></span>
                        <span className="github"><AiFillGithub/></span>
                    </div>
                    <div className="modal-images">
                        <div className="modal-img"></div>
                        <div className="modal-img"></div>
                        <div className="modal-img"></div>
                        <div className="modal-img"></div>
                        <div className="modal-img"></div>
                    </div>
                </div>
            </div>
            
        </div>

</div>
    )
}
export default Modal;