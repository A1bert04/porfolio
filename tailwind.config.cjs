/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/*.{js,ts,jsx,tsx}",
        "./src/components/*.{js,ts,jsx,tsx}",
        "./src/sections/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bree': ['Bree Serif', 'serif'],
            },
            animation: {
                'movetoright': 'movetoright 0.75s',
            },
            keyframes: {
                'movetoright': {
                    'from': { transform: 'translateX(0%) scale(1) skewY(0)'  },
                    'to': { transform: 'translateX(5%) scale(1.1) skewY(-1deg)' },
                }
            }
        },
    },
    plugins: [],
}
