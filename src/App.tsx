import { useRef } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Experience, Contact, Hero, Milestones } from './components'
import Navbar from './components/NavBar';
import About from './components/About';
import WebFooter from './components/WebFooter';

function App() {
  const wrapperRef = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="portfolio" className='z-10'>
            <Hero />
          </div>
          <div id="aboutme" className='z-30 bg-primary'>
            <About />
          </div>
          <div id="milestones" className='z-30 bg-primary'>
            <Milestones />
          </div>
          <div id="experience" className='z-30 bg-primary'>
            <Experience />
          </div>
          <div id="contact" className='z-30 bg-primary'>
            <Contact />
          </div>
        </div>
        <WebFooter />
      </div>


    </BrowserRouter>
  )
}

export default App
