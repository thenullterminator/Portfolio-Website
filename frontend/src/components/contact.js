import React from 'react';

import '../styles/components/contact.scss'

import Sun from '../components/sun';
import Footer from '../components/footer';
import NavBar from '../components/NavBar'; 

import grinemoji from '../assets/grin.png';
import emailicon from '../assets/email.png';
class Contact extends React.Component{

      state={
            mobile:false
      };

      render(){
            return (
                  <div id='contact-page'>
                  
                        <Sun />

                        <div id='container'>

                        
                              <div id='main'>

                                   <NavBar />
                                   <div id='contact'>
                                         <div id='contact_title'>Let's Connect</div>
                                         <div id='contact_subtitle'>Feel free to reach out for collaboration or just friendly hello.
                                         <img id='grin-emoji' src={grinemoji} alt='nerd-emoji' />
                                         </div>
                                         <a id='contact_button' href='mailTo:dazz2803@gmail.com' target='_blank'><img id='email-icon' src={emailicon} alt='email-icon' />Send a Mail</a>
                                   </div>
                                          
                              </div>

                        </div>


                  

                        <Footer />
                  </div>
            );
      };
};

export default Contact;