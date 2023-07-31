import "../App.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef();
	const [visibility, setVisibility] = useState("hidden");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_f058kvf", "template_ywtma04", form.current, "cqldVmU-GS1aOXqWE").then(
			(result) => {
				console.log(result.text);
				console.log("Message sent");
				e.target.reset();
			},
			(error) => {
				console.log(error.text);
			},
		);

		setTimeout(function () {
			setVisibility("inline");
		}, 1000);

		setTimeout(function () {
			setVisibility("hidden");
		}, 4000);
	};

	return (
		<>
			<section className="mt-3 w-full animate-contentAnimation md:flex md:w-11/12 md:flex-col md:items-center md:justify-center">
				<hr></hr>
				<h1 className="mt-6 text-center font-neue-montreal text-3xl font-bold text-orange-200">Get in touch!</h1>
				<form className="mt-6 grid grid-cols-1 gap-5 md:w-11/12 min-[1440px]:h-full" ref={form} onSubmit={sendEmail}>
					<div className="flex flex-col gap-2 min-[1440px]:h-full">
						<label className="text-md text-orange-200" htmlFor="email">
							Your email
						</label>
						<input id="email" type="email" className="form-input w-full rounded-xl font-semibold shadow-md shadow-black placeholder:text-sm" placeholder="name@gmail.com" name="user_email" required />
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-md text-orange-200" htmlFor="subject">
							Subject
						</label>
						<input id="subject" type="text" className="form-input w-full rounded-xl font-semibold shadow-md shadow-black placeholder:text-sm" placeholder="Let me know how i can help you" name="user_subject" required />
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-md text-orange-200" htmlFor="message">
							Your message
						</label>
						<textarea id="message" className="form-textarea h-24 w-full rounded-xl font-semibold shadow-md shadow-black placeholder:text-sm" placeholder="Leave a comment..." name="message" required />
					</div>
					<button type="submit" value="Send" className="h-10 w-32 rounded-lg bg-slate-200 font-semibold shadow-md shadow-black hover:bg-sky-900 hover:text-white">
						Send message
					</button>
				</form>
			</section>
			<article className={`${visibility} fixed bottom-[6%] z-[100] animate-contentAnimation rounded-xl bg-slate-200 p-4 font-neue-montreal text-xl font-bold text-sky-900 shadow-md shadow-black`}>
				<p>Message has been sent!</p>
			</article>
		</>
	);
}

export default Contact;
