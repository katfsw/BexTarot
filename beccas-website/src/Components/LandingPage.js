import React from 'react';
import NavBar from './NavBar';
import Parallax from './Parallax'
import BioSection from './BioSection'
import Contact from './Contact'
import BottomNav from './BottomNav'

function LandingPage() {
  return (
    <div className="App">
        <NavBar/> 
        <Parallax/> 
        <BioSection/> 
        <Contact/>
        <BottomNav/>
    </div>
  );
}

export default LandingPage;
