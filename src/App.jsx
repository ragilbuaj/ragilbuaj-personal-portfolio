import './App.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [activeAnchor, setActiveAnchor] = useState('');
  // const [anchorValue, setAnchorValue] = useState('');
  let anchorValue;

  const handleAnchorClick = (element) => {
    setActiveAnchor(element);
  }

  if (activeAnchor === '') {
    anchorValue = <Skills />;
  } else if (activeAnchor === 'skills') {
    anchorValue = <Skills />;
  } else if (activeAnchor === 'projects') {
    anchorValue = <Projects />;
  } else if (activeAnchor === 'contact') {
    anchorValue = <Contact />;
  }

  return (
    <>
      <div className='w-full h-screen px-16 bg-main-background bg-auto bg-no-repeat bg-top'>
        <Navbar activeAnchor={handleAnchorClick}/>
        <section className='mask-container flex py-4 px-4 mt-10 h-80vh items-center gap-2'>
          <div className='w-2/3 h-full border-4 border-white p-8 rounded-lg'> 
            <About />
          </div>
          <div className='w-2/3 h-full border-4 border-white rounded-lg p-8 flex flex-col items-center gap-8'>
            <div className='animate-contentAnimation w-full'>
              {anchorValue}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
