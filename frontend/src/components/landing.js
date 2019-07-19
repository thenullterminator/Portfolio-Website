import React from 'react';
import '../styles/LandingPage.scss';

import Footer from './footer';
import nerdemoji from '../assets/nerd-emoji.png';
import hello from '../assets/hello.png';
import spiderman from '../assets/spider-man.png';

const LandingPage=()=>{
      return (
            <div id='background'>

                  <div id='sun'></div>
                  <div id='navbar'>
                        <div id='name-plate'>
                              <img id='nerd-emoji' src={nerdemoji} alt='nerd-emoji' />
                              <span id='name'>DHAIRYA PATEL</span>
                        </div>
                  </div>
                  
                  {/* <img id='spider-man' src={spiderman} alt='spider-man'/> */}

                  <div id='main-content'>
                        <div id='title'>
                              <img src={hello} id='hello' alt='hello'/>
                              <span id='title__text'> Hola.</span>
                        </div>

                        <div id='subtitle'>
                        I am <b><big>Web Developer</big></b>,<br/>
                        a simple man and a caffeine dependent life form, interested primarily in full stack development, some music and food.
                        </div>

                        <button id='know_more'>Know More</button>
                  </div>

                  <Footer/>

                 
                  
            </div>
      );
}

export default LandingPage;