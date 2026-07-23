import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', '"sans-serif"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7C3AED",
        secondary: "#2D3864",
      },
    },
  },
  plugins: [],
} satisfies Config;
