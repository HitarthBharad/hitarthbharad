import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "html"], // Ensures dark mode works
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3, 31.8%, 91.4%)", // Light mode border color
        ring: "hsl(221.2, 83.2%, 53.3%)", // Ensures ring utility works
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Add Tailwind animations
};

export default config;