import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const customColors = {
	...defaultColors,
	...{
		primary: defaultColors.green[700],
		second: defaultColors.purple[700],
		accent: defaultColors.green[500],
	},
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		colors: customColors,
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				"main-dark": customColors.black,
				"main-light": customColors.stone[200],
				"second-dark": customColors.stone[900],
				"second-light": customColors.stone[400],
			},
			fill: {
				"main-dark": customColors.black,
				"main-light": customColors.stone[200],
				"second-dark": customColors.stone[900],
				"second-light": customColors.stone[400],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
