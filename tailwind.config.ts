import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Background system */
        bg: {
          primary: "#0b0c0c",     // dark base (not pure black)
          secondary: "#1e1f1f",   // section dark
          muted: "#3f444b",       // cards / borders
          light: "#d9d9d9",       // light sections
        },

        /* Brand system */
        brand: {
          primary: "#ff5c35",    // 🔥 main CTA / buttons
          danger: "#bf1212",     // errors / alerts
        },

        /* Text system */
        text: {
          primary: "#ffffff",
          secondary: "#ffffff4d", // white with opacity
          dark: "#0b0c0c",        // text on light sections
        },
      },
    },
  },
  plugins: [],
};

export default config;
