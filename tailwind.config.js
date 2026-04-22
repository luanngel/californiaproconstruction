/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          // ✅ Inter como sans por defecto
          sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        },
        colors: {
          brand: {
            orange: "#FF8C00",
            "orange-dark": "#E67E00",
            black: "#000000",
            "gray-dark": "#1a1a1a",
            gray: "#2a2a2a",
            "gray-light": "#4a4a4a",
            white: "#ffffff",
            silver: "#C0C0C0",
            "bg-light": "#f5f5f5",
          },
        },
      },
    },
    plugins: [],
  };
  
