/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/**.{tsx,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#848484",
				secondary: "rgba(255, 255, 255, 0.2)",
				status: "#3dd26a",
				category: "rgba(2, 177, 90, 0.15)",
			},
		},
	},
	plugins: [require("daisyui")],
};
