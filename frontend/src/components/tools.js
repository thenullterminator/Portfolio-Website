import React from 'react';

import '../styles/components/tools.scss'

import Sun from '../components/sun';
import Footer from '../components/footer';
import NavBar from '../components/NavBar'; 


import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';
import python from '../assets/python3.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';
import vs from '../assets/vs.png'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import sass from '../assets/sass.png';
import c from '../assets/c5.png';
import cpp from '../assets/cpp.png';

class Tools extends React.Component{

      state={
            mobile:false
      };

      render(){
            return (
                  <div id='tools-page'>
                  
                        <Sun />

                        <div id='container'>

                        
                              <div id='main'>

                                   <NavBar />
                                   <div id='title'>
                                         Tech Stack
                                   </div>
                                   <div id='sub-title'>
                                         Introducing the tools and technology which help me create some really cool stuff.
                                   </div>
                                   <div id='tech'>

                                    <img src={nodejs} alt='node-js'></img>
                                    <img src={react} alt='react'></img>
                                    <img src={python} alt='python' style={{height:'240px'}}></img>
                                    <img src={git} alt='git'></img>
                                    <img src={figma} alt='figma'></img>
                                    <img src={vs} alt='vs-code' style={{height:'190px'}}></img>
                                    <img src={html} alt='html'></img>
                                    <img src={css} alt='css' style={{width:'140px'}}></img>
                                    <img src={js} alt='js' style={{width:'180px'}}></img>
                                    <img src={sass} alt='sass' style={{width:'220px',height:'170px'}}></img>
                                    <img src={c} alt='c' style={{height:'210px'}}></img>
                                    <img src={cpp} alt='c++' style={{width:'156px',height:'180px',marginTop:"50px"}}></img>

                                    


                                   </div>
                                          
                              </div>

                        </div>

                        <Footer />
                  </div>
            );
      };
};

export default Tools;