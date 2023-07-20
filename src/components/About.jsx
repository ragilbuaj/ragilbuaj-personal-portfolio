import '../App.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function About() {

    // const el = useRef(null);

    useEffect(() => {
        const typed = new Typed('#text-name', {
            strings: ['I\'m Ragil Budhi Ajie,'],
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
        <div className='flex flex-col gap-5 w-2/3 h-full border-4 border-white p-8'>
            <h1 className='font-neue-montreal text-orange-200 text-4xl font-semibold'>Hello <FontAwesomeIcon icon={faHandsClapping} style={{ color: "#f1c31e", }} /></h1>
            <div className='flex'>
                <span id='text-name' className='font-neue-montreal text-orange-200 text-4xl'></span>
                <p className='font-neue-montreal text-orange-200 text-4xl invisible'>a</p>
            </div>
            <p id='text-about' className='font-neue-montreal text-orange-200 text-xl'>A passionate Frontend Developer with a love for creating visually stunning and highly functional web experiences.</p>
            <button className='btn-cv bg-slate-200 w-36 text-center font-semibold p-1 rounded-2xl hover:bg-sky-900 hover:text-white' onClick={handleDownload}>
                <span className='btn-text'>Download CV</span>
            </button>
            <div className='flex flex-col gap-2'>
                <p className='font-neue-montreal text-orange-200 text-md'>Follow me on</p>
                <div className='flex gap-3'>
                    <a href='https://www.instagram.com/ragilbuaj/' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl' icon={faInstagram} /></a>
                    <a href='https://www.linkedin.com/in/ragil-budhi-ajie/' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl' icon={faLinkedinIn} /></a>
                    <a href='https://github.com/ragilbuaj' target="_blank"><FontAwesomeIcon className='text-white hover:text-sky-900 fa-2xl' icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default About