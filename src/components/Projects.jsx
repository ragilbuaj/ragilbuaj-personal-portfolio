import "../App.css";
import personalWebsiteImg from "../assets/images/personal-website.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
	return (
		<section className="">
			<h1 className="text-center font-neue-montreal text-2xl font-bold text-orange-200">projects that i've done</h1>
			<div className="mt-10 grid w-full grid-cols-2 gap-2 hover:bg-sky-200">
				<div className="ease w-11/12 rounded-lg bg-slate-200 shadow-lg shadow-black transition hover:scale-105 hover:bg-sky-900 hover:text-white">
					<img className="rounded-t-lg" src={personalWebsiteImg} />
					<h2 className="mt-2 text-center font-neue-montreal font-semibold ">Personal Portfolio</h2>
					<div className="p-2">
						<p>My first personal portfolio website.</p>
						<p>
							build with : <span className="font-semibold">#react.js #tailwindcss</span>
						</p>
						<div className="mt-2 flex items-center justify-center gap-5 px-2">
							<a href="https://github.com/ragilbuaj/ragilbuaj-personal-portfolio.git" target="_blank">
								<FontAwesomeIcon className="fa-2xl hover:ease hover:scale-110 hover:text-white hover:transition" icon={faGithub} />
							</a>
							<a href="https://ragilbuaj.netlify.app/" className="hover:ease font-bold hover:scale-110 hover:transition">
								DEMO
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
