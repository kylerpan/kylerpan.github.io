/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        timonium: "url('/assets/backgrounds/timonium.png')",
        irvine: "url('/assets/backgrounds/irvine.png')",
        "san-diego": "url('/assets/backgrounds/san_diego.png')",
      },
      height: {
        lvh: ["100vh", "100lvh"],
        dvh: ["100vh", "100dvh"],
        svh: ["100vh", "100svh"],
      },
      width: {
        lvw: ["100vw", "100lvw"],
      },
    },
  },
  plugins: [],
};
