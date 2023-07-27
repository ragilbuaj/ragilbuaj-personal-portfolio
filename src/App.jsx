import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
			<div className="h-full w-full px-5">
				<Navbar activeAnchor={handleAnchorClick} />
				<main className="mask-container flex flex-col items-center gap-2 py-4">
					<div className="h-full w-full rounded-lg border-4 border-white p-5">
						<About />
					</div>
					<div className="flex h-full w-full flex-col items-center gap-8 rounded-lg p-5">
						<div className="w-full animate-contentAnimation">{anchorValue}</div>
						<Projects />
						<Contact />
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
