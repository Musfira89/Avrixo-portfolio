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
        bg: {
          primary: '#000000',        // Pure black (logo background)
          secondary: '#0a0a0a',      // Slightly lighter
        },
        brand: {
          cyan: '#00D9FF',           // Logo cyan
          lime: '#B4FF39',           // Logo lime/lemon
        },
        text: {
          primary: '#ffffff',
          secondary: '#d1d5db',
          muted: '#9ca3af',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #00D9FF 0%, #B4FF39 100%)',      // Cyan to Lime
        'gradient-accent': 'linear-gradient(90deg, #00D9FF 0%, #B4FF39 100%)',     // Horizontal gradient
        'gradient-subtle': 'linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(180,255,57,0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;