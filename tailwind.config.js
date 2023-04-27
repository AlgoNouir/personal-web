/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
        primary: "#EDEDED",
        secondary: "#3C414A",
        background: "#EDEDED",
        card: "#FFF",
        text: "#3C414A",
        border: "#3C414A99",
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
