import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
	const { toast } = useToast();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState({
		status: "idle",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus({ status: "submitting", message: "" });

		try {
			const formData = new FormData();
			// Add Web3Forms access key
			formData.append(
				"access_key",
				"f94b871d-841e-477a-bde2-53280544462d"
			);
			// Add form fields
			formData.append("name", formState.name);
			formData.append("email", formState.email);
			formData.append("message", formState.message);
			// Optional: Add subject
			formData.append("subject", "New contact form submission");

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				toast({
					title: "Message Sent!",
					description:
						"Thank you for reaching out. I'll be in touch soon!",
					variant: "default",
				});
				setFormStatus({
					status: "success",
					message: "Form submitted successfully",
				});
				setFormState({ name: "", email: "", message: "" });
			} else {
				toast({
					title: "Error!",
					description:
						data.message ||
						"There was an error sending your message. Please try again.",
					variant: "destructive",
				});
				setFormStatus({ status: "error", message: data.message });
			}
		} catch (error) {
			toast({
				title: "Error!",
				description:
					"There was an error sending your message. Please try again.",
				variant: "destructive",
			});
			setFormStatus({
				status: "error",
				message: "Failed to submit the form",
			});
		} finally {
			setFormStatus((prev) => ({ ...prev, status: "idle" }));
		}
	};

	const contactInfo = [
		{
			icon: MapPin,
			title: "Location",
			content: "Colombo, Sri Lanka",
		},
		{
			icon: Mail,
			title: "Email",
			content: "aathifzacky6@gmail.com",
			href: "mailto:aathifzacky6@gmail.com",
		},
		{
			icon: Phone,
			title: "Phone",
			content: "+94 76 811 670",
			href: "tel:+94767811670",
		},
	];

	return (
		<section
			id="contact"
			className="section-container relative overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-32 left-10 w-72 h-72 bg-theme-accent-primary/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-72 h-72 bg-theme-accent-secondary/10 rounded-full blur-3xl"></div>
			</div>

			<div ref={ref} className="max-w-6xl mx-auto relative z-10">
				<div className="text-center mb-12 md:mb-20">
					<h2
						className={`text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary bg-clip-text text-transparent transition-all duration-700 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						Get In Touch
					</h2>
					<p
						className={`text-base md:text-lg text-theme-text-secondary max-w-2xl mx-auto transition-all duration-700 delay-100 ${
							inView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						Have a project in mind or want to discuss a potential
						collaboration? I'd love to hear from you!
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
					{/* Contact Info Section */}
					<div
						className={`bg-theme-dark-surface/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg transition-all duration-700 delay-200 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-8"
						}`}
					>
						<h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary bg-clip-text text-transparent">
							Contact Information
						</h3>

						<div className="space-y-8 mb-12">
							{contactInfo.map((item) => (
								<div
									key={item.title}
									className="flex items-start gap-3 md:gap-5 group"
								>
									<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-theme-accent-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-theme-accent-primary/20 transition-colors">
										<item.icon
											size={20}
											className="text-theme-accent-primary"
										/>
									</div>
									<div>
										<h4 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1">
											{item.title}
										</h4>
										{item.href ? (
											<a
												href={item.href}
												className="text-sm md:text-base text-theme-text-secondary hover:text-theme-accent-primary transition-colors inline-block"
											>
												{item.content}
											</a>
										) : (
											<p className="text-sm md:text-base text-theme-text-secondary">
												{item.content}
											</p>
										)}
									</div>
								</div>
							))}
						</div>

						<div>
							<h4 className="text-xl font-bold mb-6">
								Let's Connect
							</h4>
							<SocialIcons iconSize={24} />
						</div>
					</div>

					{/* Contact Form Section with Web3Forms */}
					<div
						className={`bg-theme-dark-surface/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/5 shadow-lg transition-all duration-700 delay-300 ${
							inView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}
					>
						<h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary bg-clip-text text-transparent">
							Send Me a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Hidden honeypot field for spam prevention */}
							<input
								type="hidden"
								name="botcheck"
								style={{ display: "none" }}
							/>

							<div className="group">
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2 group-focus-within:text-theme-accent-primary transition-colors"
								>
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									value={formState.name}
									onChange={handleChange}
									placeholder="Your name"
									required
									className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-theme-dark-surface/50 border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-2 focus:ring-theme-accent-primary/20 transition-all"
								/>
							</div>

							<div className="group">
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2 group-focus-within:text-theme-accent-primary transition-colors"
								>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
									placeholder="Your email address"
									required
									className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-theme-dark-surface/50 border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-2 focus:ring-theme-accent-primary/20 transition-all"
								/>
							</div>

							<div className="group">
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2 group-focus-within:text-theme-accent-primary transition-colors"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formState.message}
									onChange={handleChange}
									placeholder="Your message"
									required
									rows={4}
									className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-theme-dark-surface/50 border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-2 focus:ring-theme-accent-primary/20 transition-all resize-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={formStatus.status === "submitting"}
								className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary rounded-xl text-sm md:text-base font-semibold text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 group"
							>
								{formStatus.status === "submitting" ? (
									<span className="flex items-center justify-center">
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</span>
								) : (
									<span className="flex items-center justify-center">
										Send Message
										<Send
											size={16}
											className="ml-2 group-hover:translate-x-1 transition-transform"
										/>
									</span>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
