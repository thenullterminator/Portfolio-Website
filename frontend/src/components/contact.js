import React from 'react';

import Sun from '../components/sun';
import Footer from '../components/footer';

import nerdemoji from '../assets/nerd-emoji.png';

const Contact=()=>{

      return (
            <div id='background'>

                  <Sun />

                  <div id='container'>

                        <div id='main'>
                              <div id='navbar'>
                                    <div id='name-plate'>
                                          <img id='nerd-emoji' src={nerdemoji} alt='nerd-emoji' />
                                          <span id='name'>DHAIRYA PATEL</span>
                                    </div>
                              </div>
                                    
                             
                              

                        </div>

                  </div>

                  <Footer />
                 
            </div>
      );
};

export default Contact;