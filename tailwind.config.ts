import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080c49",
      },
      boxShadow: {
        glow: "0 0 32px rgba(8, 12, 73, 0.65)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 4.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

