import React from 'react';
import NavBar from './NavBar';
import MiddleAboutSection from './MiddleAboutSection'
import BioSection from './BioSection'

function LandingPage() {
  return (
    <div className="App">
        <NavBar/> 
        <MiddleAboutSection/> 
        <BioSection/> 
    </div>
  );
}

export default LandingPage;
