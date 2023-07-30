import "../App.css";
import iconHtml from "../assets/icons/icon-html.svg";
import iconCss from "../assets/icons/icon-css.svg";
import iconJs from "../assets/icons/icon-javascript.svg";
import iconReact from "../assets/icons/icon-react.svg";
import iconTailwind from "../assets/icons/icon-tailwind.svg";
import iconChakra from "../assets/icons/icon-chakra.svg";

function Skills() {
	return (
		<section className="flex w-full animate-contentAnimation flex-col items-center justify-center gap-8 md:w-11/12 min-[1440px]:w-8/12">
			<h1 className="font-neue-montreal text-3xl font-bold text-orange-200">what i can do</h1>
			<div className="grid w-full grid-cols-3 grid-rows-2 gap-6 font-neue-montreal sm:w-2/3 sm:gap-10 md:gap-8">
				<div className="skills-card-right col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 text-base shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0">
					<img className="w-14" src={iconHtml} alt="html-icon" />
					<p className="text-md font-bold uppercase lg:text-lg lg:font-extrabold lg:tracking-wider">html</p>
				</div>
				<div className="skills-card-down row-span-2 grid grid-rows-2 items-center justify-items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0 sm:w-[95px]">
					<img className="w-14" src={iconCss} alt="css-icon" />
					<p className="text-md rotate-90 font-bold uppercase lg:text-lg lg:font-extrabold lg:tracking-wider">css</p>
				</div>
				<div className="skills-card-right col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0">
					<img className="w-14" src={iconJs} alt="javascript-icon" />
					<p className="text-md font-bold capitalize lg:text-lg lg:font-extrabold lg:tracking-wider">javascript</p>
				</div>
			</div>
			<div className="grid w-full grid-cols-3 grid-rows-2 gap-6 font-neue-montreal sm:w-2/3 sm:gap-10 md:gap-8">
				<div className="skills-card-down row-span-2 grid grid-rows-2 items-center justify-items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0 sm:w-[95px] md:justify-self-end">
					<img className="w-14" src={iconReact} alt="react-icon" />
					<p className="text-md rotate-90 font-bold capitalize lg:text-lg lg:font-extrabold lg:tracking-wider">react</p>
				</div>
				<div className="skills-card-left col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0">
					<img className="w-14" src={iconTailwind} alt="tailwind-icon" />
					<p className="text-md font-bold capitalize lg:text-lg lg:font-extrabold lg:tracking-wider">tailwind</p>
				</div>
				<div className="skills-card-left col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black grayscale transition ease-in-out hover:scale-105 hover:bg-sky-900 hover:text-white hover:grayscale-0">
					<img className="w-14" src={iconChakra} alt="charkraui-icon" />
					<p className="text-md font-bold capitalize lg:text-lg lg:font-extrabold lg:tracking-wider">chakra UI</p>
				</div>
			</div>
		</section>
	);
}

export default Skills;
