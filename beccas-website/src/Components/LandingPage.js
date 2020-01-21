import React from 'react';
import NavBar from './NavBar';
import Parallax from './Parallax'
import BioSection from './BioSection'

function LandingPage() {
  return (
    <div className="App">
        <NavBar/> 
        <Parallax/> 
        <BioSection/> 
    </div>
  );
}

export default LandingPage;
