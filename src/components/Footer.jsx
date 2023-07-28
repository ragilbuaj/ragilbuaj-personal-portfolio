import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer className="absolute bottom-5 mt-6 text-center">
			<p className="text-center align-middle font-neue-montreal text-sm text-white min-[1440px]:text-lg">
				<FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>2023 Ragil Budhi Ajie | All Rights Reserved
			</p>
		</footer>
	);
}

export default Footer;
