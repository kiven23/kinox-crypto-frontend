/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // we’ll keep dark mode forced
  theme: {
    extend: {
      colors: {
        neon: {
          400: "#0ff", // cyan
          500: "#5f0fff", // purple‑blue
          600: "#ff00ff", // magenta
        },
      },
      backgroundImage: theme => ({
        "gradient-neon": "linear-gradient(135deg, #0ff 0%, #5f0fff 100%)",
      }),
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        neon: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #5f0fff",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px #0ff, 0 0 10px #0ff" },
          "50%": { boxShadow: "0 0 15px #0ff, 0 0 30px #5f0fff" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};