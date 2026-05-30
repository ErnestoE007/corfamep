/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F0F9FF", // Soft Azure
          primary: "#0EA5E9", // Vibrant Sky Blue
          secondary: "#22C55E", // Fresh Mint Green
          dark: "#0C4A6E", // Deep Navy for contrast
        },
        starlight: "#FFFFFF",
        titanium: "#64748b",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
