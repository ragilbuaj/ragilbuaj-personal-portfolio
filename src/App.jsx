import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Backtotop from "./components/Backtotop.jsx";

function App() {
	const [activeAnchor, setActiveAnchor] = useState("");
	// const [anchorValue, setAnchorValue] = useState('');
	let anchorValue;
	const [screenSize, setSreensize] = useState(window.innerWidth);

	useEffect(() => {
		const handleScreenChange = () => {
			setSreensize(window.innerWidth);
		};
		window.addEventListener("resize", handleScreenChange);
	}, [screenSize]);

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
			<div className="relative flex h-full w-full flex-col items-center justify-center px-5">
				<Navbar activeAnchor={handleAnchorClick} />
				<main className="flex w-full flex-col items-center gap-2 py-4">
					<section className="h-full w-full animate-contentAnimation rounded-lg border-4 border-white p-5 md:w-11/12">
						<About />
					</section>
					<section className="mb-20 flex h-full w-full flex-col items-center gap-8 rounded-lg p-5">
						{screenSize > 767 ? (
							<>{anchorValue}</>
						) : (
							<>
								<Skills />
								<Projects />
								<Contact />
								<Backtotop />
							</>
						)}
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
