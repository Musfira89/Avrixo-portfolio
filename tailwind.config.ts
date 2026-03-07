import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        bg: {
          primary: "#0a0a0a",   // SS 2: Pure Black
          secondary: "#1a1a1a",
          light: "#e6e6e6",     // SS 1: Light Gray
          muted: "#262626",
        },
        brand: {
          primary: "#e31e24",   // SS 3 & 5: Vibrant Red
          hover: "#c1191f",
          accent: "#ff3d43",
        },
        text: {
          primary: "#ffffff",
          dark: "#1a1a1a",      // SS 4: Heading Black
          muted: "#737373",
        },
      },
      // Adding custom shadow for that AI glow feel
      boxShadow: {
        'brand-glow': '0 0 20px rgba(227, 30, 36, 0.2)',
      }
    },
  },
  plugins: [],
};

export default config;