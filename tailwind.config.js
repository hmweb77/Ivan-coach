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
				primary: "#8906e6",
				darkPrimary: "#01182C",
				secondary: "#c484f1",
				neutral: "#F7F8F9",
				textColor: "#01162C",
// 				Secondary: #c484f1
// Tertiary: #ff00e2 and 
// #050deb
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
