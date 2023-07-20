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
  
  // useEffect(() => {
  //   switch (activeAnchor) {
  //     case 'skills': 
  //       setAnchorValue(<Skills />);
  //     case 'projects':
  //       setAnchorValue(<Projects />);
  //     case 'contact':
  //       setAnchorValue(<Contact />);
  //   }
  // }, [activeAnchor])

  const handleAnchorClick = (element) => {
    setActiveAnchor(element);
  }

  if (activeAnchor === 'skills') {
    anchorValue = <Skills />;
  } else if (activeAnchor === 'projects') {
    anchorValue = <Projects />;
  } else if (activeAnchor === 'contact') {
    anchorValue = <Contact />;
  }

  // console.log(activeAnchor);

  return (
    <>
      <div className='w-full h-screen px-16 bg-auto bg-no-repeat bg-top'>
        <Navbar activeAnchor={handleAnchorClick}/>
        <div className='mask-container flex py-4 px-4 mt-10 h-80vh items-center gap-2'>
          <About />
          <div className='w-2/3 h-full border-4 border-white p-8 flex flex-col items-center gap-8'>
            {anchorValue}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
