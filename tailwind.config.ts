// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(0,255,0,0.25) 0.2px, transparent 0.6px)", 
      },
      backgroundSize: {
        "dot-grid": "6px 6px", // gap minimal kar diya
      },
      backgroundPosition: {
        "dot-grid": "center", 
      },
    },
  },
  plugins: [],
};
