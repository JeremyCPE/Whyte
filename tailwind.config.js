/** @type {import('tailwindcss').Config} */

export default {
  
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Gloria Hallelujah"', 'cursive'],
        body: ['"Architects Daughter"', 'cursive'],
        sztempel: ['"SztempelDRom W00 Regular"', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 10s linear infinite',
        fadeOut: 'fadeOut 1s ease-out 4s forwards',
        spinAndFadeOut: 'spin 10s linear infinite, fadeInOut 5s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-out 3s forwards',
        fadeInOut: 'fadeInOut 5s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(359deg)' },
        },

        fadeInOut: {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};