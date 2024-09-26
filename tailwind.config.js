const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [nextui()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        libreCaslonDisplay: "var(--font-libreCaslonDisplay)",
        figtree: "var(--font-figtree)",
        playFair: "var(--font-playFair)",
      },
      colors: {
        primary: "#22577A",
        secondary: "#CAE9FF",
        info: "#38A3A5",
      },
    },
  },
};
