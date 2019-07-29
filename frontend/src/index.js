import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/base/base.scss';
import  LandingPage from './components/landing';
import ContactPage from './components/contact';
import ToolsPage from './components/tools';
import AboutPage from './components/about'
import App from './snap/App'

ReactDOM.render(
//  <Router>
//       <AboutPage />
// </Router> 
<App />
, document.getElementById('root'));

