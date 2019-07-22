import React from 'react';
import '../styles/components/LandingPage.scss';
// importing components.
import Sun from '../components/sun';
import Footer from './footer';
// importing assets.
import nerdemoji from '../assets/nerd-emoji.png';
import hello from '../assets/hello.png';
import spiderman from '../assets/spider-man.png';
import bubble from '../assets/bubble.png';

const LandingPage=()=>{
      return (
            <div id='landing-page'>

                  <Sun />

                  <div id='container'>

                        <div id='main'>
                              <div id='navbar'>
                                    <div id='name-plate'>
                                          <img id='nerd-emoji' src={nerdemoji} alt='nerd-emoji' />
                                          <span id='name'>DHAIRYA PATEL</span>
                                    </div>
                              </div>
                                    
                              {/* <div> */}
                                    <div>
                                         
                                          <img id='spider-man' src={spiderman} alt='spider-man'/>
                                          <img id='bubble' src={bubble} alt='bubble'/>
                                          <span id='bubble-text'>Me Too!!</span>
                                          
                                    </div>
                                    

                                    <div id='main-content'>
                                          <div id='title'>
                                                <img src={hello} id='hello' alt='hello'/>
                                                <span id='title__text'> Hola.</span>
                                          </div>

                                          <div id='subtitle'>
                                          I am a <b><big>Web Developer</big></b>,<br/>
                                          a simple man and a caffeine dependent life form, interested primarily in full stack development, some music and food.
                                          </div>

                                          <button id='know_more'>Know More</button>
                                    </div>

                              {/* </div> */}

                        </div>

                  </div>

                  <Footer />
                 
            </div>
      );
}

export default LandingPage;