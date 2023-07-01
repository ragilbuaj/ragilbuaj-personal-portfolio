import '../App.css';

function Navbar() {

    return (
        <header className='px-16 py-3'>
            <nav className='flex justify-between items-center pb-2 border-b-2 text-white'>
                <div className='flex items-center gap-5'>
                    <a href='#' className='font-migra text-xl'>Ragilbuaj</a>
                    <p className='font-neue-montreal text-2xl font-semibold'>FRONTEND DEVELOPER</p>
                </div>
                <ul className='font-neue-montreal flex gap-2'>
                    <li><a href='#' className='nav-link relative'>about</a>,</li>
                    <li><a href='#' className='nav-link relative'>skills</a>,</li>
                    <li><a href='#' className='nav-link relative'>project</a>,</li>
                    <li><a href='#' className='nav-link relative'>contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar