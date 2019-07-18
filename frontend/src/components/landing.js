import React from 'react';
import '../styles/LandingPage.scss';
import intro from '../assets/nerd-emoji.png';
import spiderman from '../assets/spider.png';
const LandingPage=()=>{
      return (
            <div id='background'>

                  <div id='sun'></div>
                  <div id='navbar'>
                        <div id='name-plate'>
                              <img id='nerd-emoji' src={intro} alt='nerd-emoji' />
                              <span id='name'>DHAIRYA PATEL</span>
                        </div>
                  </div>
                  
                  {/* <img id='spider-man' src={spiderman} alt='spider-man'/> */}
                  
            </div>
      );
}

export default LandingPage;