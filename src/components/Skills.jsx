import '../App.css';
import iconHtml from '../assets/icons/icon-html.svg'
import iconCss from '../assets/icons/icon-css.svg'
import iconJs from '../assets/icons/icon-javascript.svg'
import iconReact from '../assets/icons/icon-react.svg'
import iconTailwind from '../assets/icons/icon-tailwind.svg'
import iconChakra from '../assets/icons/icon-chakra.svg'

function Skills() {

    return (
        <div className='flex flex-col items-center gap-8'>
            <h1 className='font-neue-montreal text-orange-200 text-2xl font-bold'>SKILLS</h1>
            <div className='flex flex-wrap gap-6 w-96 items-center justify-center'>
                <img className='w-16' src={iconHtml} alt='html-icon' />
                <img className='w-16' src={iconCss} alt='html-icon' />
                <img className='w-16' src={iconJs} alt='html-icon' />
                <img className='w-16' src={iconReact} alt='html-icon' />
                <img className='w-16' src={iconTailwind} alt='html-icon' />
                <img className='w-16' src={iconChakra} alt='html-icon' />
            </div>
        </div> 
    )
}

export default Skills