import "./Contact.scss"
import {GrMail} from "react-icons/gr";
import {BsFillChatTextFill} from "react-icons/bs";
import {FaPhone} from "react-icons/fa";
const Contact = ()=> {
    return (
        <section name="contact" className='con'>         
            
            <div className='title'>
                    <h2 className="me">Contacto</h2>
                </div>
                <div className='title__arr'>
                    <BsFillChatTextFill/>
                    <span> </span>
                    <GrMail/>
                    <span> </span>
                    <FaPhone/>
                </div>
            
        </section>
            
    );
}
export default Contact;