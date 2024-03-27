import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '360px', // Example breakpoint definition
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1920px',
    }
  },
  plugins: [require("@tailwindcss/typography")],
  
};
