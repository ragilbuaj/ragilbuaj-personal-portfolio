import "../App.css";

function Contact() {
	return (
		<div>
			<h1 className="text-center font-neue-montreal text-3xl font-bold text-orange-200">Get in touch!</h1>
			<form className="mt-12 grid grid-cols-1 place-items-center gap-5">
				<div className="flex flex-col gap-2">
					<label className="text-md text-orange-200">Your email</label>
					<input type="email" className="form-input w-96 rounded-xl font-semibold shadow-md shadow-black" placeholder="name@gmail.com" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-md text-orange-200">Subject</label>
					<input type="text" className="form-input w-96 rounded-xl font-semibold shadow-md shadow-black" placeholder="Let me know how i can help you" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-md text-orange-200">Your message</label>
					<textarea className="form-textarea h-24 w-96 rounded-xl font-semibold shadow-md shadow-black" placeholder="Leave a comment..." />
				</div>
				<button type="submit" className="h-10 w-32 rounded-lg bg-slate-200 font-semibold shadow-md shadow-black hover:bg-sky-900 hover:text-white">
					Send message
				</button>
			</form>
		</div>
	);
}

export default Contact;
