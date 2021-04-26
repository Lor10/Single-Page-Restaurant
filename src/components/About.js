import {useState} from 'react'
import ferran from '../media/ferran-adria.jpg'
import gilberto from '../media/gilberto-fletes.jpg'
import aracely from '../media/aracely-callejo.jpg'
import leocadio from '../media/leocadio-capellan.jpg'
import awardLogos from '../media/award-logos.png'

import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
    const [story, setStory] = useState(false)
    const [team, setTeam] = useState(false)
    const [awards, setAwards] = useState(false)


    const removeStyles = () => {
        document.querySelector('#story').classList.remove('hover')
        document.querySelector('#team').classList.remove('hover')
        document.querySelector('#awards').classList.remove('hover')
        document.querySelector('#story .underline').style.opacity = null;
        document.querySelector('#team .underline').style.opacity = null;
        document.querySelector('#awards .underline').style.opacity = null;
    }

    const showStory = () => {
        setTeam(false)
        setAwards(false)
        setStory(true)
        removeStyles()
        document.querySelector('#story').classList.add('hover')
        document.querySelector('#story .underline').style.opacity = '1';
    }
    const showTeam = () => {
        setTeam(true)
        setAwards(false)
        setStory(false)
        removeStyles()
        document.querySelector('#team').classList.add('hover')
        document.querySelector('#team .underline').style.opacity = '1';
    }
    const showAwards = () => {
        setTeam(false)
        setAwards(true)
        setStory(false)
        removeStyles()
        document.querySelector('#awards').classList.add('hover')
        document.querySelector('#awards .underline').style.opacity = '1';
    }


    return (
        <section className="about-container">
            <ul className="about-tabs">
                <li id="story" onClick={() => showStory()}>
                    <h3>The Story</h3>
                    <div className="underline"></div>
                </li>
                <li id="team" onClick={() => showTeam()}>
                    <h3>The Team</h3>
                    <div className="underline"></div>
                </li>
                <li id="awards" onClick={() => showAwards()}>
                    <h3>Awards</h3>
                    <div className="underline"></div>
                </li>
            </ul>
            {story &&   <section className="story">
                            <div className="milestones">
                                <div className="milestone">
                                    <h3>2004</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cumque quaerat velit itaque sunt autem quidem dolores officia voluptates!</p>
                                </div>
                                <div className="milestone">
                                    <h3>2010</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cumque quaerat velit itaque sunt autem quidem dolores officia voluptates!</p>
                                </div>
                                <div className="milestone">
                                    <h3>2016</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cumque quaerat velit itaque sunt autem quidem dolores officia voluptates!</p>
                                </div>
                            </div>
                            <p className='quote'><em>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet dolorem vitae culpa, assumenda recusandae veniam reprehenderit est eligendi maxime aliquam fugit velit eum minus, nisi exercitationem error quidem inventore."</em></p>
                            <p className='quote-author'>Ferran Adrià</p>
                        </section>
            }
            {team &&    <section className="team"> 
                            <div className="members">
                                <div className="member">
                                    <div className="image-container">
                                        <img src={ferran} alt=""/>
                                        <div className="overlay"></div>
                                        <div className="social">
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faGooglePlusG} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faTwitter} color="white" size="md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Ferran adrià</h3>
                                    <h6>Founder & Chef</h6>
                                    <div className="member-underline"></div>
                                    <p>Tel: 947 577 575</p>
                                    <p>chef@example.com</p>
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rerum distinctio. Sint, ad corrupti nam voluptas nihil</p>
                                </div>

                                <div className="member">
                                    <div className="image-container">
                                        <img src={gilberto} alt=""/>
                                        <div className="overlay"></div>
                                        <div className="social">
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faGooglePlusG} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faTwitter} color="white" size="md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Gilberto Fletes</h3>
                                    <h6>Master Chef</h6>
                                    <div className="member-underline"></div>
                                    <p>Tel: 947 577 575</p>
                                    <p>chef@example.com</p>
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rerum distinctio. Sint, ad corrupti nam voluptas nihil</p>
                                </div>

                                <div className="member">
                                    <div className="image-container">
                                        <img src={aracely} alt=""/>
                                        <div className="overlay"></div>
                                        <div className="social">
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faGooglePlusG} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faTwitter} color="white" size="md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Aracely Callejo </h3>
                                    <h6>Sous chef</h6>
                                    <div className="member-underline"></div>
                                    <p>Tel: 947 577 575</p>
                                    <p>chef@example.com</p>
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rerum distinctio. Sint, ad corrupti nam voluptas nihil</p>
                                </div>

                                <div className="member">
                                    <div className="image-container">
                                        <img src={leocadio} alt=""/>
                                        <div className="overlay"></div>
                                        <div className="social">
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faGooglePlusG} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="md"/>
                                            </div>
                                            <div className="social-item">
                                                <FontAwesomeIcon icon={faTwitter} color="white" size="md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Leocadio Capellan</h3>
                                    <h6>Manager</h6>
                                    <div className="member-underline"></div>
                                    <p>Tel: 947 577 575</p>
                                    <p>chef@example.com</p>
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rerum distinctio. Sint, ad corrupti nam voluptas nihil</p>
                                </div>
                            </div>

                        </section>
                }
            {awards &&  <section className="awards">
                            <div className="awards-logos">
                                <img src={awardLogos} alt=""/>
                            </div>
                            <div className="awards-lists">
                                <ul className="awards-list">
                                    <li>ESPRESSO Guide, Rating 1920 (2007)</li>
                                    <li>Gambero Rosso, Three forks (2008)</li>
                                    <li>Identità Golose, Chef of the Year (2010)</li>
                                    <li>BMW Guide, Restaurant of the Year (2010)</li>
                                    <li>Michelin Guide, Three Michelin Stars (2011)</li>
                                    <li>Gambero Rosso Guide, Best Restaurant Rating 95 (2012)</li>
                                    <li>“ESPRESSO” Guide, Best Restaurant Rating 19,75 (2012)</li>
                                </ul>
                                <ul className="awards-list">
                                    <li>ESPRESSO Guide, Rating 1920 (2007)</li>
                                    <li>Gambero Rosso, Three forks (2008)</li>
                                    <li>Identità Golose, Chef of the Year (2010)</li>
                                    <li>BMW Guide, Restaurant of the Year (2010)</li>
                                    <li>Michelin Guide, Three Michelin Stars (2011)</li>
                                    <li>Gambero Rosso Guide, Best Restaurant Rating 95 (2012)</li>
                                    <li>“ESPRESSO” Guide, Best Restaurant Rating 19,75 (2012)</li>                  
                               </ul>
                            </div>       
                        </section>
            }
        </section>
    )
}

export default About
