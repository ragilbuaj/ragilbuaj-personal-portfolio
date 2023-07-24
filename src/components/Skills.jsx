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
            <h1 className='font-neue-montreal text-orange-200 text-2xl font-bold'>Skills</h1>
            <div className='flex flex-wrap gap-6 w-96 items-center justify-center'>
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconHtml} alt='html-icon' />
                </div>
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconCss} alt='html-icon' />
                </div>
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconJs} alt='html-icon' />
                </div>
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconReact} alt='html-icon' />
                </div> 
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconTailwind} alt='html-icon' />
                </div>
                <div className='bg-slate-200 p-3 rounded-3xl hover:scale-110 hover:bg-sky-900 transition ease'>
                    <img className='w-14' src={iconChakra} alt='html-icon' />
                </div>
            </div>
        </div> 
    )
}

export default Skills