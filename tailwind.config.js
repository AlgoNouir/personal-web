/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
        primary: "#F2CCB8",
        secondary: "#69514c",
        background: "#44496b",
        card: "#707499",
        text: "#FFF",
        border: "#555a7d",
        notification: "#AEBC4A",
        error: "#C4716C",
        success: "#1DC322",
        info: "#3A5290",
        warning:"#E7B10A",
    
        white: "#FFF",
        black: "#000",
        red: "#C4716C",
        green: "#AEBC4A",
        blue: "#3A5290",
    },
  },
  plugins: [],
}
