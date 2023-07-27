import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer className="mt-6">
			<p className="text-center align-middle font-neue-montreal text-sm text-white">
				<FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>2023 Ragil Budhi Ajie | All Rights Reserved
			</p>
		</footer>
	);
}

export default Footer;
