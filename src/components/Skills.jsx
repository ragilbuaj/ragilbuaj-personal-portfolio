import "../App.css";
import iconHtml from "../assets/icons/icon-html.svg";
import iconCss from "../assets/icons/icon-css.svg";
import iconJs from "../assets/icons/icon-javascript.svg";
import iconReact from "../assets/icons/icon-react.svg";
import iconTailwind from "../assets/icons/icon-tailwind.svg";
import iconChakra from "../assets/icons/icon-chakra.svg";

function Skills() {
	const isHover = true;

	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="font-neue-montreal text-3xl font-bold text-orange-200">what i can do</h1>
			<div className="grid w-full grid-cols-3 grid-rows-2 gap-6">
				<div className="col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 text-base shadow-lg shadow-black">
					<img className="w-14" src={iconHtml} alt="html-icon" />
					<p className="text-lg font-bold uppercase">html</p>
				</div>
				<div className="row-span-2 grid grid-rows-2 items-center justify-items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black">
					<img className="w-14" src={iconCss} alt="css-icon" />
					<p className="rotate-90 text-lg font-bold uppercase">css</p>
				</div>
				<div className="col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black">
					<img className="w-14" src={iconJs} alt="javascript-icon" />
					<p className="text-lg font-bold capitalize">javascript</p>
				</div>
			</div>
			<div className="grid w-full grid-cols-3 grid-rows-2 gap-6">
				<div className="row-span-2 grid grid-rows-2 items-center justify-items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black">
					<img className="w-14" src={iconReact} alt="react-icon" />
					<p className="rotate-90 text-lg font-bold capitalize">react</p>
				</div>
				<div className="col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black">
					<img className="w-14" src={iconTailwind} alt="tailwind-icon" />
					<p className="text-lg font-bold capitalize">tailwind</p>
				</div>
				<div className="col-span-2 grid grid-cols-2 items-center rounded-3xl bg-slate-200 p-3 shadow-lg shadow-black">
					<img className="w-14" src={iconChakra} alt="charkraui-icon" />
					<p className="text-lg font-bold capitalize">chakra UI</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
