import '../App.css';
import iconHtml from '../assets/icons/icon-html.svg'
import iconCss from '../assets/icons/icon-css.svg'
import iconJs from '../assets/icons/icon-javascript.svg'
import iconReact from '../assets/icons/icon-react.svg'
import iconTailwind from '../assets/icons/icon-tailwind.svg'
import iconChakra from '../assets/icons/icon-chakra.svg'

function Skills() {
    const isHover = true;

    return (
        <div className='flex flex-col items-center gap-8'>
            <h1 className='font-neue-montreal text-orange-200 text-2xl font-bold'>What i can do</h1>
            <div className='flex flex-nowrap gap-6 w-full place-content-center relative'>
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg text-base shadow-black hover:scale-110 hover:w-[23%] hover:bg-sky-900 hover:after:content-['#HTML'] hover:after:absolute hover:after:top-1/3 hover:after:left-1/2 hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconHtml} alt='html-icon' />
                </div>
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg shadow-black hover:scale-110 hover:w-[20%] hover:bg-sky-900 hover:after:content-['#CSS'] hover:after:absolute hover:after:top-1/3 hover:after:right-[12%] hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconCss} alt='html-icon' />
                </div>
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg shadow-black hover:scale-110 hover:w-[28%] hover:bg-sky-900 hover:after:content-['#Javascript'] hover:after:absolute hover:after:top-1/3 hover:after:right-[8%] hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconJs} alt='html-icon' />
                </div>
            </div>
            <div className='flex flex-nowrap gap-6 w-full place-content-center relative'>
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg shadow-black hover:scale-110 hover:w-1/4 hover:bg-sky-900 hover:after:content-['#React'] hover:after:absolute hover:after:top-1/3 hover:after:left-1/2 hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconReact} alt='html-icon' />
                </div> 
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg shadow-black hover:scale-110 hover:w-[26%] hover:bg-sky-900 hover:after:content-['#Tailwind'] hover:after:absolute hover:after:top-1/3 hover:after:right-[10%] hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconTailwind} alt='html-icon' />
                </div>
                <div className="bg-slate-200 p-3 rounded-3xl shadow-lg shadow-black hover:scale-110 hover:w-[27%] hover:bg-sky-900 hover:after:content-['#Chakra_UI'] hover:after:absolute hover:after:top-1/3 hover:after:right-[8%] hover:after:text-white hover:after:font-bold transition ease">
                    <img className='w-14' src={iconChakra} alt='html-icon' />
                </div>
            </div>
        </div> 
    )
}

export default Skills