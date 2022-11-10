import './About.scss';
//import Banner from "../../component/Banner/Banner";
import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import Card from './Card.js';
const AboutMe = ()=> {
    return (
       
        <section className='shape'>
            <div className='title'>
                <h1>Un Poco Sobre Mi</h1>
            </div>
            <Card/>
        </section>
        
        
    );
}
export default AboutMe;