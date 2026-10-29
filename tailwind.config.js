/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["Afacad", "sans-serif"],
        icon: ["remixicon"],
      },

      colors: {
        colorBlue: "#5f59f7",
        colorDark: "#0D0E1D",
        colorGrey: "#E7E7E8",
        colorGreyTwo: "#f5f5f5",
      },

      boxShadow: {
        customOne: "0px 16px 50px 0px rgba(13,14,29,0.12)",
      },
    },
  },
  plugins: [],
};
