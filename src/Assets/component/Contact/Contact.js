import "./Contact.scss"
import {GrMail} from "react-icons/gr";
import {BsFillChatTextFill} from "react-icons/bs";
import {FaPhone} from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = ()=> {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yldspgr', 'template_tveg1o5', form.current, '0mckW7Zea6OiRjAt6')
          .then((result) => {
              console.log(result.text);
              alert('Message successfully sent!')
              window.location.reload(false)
          }, (error) => {
              console.log(error.text);
              alert('Failed to send message!')
          });
      };

    return (
        <section name="contact" className='con'>         
            
            <div className='titleC'>
                    <h2 className="me">Contacto</h2>
            </div>
                <div className='titleC__arr'>
                    <BsFillChatTextFill/>
                    <span> </span>
                    <GrMail/>
                    <span> </span>
                    <FaPhone/>
                </div>
                <div className="card ">
                
                    <div className="card_contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul id="card_ul">
                                <li id="card_li" className="half">
                                    <input type='text' name="name" placeholder="Nombre" required></input>
                                </li>
                                <li  id="card_li" className="half">
                                    <input type='email' name="email" placeholder="Email" required></input>
                                </li>
                                <li  id="card_li">
                                    <input type='text' name="subject" placeholder="Subject" required></input>
                                </li>
                                <li  id="card_li" >                  
                                    <textarea placeholder="Message" name="message" required></textarea>            
                                </li>
                                <li  id="card_li" >
                                    <input type="submit" className="flat-buttonC" value='ENVIAR'></input>     
                                 </li>*
                            </ul>
                        </form>
                    </div>
                    <div className="card_pic">
                        <div className="postal"></div>
                        <div className="pc">
                    
                        </div>

                    </div>
                
                </div>
            
        </section>
            
    );
}
export default Contact;