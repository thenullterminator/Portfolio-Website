import React from 'react';
import '../styles/components/footer.scss';

import gmail from '../assets/gmail.png';
import medium from '../assets/medium.png';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import victory from '../assets/victory.png';

const Footer=()=>{
      return (

            <footer>
                  <div id='social-icons-container' >
                        <img className='social-icons' src={gmail} alt='gmail'/>
                        <img className='social-icons' src={medium} alt='medium'/>
                        <img className='social-icons' src={github} alt='github'/>
                        <img className='social-icons' src={facebook} alt='facebook'/>
                        <img className='social-icons' src={twitter} alt='twitter'/>
                        <img className='social-icons' src={linkedin} alt='linkedin'/>     
                  </div>

                  <div id='footer__content'>
                        <span id='footer__text'> Thanks for visiting! Hope you have a great experience.</span>
                        <img id='victory' src={victory} alt='victory' />
                  </div>
                  
            </footer>
      );
};

export default Footer;