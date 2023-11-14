/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                item1: "linear-gradient(#0093E9, #80D0C7)",
                item2: "linear-gradient(#8EC5FC, #E0C3FC)",
                item3: "linear-gradient(#08AEEA, #084183)",
                item4: "linear-gradient(#804DFC, #7DFFFE)",
            },
            colors: {
                ntechs: "#084183",
                hover: "#EB681B",
                "black-rgba": "rgba(235,104,27,.4)",
                "bg-rgba": "rgba(235,104,27,.2)",
            },
            minWidth: {
                menu: "200px",
            },
            lineHeight: {
                13: "3.5rem",
                12: "1.4em",
            },
            fontSize: {
                "5ml": "2.802rem",
            },
        },
    },
    plugins: [],
};
