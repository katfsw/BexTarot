import React from 'react';
import NavBar from './NavBar';
import Parallax from './Parallax'
import BioSection from './BioSection'
import Contact from './Contact'
import BottomNav from './BottomNav'
import Readings from './Readings'

function LandingPage() {
  return (
    <div className="App">
        <NavBar/> 
        <Parallax/> 
        <BioSection/> 
        <Readings/>
        <Contact/>
        <BottomNav/>
    </div>
  );
}

export default LandingPage;
