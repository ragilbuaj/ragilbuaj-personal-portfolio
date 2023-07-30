import "../App.css";
import React, { useState } from "react";

function Navbar({ activeAnchor }) {
	const [activeElement, setActiveElement] = useState("");

	const handleElementClick = (element) => {
		setActiveElement(element);
		activeAnchor(element);
	};

	return (
		<header className="w-full items-center py-3 min-[1440px]:w-11/12">
			<nav className="flex items-center justify-center border-b-2 pb-2 text-stone-50 md:justify-between">
				<div className="grid w-full grid-cols-2 items-center sm:justify-between md:flex md:w-2/3 md:justify-start md:gap-8">
					<a href="https://ragilbuaj.netlify.app/" className="text-md font-migra hover:text-orange-200 sm:text-lg md:text-xl min-[1440px]:text-2xl">
						Ragilbuaj.
					</a>
					<p className="text-md text-right font-neue-montreal font-semibold sm:text-lg md:text-left md:text-xl min-[1440px]:text-2xl">FRONTEND DEVELOPER</p>
				</div>
				<ul className="w-1/3 justify-end gap-2 font-neue-montreal text-lg min-[320px]:hidden md:flex min-[1440px]:text-xl">
					<li>
						<a className={`nav-link relative cursor-pointer ${activeElement === "skills" ? "active" : ""}`} onClick={() => handleElementClick("skills")}>
							skills
						</a>
						,
					</li>
					<li>
						<a className={`nav-link relative cursor-pointer ${activeElement === "projects" ? "active" : ""}`} onClick={() => handleElementClick("projects")}>
							project
						</a>
						,
					</li>
					<li>
						<a className={`nav-link relative cursor-pointer ${activeElement === "contact" ? "active" : ""}`} onClick={() => handleElementClick("contact")}>
							contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
