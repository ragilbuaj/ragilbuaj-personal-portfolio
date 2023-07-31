import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Backtotop() {
	const [visibility, setVisibility] = useState("hidden");

	function onScroll() {
		const isScrolled = document.documentElement.scrollTop;
		if (isScrolled > 100) {
			setVisibility("inline");
		} else {
			setVisibility("hidden");
		}
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	window.addEventListener("scroll", onScroll);

	return (
		<section onClick={scrollToTop} className={`${visibility} fixed bottom-16 right-10 z-[99] w-14 animate-bounce rounded-[50%] bg-orange-200 p-4 text-center hover:bg-sky-900 hover:text-white min-[426px]:hidden`}>
			<button>
				<FontAwesomeIcon className="" icon={faArrowUp} />
			</button>
		</section>
	);
}

export default Backtotop;
