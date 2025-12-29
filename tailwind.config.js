/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#DCE7DE",
          100: "#DCE7DE",
          200: "#6F8F73",
          300: "#6F8F73",
          400: "#355A3A",
          500: "#355A3A",
          600: "#2F4A2F",
          700: "#2F4A2F",
          800: "#2F4A2F",
          900: "#2F4A2F"
        },
        charcoal: {
          50: "#F6F8F7",
          100: "#DCE7DE",
          200: "#DCE7DE",
          300: "#1F2933",
          400: "#1F2933",
          500: "#1F2933",
          600: "#1F2933",
          700: "#1F2933",
          800: "#1F2933",
          900: "#1F2933"
        },
        offwhite: "#F6F8F7",
        amber: {
          400: "#E06A2D",
          500: "#E06A2D",
          600: "#E06A2D"
        },
        signal: "#6FCF97"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 16px 60px rgba(31, 41, 51, 0.12)",
        glow: "0 0 0 1px rgba(53, 90, 58, 0.2), 0 12px 30px rgba(47, 74, 47, 0.2)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 15% 15%, rgba(53, 90, 58, 0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(224, 106, 45, 0.15), transparent 45%)",
        "section-fade": "linear-gradient(180deg, rgba(246, 248, 247, 0.9), rgba(246, 248, 247, 0))"
      }
    }
  },
  plugins: []
};
