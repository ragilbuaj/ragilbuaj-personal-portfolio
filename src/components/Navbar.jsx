import '../App.css';
import React, { useState } from 'react';

function Navbar({ activeAnchor }) {
    const [activeElement, setActiveElement] = useState('');

    const handleElementClick = (element) => {
        setActiveElement(element);
        activeAnchor(element);
    };

    return (
        <header className='items-center py-3'>
            <nav className='flex justify-between items-center pb-2 border-b-2 text-stone-50'>
                <div className='flex items-center gap-5'>
                    <a href='https://ragilbuaj.netlify.app/' className='font-migra text-xl hover:text-orange-200'>Ragilbuaj</a>
                    <p className='font-neue-montreal text-2xl font-semibold'>FRONTEND DEVELOPER</p>
                </div>
                <ul className='font-neue-montreal flex gap-2'>
                    <li><a href='#' className={`nav-link relative ${activeElement === 'skills' ? 'active' : ''}`} onClick={() => handleElementClick('skills')}>skills</a>,</li>
                    <li><a href='#' className={`nav-link relative ${activeElement === 'projects' ? 'active' : ''}`} onClick={() => handleElementClick('projects')}>project</a>,</li>
                    <li><a href='#' className={`nav-link relative ${activeElement === 'contact' ? 'active' : ''}`} onClick={() => handleElementClick('contact')}>contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar