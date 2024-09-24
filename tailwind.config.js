/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				publicSans: ["Public Sans", "sans-serif"],
			},
			colors: {
				primary: "#0ccead",
				darkPrimary: "#01182C",
				secondary: "#01182C",
				neutral: "#F7F8F9",
				textColor: "#01162C",
			},
			screens: {
				sm: "400px",
				md: "750px",
				lg: "1100px",
				xl: "1440px",
			},
			backgroundImage: {
				hero: 'url("./src/assets/heroBg.png")',
			},
		},
  },
  plugins: [],
};
