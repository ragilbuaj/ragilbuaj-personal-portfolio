import "../App.css";
import React, { useState } from "react";

function Navbar({ activeAnchor }) {
	const [activeElement, setActiveElement] = useState("");

	const handleElementClick = (element) => {
		setActiveElement(element);
		activeAnchor(element);
	};

	return (
		<header className="w-full items-center py-3">
			<nav className="flex items-center justify-center border-b-2 pb-2 text-stone-50">
				<div className="grid grid-cols-2 items-center">
					<a href="https://ragilbuaj.netlify.app/" className="text-md font-migra hover:text-orange-200">
						Ragilbuaj.
					</a>
					<p className="text-md text-right font-neue-montreal font-semibold">FRONTEND DEVELOPER</p>
				</div>
				{/* <ul className="flex gap-2 font-neue-montreal">
					<li>
						<a href="#" className={`nav-link relative ${activeElement === "skills" ? "active" : ""}`} onClick={() => handleElementClick("skills")}>
							skills
						</a>
						,
					</li>
					<li>
						<a href="#" className={`nav-link relative ${activeElement === "projects" ? "active" : ""}`} onClick={() => handleElementClick("projects")}>
							project
						</a>
						,
					</li>
					<li>
						<a href="#" className={`nav-link relative ${activeElement === "contact" ? "active" : ""}`} onClick={() => handleElementClick("contact")}>
							contact
						</a>
					</li>
				</ul> */}
			</nav>
		</header>
	);
}

export default Navbar;
