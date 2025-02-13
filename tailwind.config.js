const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [heroui()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      letterSpacing: {
        custom: "8%",
      },
      lineHeight: {
        "custom-head": "72px",
        "custom-line": "1.5",
      },
      fontFamily: {
        libreCaslonDisplay: "var(--font-libreCaslonDisplay)",
        figtree: "var(--font-figtree)",
        playFair: "var(--font-playFair)",
      },
      colors: {
        primary: "#314A75",
        secondary: "#F4C400",
        info: "#38A3A5",
      },
    },
  },
};
// primary: "#22577A",
// secondary: "#CAE9FF",
