import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
	const [activeAnchor, setActiveAnchor] = useState("");
	// const [anchorValue, setAnchorValue] = useState('');
	let anchorValue;

	const handleAnchorClick = (element) => {
		setActiveAnchor(element);
	};

	if (activeAnchor === "") {
		anchorValue = <Skills />;
	} else if (activeAnchor === "skills") {
		anchorValue = <Skills />;
	} else if (activeAnchor === "projects") {
		anchorValue = <Projects />;
	} else if (activeAnchor === "contact") {
		anchorValue = <Contact />;
	}

	return (
		<>
			<div className="h-screen w-full bg-main-background bg-auto bg-top bg-no-repeat px-16">
				<Navbar activeAnchor={handleAnchorClick} />
				<section className="mask-container mt-10 flex h-80vh items-center gap-2 px-4 py-4">
					<div className="h-full w-2/3 rounded-lg border-4 border-white p-8">
						<About />
					</div>
					<div className="flex h-full w-2/3 flex-col items-center gap-8 rounded-lg border-4 border-white p-8">
						<div className="w-full animate-contentAnimation">{anchorValue}</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
