import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>Guestbook</h1>
            <h2>What People are Saying</h2>
            <Carousel infiniteLoop={true} autoPlay={true} interval={5000} emulateTouch={true} showStatus={false}showArrows={false}>
                <div className="carousel-item">
                    <blockquote><em>“Because a restaurant’s story is never complete, there is always something new and wonderful to discover. An evening spent at Boqueria is like boarding a golden ship sailing through a Parisian night.”                        
                    </em></blockquote>
                    <div className="review">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                        </div>
                        <div className='line'></div>
                        <h3>Malcolm Gladwell</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <blockquote><em>"Out of all the place I have visited in the world, I have found Boqueria to be the most beautiful and delightful. The delicious paellas in Haddon's restaurant are the best I have had anywhere. The grounds are so magical I can almost imagine the days when my ancestors rode across them, armor and swords clanking and horses everywhere, as they rode off to fight wherever needed. Haddon has managed to give a magnificent glimpse into the past while still retaining all its charm. Thank you for such a delight"                  
                    </em></blockquote>
                    <div className="review">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                        </div>
                        <div className='line'></div>
                        <h3>Bryant Mcgill</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <blockquote><em>"The food was excellent and the service was the best we’ve experienced in Spain so far. We’ll definitely come back to try out more of the dishes!"                     
                    </em></blockquote>
                    <div className="review">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <FontAwesomeIcon icon={faStarHalfAlt} color="gold"/>
                        </div>
                        <div className='line'></div>
                        <h3>Charles F.Lummis</h3>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default Testimonials
