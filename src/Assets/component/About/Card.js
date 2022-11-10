import './Card.scss';
import love from '../../images/LovePortrait.png';
const Card = ()=> {

    return (
        <div className="blog-slider">
            
                <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img">
                        
                        <img src={love} alt=""/>
                    </div>
                    <div className="blog-slider__content">
                        <span className="blog-slider__code">26 December 2019</span>
                        <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                        <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                        <div  className="blog-slider__button">READ MORE</div>
                    </div>
                </div>
            
                
            
            <div className="blog-slider__pagination"></div>
        </div>
    );
}
export default Card;