import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setIsScrolled(offset > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when scrolling
	useEffect(() => {
		const closeMenuOnScroll = () => {
			if (isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("scroll", closeMenuOnScroll);
		return () => window.removeEventListener("scroll", closeMenuOnScroll);
	}, [isMobileMenuOpen]);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			const mobileMenu = document.getElementById("mobile-menu");
			const menuButton = document.getElementById("menu-button");

			if (
				isMobileMenuOpen &&
				mobileMenu &&
				!mobileMenu.contains(event.target) &&
				menuButton &&
				!menuButton.contains(event.target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [isMobileMenuOpen]);

	return (
		<header
			className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out 
    ${
		isScrolled
			? "w-[95%] md:w-[90%] lg:w-[85%]"
			: "w-[98%] md:w-[95%] lg:w-[90%]"
	}`}
		>
			<div
				className={`
				rounded-2xl
				backdrop-blur-xl
				border border-white/[0.08]
				px-4 md:px-6 py-4
				${isScrolled ? "bg-theme-dark-bg/90" : "bg-theme-dark-bg/75"}
				flex items-center justify-between
				transition-all duration-300 ease-out
				hover:border-white/[0.12]
    `}
			>
				<a href="#home" className="text-2xl font-bold relative group">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500">
						Aathif
					</span>
					<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out" />
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<ul className="flex items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-sm font-medium text-theme-text-secondary hover:text-white transition-all duration-300 relative group py-2 px-3"
								>
									{link.name}
									<span className="absolute inset-0 bg-white/[0.08] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-10" />
									<span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 ease-out" />
								</a>
							</li>
						))}
						<li>
							<a
								href="/resume.pdf"
								className="btn-primary text-sm py-2.5 px-7 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-theme-accent-primary/25 transition-all duration-300 bg-gradient-to-r from-theme-accent-primary to-purple-500 hover:from-theme-accent-primary hover:to-pink-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Resume
							</a>
						</li>
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<button
					id="menu-button"
					className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-theme-accent-primary/20 to-purple-500/20 hover:from-theme-accent-primary/30 hover:to-pink-500/30 transition-all duration-300"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<div className="relative w-6 h-6">
						<span
							className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
								isMobileMenuOpen ? "top-3 rotate-45" : "top-0.5"
							}`}
						/>
						<span
							className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out top-2.5 ${
								isMobileMenuOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
								isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
							}`}
						/>
					</div>
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				id="mobile-menu"
				className={`fixed top-20 left-0 w-full h-screen rounded-2xl bg-gradient-to-b from-theme-dark-bg/95 to-theme-dark-bg backdrop-blur-lg z-40 md:hidden transition-all duration-500 ease-in-out ${
					isMobileMenuOpen
						? "opacity-100 visible translate-y-0"
						: "opacity-0 invisible -translate-y-full"
				}`}
			>
				<div className="flex flex-col h-full justify-center items-center pt-24 px-8 pb-20">
					<div className="w-full max-w-xs mx-auto">
						<ul className="grid gap-4">
							{navLinks.map((link, index) => (
								<li
									key={link.name}
									className={`w-full transform transition-all duration-500 ease-in-out ${
										isMobileMenuOpen
											? "translate-x-0 opacity-100"
											: "translate-x-8 opacity-0"
									}`}
									style={{
										transitionDelay: isMobileMenuOpen
											? `${index * 50}ms`
											: "0ms",
									}}
								>
									<a
										href={link.href}
										className="flex items-center justify-center h-14 bg-white/5 rounded-xl border border-white/10 hover:bg-gradient-to-r hover:from-theme-accent-primary/20 hover:to-purple-500/20 hover:border-theme-accent-primary/30 hover:text-theme-accent-primary transition-all duration-300"
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
									>
										<span className="text-lg font-medium">
											{link.name}
										</span>
									</a>
								</li>
							))}
						</ul>

						<div
							className={`mt-12 w-full text-center transform transition-all duration-500 ease-in-out ${
								isMobileMenuOpen
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{
								transitionDelay: isMobileMenuOpen
									? `${navLinks.length * 50 + 100}ms`
									: "0ms",
							}}
						>
							<a
								href="/resume.pdf"
								className="inline-block w-full py-4 rounded-xl bg-gradient-to-r from-theme-accent-primary to-purple-500 hover:from-theme-accent-primary hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-theme-accent-primary/30 text-white font-medium"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Resume
							</a>
						</div>

						<div
							className={`mt-12 flex justify-center space-x-4 transform transition-all duration-500 ease-in-out ${
								isMobileMenuOpen
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{
								transitionDelay: isMobileMenuOpen
									? `${navLinks.length * 50 + 200}ms`
									: "0ms",
							}}
						>
							{/* Social Icons */}
							<SocialIcons className="mb-4 justify-center md:justify-end gap-4" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
