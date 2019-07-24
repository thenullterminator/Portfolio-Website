import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/base/base.scss';
import  LandingPage from './components/landing';
import ContactPage from './components/contact';
import ToolsPage from './components/tools';

ReactDOM.render(
<Router>
      <LandingPage />
</Router>

      , document.getElementById('root'));

