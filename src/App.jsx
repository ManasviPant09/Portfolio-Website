import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, CubeCanvas, Socials } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-heer-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <CubeCanvas />
        <About />
        <Tech />
      </div>
      <Works />
      <div className="relative z-0">
        <Socials />
        <Contact />        
      </div>      
    </div>
    </BrowserRouter>
  );
}
export default App;