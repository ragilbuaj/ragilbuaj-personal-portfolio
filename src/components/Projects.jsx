import '../App.css'
import personalWebsiteImg from '../assets/images/personal-website.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects () {
    
    return (
        <section className=''>
            <h1 className='font-neue-montreal text-orange-200 text-2xl font-bold text-center'>projects that i've done</h1>
            <div className='grid grid-cols-2 gap-2 mt-10 w-full'>
                <div className='bg-slate-200 w-11/12 rounded-lg shadow-lg shadow-black hover:bg-sky-900 hover:text-white hover:scale-105 transition ease'>
                    <img className='rounded-t-lg' src={personalWebsiteImg}/>
                    <h2 className='font-neue-montreal font-semibold text-center mt-2 '>Personal Portfolio</h2>
                    <div className='p-2'>
                        <p>My first personal portfolio website.</p>
                        <p>build with : <span className='font-semibold'>#react.js #tailwindcss</span></p>
                        <div className='flex gap-5 mt-2 px-2 items-center justify-center'>
                            <a href='https://github.com/ragilbuaj/ragilbuaj-personal-portfolio.git' target="_blank"><FontAwesomeIcon className='hover:text-white fa-2xl hover:scale-110 hover:transition hover:ease' icon={faGithub} /></a>
                            <a href='https://ragilbuaj.netlify.app/' className='font-bold hover:scale-110 hover:transition hover:ease'>DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects