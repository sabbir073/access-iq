/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        teal: {
          accent: "#00d4aa",
        },
        blue: {
          accent: "#0088cc",
        },
        dark: {
          900: "#0b0f1a",
          800: "#0b1120",
          700: "#0d1520",
          600: "#0f1923",
          500: "#111d2e",
        },
      },
    },
  },
  plugins: [],
};
