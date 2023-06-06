import React from "react";
import './Modal.scss';
import Pro1 from  './../../images/projects/portafoli1.png';
import Pro2 from  './../../images/projects/portafoli2.png';
import Pro3 from  './../../images/projects/portafoli3.png';
import Pro4 from  './../../images/projects/portafoli4.png';
import Pro5 from  './../../images/projects/portafoli5.png';
import {AiFillCloseSquare, AiFillGithub, AiOutlineLink} from "react-icons/ai"

const Modal = ({open, onClose, idx}) =>{
    const modals = [
        {id: 1,
        name: 'Portafolio',
         image: Pro1,
         title: "Prortafolio",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo nisi eu magna maximus, eget rhoncus diam dictum. Aenean vulputate commodo fringilla. Suspendisse tortor magna, bibendum nec lobortis in, consectetur id magna. Nam ut dolor at sapien blandit semper eu ac ipsum. Sed nec tempor massa, vel sodales ipsum. Proin tristique sapien eu odio finibus, nec suscipit turpis ornare. Proin euismod cursus magna, ut semper diam eleifend non. Phasellus cursus massa arcu, sit amet rutrum magna ullamcorper sed.",
         linkGit: "https://github.com/CamilaRovirosa/PortfolioWebPage" ,
         link: "proximamente" ,
         img1: Pro1,
         img2: Pro2,
         img3: Pro3,
         img4: Pro4,
         img5: Pro5,
        },
        {id: 1,
            name: 'Bounce 3D',
             image: Pro1,
             title: "Bounce 3D",
             description: "Un juego que hice en la universidad para una clase con un equipo. Esta inspirado en un juego de Nokia ",
             linkGit: "https://github.com/CamilaRovirosa/PortfolioWebPage" ,
             link: "proximamente" ,
             img1: Pro1,
             img2: Pro1,
             img3: Pro1,
             img4: Pro1,
             img5: Pro1,
        },
        {id: 3,
            name: 'The Cat',
            image: Pro1,
            title: "The Cat",
            description: "Un juego sobre un lindo gatito y dueño que poco a poco se va volviendo loco. Pero ssera solo el o abra alguna razon???",
            linkGit: "https://github.com/CamilaRovirosa/PortfolioWebPage" ,
            link: "proximamente" ,
            img1: Pro1,
            img2: Pro1,
            img3: Pro1,
            img4: Pro1,
            img5: Pro1,
        },
    ];
    const id = idx
        
    if(!open)return null
    return(
    <div onClick={onClose} className="overlay">
        <div onClick={(e)=>{
            e.stopPropagation()
        }}

         className="modal-container">
            <img src={modals[id].image}
                alt={modals[id].title}
                className="modal-poster">
            </img>
            <div className="modal-right">
                <p onClick={onClose} className="closebtn"><AiFillCloseSquare/></p>
                <div className="modal-content">
                    <p className="modal-title">{modals[id].title}</p>
                    <p className="modal-desc">{modals[id].description}</p>
                    <div className="modal-links">
                        <span className="link">
                       
                                <span className="popuptext">{modals[id].link}</span>
                                <AiOutlineLink/>      
                        </span>
                        <span className="github">
                            <a href={modals[id].linkGit}
                                target='_blank'
                                rel="noopener noreferrer"
                                aria-label='Github'>
                                <AiFillGithub/>
                            </a>
                        </span>
                    </div>
                    <div className="modal-images">
                        <div className="modal-img modal-minimg">
                            <img src={modals[id].img1}
                            alt={modals[id].title}
                            >
                            </img>
                        </div>
                        <div className="modal-img modal-minimg">
                            <img src={modals[id].img2}
                                alt={modals[id].title}
                                >
                            </img>
                        </div>
                        <div className="modal-img modal-minimg">
                            <img src={modals[id].img3}
                                alt={modals[id].title}
                                >
                            </img>
                        </div>
                        <div className="modal-img modal-minimg">
                            <img src={modals[id].img4}
                                alt={modals[id].title}
                                >
                            </img>
                        </div>
                        <div className="modal-img modal-minimg">
                            <img src={modals[id].img5}
                                alt={modals[id].title}
                                >
                            </img>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

</div>
    )
}
export default Modal;