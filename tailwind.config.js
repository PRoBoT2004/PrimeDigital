// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // !! IMPORTANT: Ensure this path correctly covers all your JSX/TSX files !!
  content: [
    "./index.html", // Don't forget index.html for root body/html classes
    "./src/**/*.{js,ts,jsx,tsx}", // This covers all files in src/ and its subdirectories
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors - these must be defined here to work
        'neon-blue': '#00D4FF',
        'dark-blue': '#0066CC',
        'primary': '#000000',
        'black-secondary': '#0A0A0A',
      },
      // Keep your custom animations/keyframes here
      animation: {
        "scroll-up": "scrollUp 10s linear infinite",
        // Example from HeroSection:
        // "pulse-glow": "pulseGlow 2s ease-in-out infinite", 
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        // Example from HeroSection:
        // pulseGlow: {
        //   "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
        //   "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
        // },
      },
    },
  },
  plugins: [], // Leave this empty for now unless you specifically need plugins like @tailwindcss/forms etc.
};