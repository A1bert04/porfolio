/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/*.{js,ts,jsx,tsx}",
        "./src/components/*.{js,ts,jsx,tsx}",
        "./src/pages/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bree': ['Bree Serif', 'serif'],
            },
        },
    },
    plugins: [],
}
