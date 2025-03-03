import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        backdrop-blur-lg
        border border-white/10
        shadow-[0_0_30px_rgba(0,0,0,0.3)]
        px-4 md:px-6 py-4
        ${isScrolled ? "bg-theme-dark-bg/85" : "bg-theme-dark-bg/60"}
        flex items-center justify-between
      `}
			>
				<a
					href="#home"
					className="text-2xl font-bold text-gradient relative group"
				>
					Zacky.
					<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<ul className="flex items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-sm font-medium text-theme-text-secondary hover:text-white transition-all duration-300 relative group py-2"
								>
									{link.name}
									<span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-theme-accent-primary via-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
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
					className="md:hidden btn-icon hover:bg-white/10 rounded-lg p-2 transition-colors duration-200"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`fixed inset-4 m-auto bg-theme-dark-bg/98 backdrop-blur-xl rounded-2xl border border-white/10 z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
					isMobileMenuOpen
						? "opacity-100 scale-100"
						: "opacity-0 scale-95 pointer-events-none"
				}`}
			>
				<nav>
					<ul className="flex flex-col items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-xl font-medium hover:text-theme-accent-primary transition-all duration-300 hover:scale-110 transform"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.name}
								</a>
							</li>
						))}
						<li className="mt-6">
							<a
								href="/resume.pdf"
								className="btn-primary px-8 py-3 bg-gradient-to-r from-theme-accent-primary to-purple-500 hover:from-theme-accent-primary hover:to-pink-500 transition-all duration-300"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
