/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                grayBackground: '#F7F7F7'
            }
        },
    },
    plugins: [],
}
