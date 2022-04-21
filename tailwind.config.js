module.exports = {
  daisyui: {
    themes: ["light", "black", "bumblebee", "dark", "cupcake", "luxury"]
},
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
