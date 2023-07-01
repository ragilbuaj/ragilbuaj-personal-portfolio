import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function About() {

    const handleDownload = () => {
        // Replace "document_url" with the actual URL of the document you want to download
        const documentUrl = 'https://drive.google.com/u/1/uc?id=1r4y30y9b1lvEm9pW1cmjHr4mkY--oNHM&export=download';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = documentUrl;

        // Trigger a click event on the anchor element
        link.click();
    };

    return (
        <div className='flex flex-col gap-5 w-6/12 bg-slate-600 rounded-2xl p-5 shadow-lg shadow-white'>
            <h1 className='font-neue-montreal text-white text-8xl font-semibold'>Hello <FontAwesomeIcon icon={faHandsClapping} style={{ color: "#f1c31e", }} /></h1>
            <p className='font-neue-montreal text-white text-5xl'>I'm Ragil Budhi Ajie,</p>
            <p className='font-neue-montreal text-white text-2xl'>A passionate Frontend Developer with a love for creating visually stunning and highly functional web experiences.</p>
            <button className='bg-slate-200 w-36 text-center font-semibold p-1 rounded-md hover:bg-sky-900 hover:text-white' onClick={handleDownload}>Download CV</button>
            <div className='flex flex-col gap-2'>
                <p className='font-neue-montreal text-white text-md'>Follow me on</p>
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