/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground":
						"hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground":
						"hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				theme: {
					"dark-bg": "#121212",
					"dark-surface": "#1E1E1E",
					"accent-primary": "#9b87f5",
					"accent-secondary": "#D946EF",
					"text-primary": "#FFFFFF",
					"text-secondary": "#8E9196",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"fade-out": {
					"0%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0",
					},
				},
				"slide-in-right": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
				"slide-in-left": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
				"text-shimmer": {
					"0%": {
						backgroundPosition: "-200% 0",
					},
					"100%": {
						backgroundPosition: "200% 0",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				pulse: {
					"0%, 100%": {
						opacity: "1",
					},
					"50%": {
						opacity: "0.5",
					},
				},
				typing: {
					"0%": {
						width: "0%",
					},
					"100%": {
						width: "100%",
					},
				},
				blink: {
					"0%, 100%": {
						borderColor: "transparent",
					},
					"50%": {
						borderColor: "white",
					},
				},
				"progress-fill": {
					"0%": {
						width: "0%",
					},
					"100%": {
						width: "var(--progress-width, 0%)",
					},
				},
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(1deg)",
					},
					"75%": {
						transform: "rotate(-1deg)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up 0.5s ease-out forwards",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"slide-in-right": "slide-in-right 0.5s ease-out forwards",
				"slide-in-left": "slide-in-left 0.5s ease-out forwards",
				"text-shimmer": "text-shimmer 2.5s ease-in-out infinite",
				float: "float 3s ease-in-out infinite",
				pulse: "pulse 2s ease-in-out infinite",
				typing: "typing 3.5s steps(30, end)",
				blink: "blink 0.75s step-end infinite",
				"progress-fill": "progress-fill 1.5s ease-out forwards",
				tilt: "tilt 10s ease-in-out infinite",
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				blink: "blink 3s infinite",
				'cursor-blink': 'cursor-blink 1.2s steps(2, jump-none) infinite',
				'animate-blink': 'animate-blink 1s infinite',
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				shimmer:
					"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0) 100%)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
