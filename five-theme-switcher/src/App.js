import React, { useState } from 'react';
import ThemeContext from "./Context/ThemeContext"
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';

function App() {
  const theme = useState("light")
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header/>
        <HeroSection/>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
