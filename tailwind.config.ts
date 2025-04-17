import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // ✅ Enables dark mode using a class

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['Yesteryear', 'cursive'],
      },
      
      container: {
        center: true,
        padding: '1rem',
        
      },
    },
  },
  plugins: [],
  
} satisfies Config;
