import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/components/navbar.scss'
import nerdemoji from '../assets/nerd-emoji.png';

class NavBar extends React.Component{

      state={
            mobile:false
      };

      render(){
            return (
      
                  <div id='navbar'>

                        <div id='desktop-navbar'>
                              <NavLink to='' exact activeStyle={{color:'red'}} className='name-plate' style={{textDecoration:'none'}}>
                                    <img className='nerd-emoji' src={nerdemoji} alt='nerd-emoji' />
                                    <span className='name'>DHAIRYA PATEL</span>
                              </NavLink>

                              <div id='otherlinks'>
                                    <NavLink class='links'>Work</NavLink>
                                    <NavLink class='links'>Tools</NavLink>
                                    <NavLink class='links'>Blogs</NavLink>
                                    <NavLink class='links'>About</NavLink>
                                    <NavLink class='links'>Contact</NavLink>
                              </div>
                        </div>

                        <div id='mobile-navbar'>
                              <div id='toggle' className='name-plate' onClick={()=>{
                                    this.setState((prevState)=>({
                                          mobile:!(prevState.mobile)
                                    }));
                              }}>
                                    <img className='nerd-emoji' src={nerdemoji} alt='nerd-emoji' />
                                    <span className='name'>DHAIRYA PATEL</span>
                              </div>

                              {
                              this.state.mobile && 
                              <div id='other-mob-links'>
                                    <NavLink class='links'>Home</NavLink>
                                    <NavLink class='links'>Work</NavLink>
                                    <NavLink class='links'>Tools</NavLink>
                                    <NavLink class='links'>Blogs</NavLink>
                                    <NavLink class='links'>About</NavLink>
                                    <NavLink class='links'>Contact</NavLink>
                              </div>
                              }
                        </div>
                        
                  </div>
                                          
            );
      };
};

export default NavBar;