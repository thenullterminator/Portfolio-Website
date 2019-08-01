import React ,{ useState } from 'react';
import '../styles/components/about.scss'

import Sun from '../components/sun';
import Footer from '../components/footer';
import NavBar from '../components/NavBar'; 
import InfinityGauntlet from "react-thanos-snap";
import Card from "../components/card"
import myself from '../assets/myself.png';


// const [snap, setSnap] = useState(false);

const About=()=>{
      const [snap, setSnap] = useState(false);
      return(
            <div id='about-page'>
            
            <Sun />

            <div id='container'>

            
                  <div id='main'>

                        <NavBar />
                        <div id='content'>
                              <div id='text'>
                              <p id='title'>Dhairya  &nbsp;Patel</p>
                              <p> I am a second year under graduate student  at IIIT Allahabad, pursuing bachelors in Information Technology.<br></br>Life’s perception -<br></br>
</p>
                              
                              <p id='quote'>“ It should not be a journey to the grave with the intention of arriving safely in a pretty and well-preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming ‘Wow! What a Ride!’ “</p>
                              
                              <p>-<b> Hunter S. Thompson</b> </p>
                              <p>When I am not creating something new, you can find me with some coffee, busy reading books, appreciating movies or exploring the world and on some days even trying my luck on a codeforces problem.
                              </p>
                              

                              </div>
                              <div id='photo'>
                                    <div className="wrapper">
                                    <InfinityGauntlet  snap={snap}>
                                    <Card />
                                    </InfinityGauntlet>
                                    </div>
                                    <p  id='snap' onClick={() => setSnap(!snap)}>&#123; That's Me !! &#125;</p>
                              </div>
                        </div>
                        <div id='links'>
                              <div className='link'>View My Résumé</div>
                              <div className='link'>View My Work</div>
                              <div className='link'>Get in Touch</div>
                        </div>
                  </div>

            </div>

            <Footer />
            </div>
      );
};



// class About extends React.Component{

     
//       render(){
//             const [snap, setSnap] = useState(false);
//             return(
//                   <div id='about-page'>
            
//                   <Sun />

//                   <div id='container'>

                  
//                         <div id='main'>

//                               <NavBar />
//                               <div id='content'>
//                                     <div id='text'>
//                                     <p id='title'>Dhairya  &nbsp;Patel</p>
//                                     <p> I am a second year under graduate student  at IIIT Allahabad, pursuing bachelors in Information Technology.<br></br>Life’s perception -<br></br>
// </p>
                                    
//                                     <p id='quote'>“ It should not be a journey to the grave with the intention of arriving safely in a pretty and well-preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming ‘Wow! What a Ride!’ “</p>
                                    
//                                     <p>-<b> Hunter S. Thompson</b> </p>
//                                     <p>When I am not creating something new, you can find me with some coffee, busy reading books, appreciating movies or undergoing a  brain workout on codeforces and on some days even exploring the world around.
//                                     </p>
                                    

//                                     </div>
//                                     <div id='photo'>
//                                     <InfinityGauntlet snap={snap}>
//                                     <Card />
//                                     </InfinityGauntlet>
//                                            <p>&#123; That's Me !!	&#125;</p>
//                                     </div>
//                               </div>
//                               <div id='links'>
//                                     <div className='link'>View My Résumé</div>
//                                     <div className='link'>View My Work</div>
//                                     <div className='link'>Get in Touch</div>
//                               </div>
//                         </div>

//                   </div>

//                   <Footer />
//                   </div>
//             );
//       }

// };

export default About;