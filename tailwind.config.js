export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 1.2s ease-out forwards"
      },
      fontFamily: {
        "playfair-display": ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        // ✅ Add your new font here. Using a descriptive name is best.
        "dancing-script": ['"Dancing Script"', "cursive"],
        cursive: ["Dancing Script", "cursive"]
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};
