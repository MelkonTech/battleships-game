/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        board: "0 0 0 4px rgb(253 186 116)",
      },
    },
  },
  plugins: [],
};
