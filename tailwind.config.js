/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text-primary)",
        muted: "var(--color-text-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
      boxShadow: {
        frame: "0 32px 80px rgba(58, 31, 22, 0.22)",
      },
      letterSpacing: {
        poster: "-0.08em",
      },
    },
  },
  plugins: [],
};
