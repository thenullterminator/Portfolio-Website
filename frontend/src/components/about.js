import React, { useState }  from 'react';
import '../styles/components/about.scss'

import Sun from '../components/sun';
import Footer from '../components/footer';
import NavBar from '../components/NavBar'; 

import myself from '../assets/myself.png';
import ParticleEffectButton from 'react-particle-effect-button'

class About extends React.Component{

      state = {
            hidden: false
      }
      render(){
            return(
                  <div id='about-page'>
            
                  <Sun />

                  <div id='container'>

                  
                        <div id='main'>

                              <NavBar />
                              <ParticleEffectButton
                              color='#121019'
                              hidden={this.state.hidden}
                              duration={2000}
                              particlesAmountCoefficient={30}
                              >
                              
                                    <img alt=''  src={myself} />
                              
                              </ParticleEffectButton>
                              <button onClick={()=>this.setState((prevState)=>{
                                    return {
                                          hidden:!prevState.hidden
                                    }
                              })}>Change</button>
                        </div>

                  </div>

                  <Footer />
                  </div>
            );
      }

};

export default About;