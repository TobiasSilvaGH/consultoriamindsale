import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', 'sans-serif']
      },
      colors: {
        brand: {
          blue: '#0057ff',
          dark: '#141414',
          beige: '#c0c0c0'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Animation for the menu
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -40px, 0);' },
          '100%': { opacity: '1', transform: 'translateZ(0);' }
        },
        styles_rotate: {
          '0%': { transform: 'rotate(0deg) scale(4)' },
          '100%': { transform: 'rotate(-1turn) scale(4)' }
        },
        fadeText: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' }
        },
        fadeTextSection: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' }
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1s linear backwards',
        styles_rotate: 'styles_rotate 4s linear infinite',
        fadeText: 'fadeText 0.4s linear backwards',
        fadeTextSection: 'fadeTextSection 2.8s linear backwards',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
