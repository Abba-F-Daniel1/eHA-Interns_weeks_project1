import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutMe from '../Abba Folder/components/AboutMe';
import Skills from '../Abba Folder/components/Skills';
import Contact from '../Abba Folder/components/Contact';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="#abba-portfolio" Component={AboutMe} />
      <Route path="#skills" Component={Skills} />
      <Route path="#contact" Component={Contact} />
    </Router>
  );
};

export default Routes;

