/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f3",
          100: "#dfece2",
          200: "#bed8c4",
          300: "#97bca1",
          400: "#6b9e7b",
          500: "#4f8260",
          600: "#3c6b4d",
          700: "#2f5440",
          800: "#244336",
          900: "#1b3229"
        },
        charcoal: {
          50: "#f5f6f7",
          100: "#e3e7ea",
          200: "#c4ccd1",
          300: "#9aa7b1",
          400: "#6f7f8b",
          500: "#55636e",
          600: "#3f4a53",
          700: "#2f3840",
          800: "#232b31",
          900: "#151c21"
        },
        offwhite: "#f6f4ef",
        amber: {
          400: "#f4b449",
          500: "#e09a2d",
          600: "#c68117"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 16px 60px rgba(21, 28, 33, 0.12)",
        glow: "0 0 0 1px rgba(79, 130, 96, 0.18), 0 12px 30px rgba(36, 67, 54, 0.2)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 15% 15%, rgba(79, 130, 96, 0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(244, 180, 73, 0.15), transparent 45%)",
        "section-fade": "linear-gradient(180deg, rgba(246, 244, 239, 0.9), rgba(246, 244, 239, 0))"
      }
    }
  },
  plugins: []
};
