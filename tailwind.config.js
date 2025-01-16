// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src directory for Tailwind processing
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#0a0a0a",
        lightBackground: "#ffffff",
        neonBlue: "#00ffff",
        neonGreen: "#39ff14",
        darkBlue: "#003366",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Add Montserrat as default sans-serif font
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out", // Smooth fade-in animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
