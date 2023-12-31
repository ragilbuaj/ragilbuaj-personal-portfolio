import "../App.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function About() {
	useEffect(() => {
		const typed = new Typed("#text-name", {
			strings: ["Ragil Budhi Ajie,"],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	const handleDownload = () => {
		// const documentUrl = "https://drive.google.com/u/1/uc?id=1r4y30y9b1lvEm9pW1cmjHr4mkY--oNHM&export=download";
		const documentUrl = "https://drive.google.com/uc?id=1fgX7S8ChXUMBqSlIy4qNuYlD2Hn3THOt&export=download";

		const link = document.createElement("a");
		link.href = documentUrl;

		link.click();
	};

	return (
		<div className="flex w-full flex-col gap-3 min-[1440px]:gap-5">
			<h1 className="font-neue-montreal text-2xl font-semibold text-orange-200 sm:text-3xl min-[1440px]:text-5xl">
				Hello<span className="text-white">___</span>
			</h1>
			<div className="flex font-neue-montreal text-xl text-orange-200 sm:text-2xl min-[1440px]:text-3xl">
				<p>
					I'm <span id="text-name" className="text-white"></span>
				</p>
			</div>
			<p id="text-about" className="text-md font-neue-montreal text-orange-200 lg:text-lg min-[1440px]:text-xl">
				A passionate Frontend Developer with a love for creating visually stunning and highly functional web experiences.
			</p>
			<button className="btn-cv ease w-1/2 rounded-2xl bg-slate-200 p-1 text-center font-semibold shadow-md shadow-black transition hover:scale-110 hover:bg-sky-900 hover:text-white sm:w-1/3 min-[1440px]:w-1/5 min-[1440px]:text-lg" onClick={handleDownload}>
				<span className="btn-text">Download CV</span>
			</button>
			<div className="flex flex-col gap-2">
				<p className="text-md font-neue-montreal text-orange-200 min-[1440px]:text-xl">Follow me on</p>
				<div className="flex gap-3">
					<a href="https://www.instagram.com/ragilbuaj/" target="_blank">
						<FontAwesomeIcon className="fa-2xl ease text-white transition hover:scale-110 hover:text-sky-900" icon={faInstagram} />
					</a>
					<a href="https://www.linkedin.com/in/ragil-budhi-ajie/" target="_blank">
						<FontAwesomeIcon className="fa-2xl ease text-white transition hover:scale-110 hover:text-sky-900" icon={faLinkedinIn} />
					</a>
					<a href="https://github.com/ragilbuaj" target="_blank">
						<FontAwesomeIcon className="fa-2xl ease text-white transition hover:scale-110 hover:text-sky-900" icon={faGithub} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
