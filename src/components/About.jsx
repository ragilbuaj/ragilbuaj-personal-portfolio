import '../App.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function About() {

    useEffect(() => {
        const typed = new Typed('#text-name', {
            strings: ['Ragil Budhi Ajie,'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
        typed.destroy();
        };
    }, []);

    const handleDownload = () => {
        const documentUrl = 'https://drive.google.com/u/1/uc?id=1r4y30y9b1lvEm9pW1cmjHr4mkY--oNHM&export=download';

        const link = document.createElement('a');
        link.href = documentUrl;

        link.click();
    };

    return (
        <div className='flex flex-col gap-5 animate-contentAnimation'>
            <h1 className='font-neue-montreal text-orange-200 text-4xl font-semibold'>Hello<span className='text-white'>___</span></h1>
            <div className='flex font-neue-montreal text-orange-200 text-4xl'>
                <p>I'm <span id='text-name'></span></p>
            </div>
            <p id='text-about' className='font-neue-montreal text-orange-200 text-xl'>A passionate Frontend Developer with a love for creating visually stunning and highly functional web experiences.</p>
            <button className='btn-cv bg-slate-200 w-36 text-center font-semibold p-1 rounded-2xl shadow-md shadow-black hover:bg-sky-900 hover:text-white hover:scale-110 transition ease' onClick={handleDownload}>
                <span className='btn-text'>Download CV</span>
            </button>
            <div className='flex flex-col gap-2'>
                <p className='font-neue-montreal text-orange-200 text-md'>Follow me on</p>
                <div className='flex gap-3'>
                    <a href='https://www.instagram.com/ragilbuaj/' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl hover:scale-110 transition ease' icon={faInstagram} /></a>
                    <a href='https://www.linkedin.com/in/ragil-budhi-ajie/' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl hover:scale-110 transition ease' icon={faLinkedinIn} /></a>
                    <a href='https://github.com/ragilbuaj' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl hover:scale-110 transition ease' icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default About