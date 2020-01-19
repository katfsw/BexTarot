import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/Components/NavBar.js';
import MiddleAboutSection from '../src/Components/MiddleAboutSection.js'
import BioSection from '../src/Components/BioSection.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MiddleAboutSection/>
      <BioSection/>
    </div>
  );
}

export default App;
