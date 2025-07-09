/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#E6F3FF',
          100: '#CCE7FF', 
          200: '#99CEFF', 
          300: '#66B5FF', 
          400: '#339DFF', 
          500: '#007BFF', // Logo color
          600: '#0062CC', 
          700: '#004A99', 
          800: '#003166', 
          900: '#001933',
          950: '#000D1A',
        },
        blue: {
          500: '#007BFF', // Override Tailwind's blue to match logo
          600: '#0062CC',
          400: '#339DFF',
        },
        dark: {
          lighter: '#001A3A',
          light: '#051630',
          DEFAULT: '#051630',
          dark: '#010E22'
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slideUp': 'slideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'rock': 'rock 3s ease-in-out infinite',
        'bounce-rotate': 'bounceRotate 2s ease-in-out infinite alternate',
        'float': 'float 6s cubic-bezier(0.25, 0.1, 0.25, 1.4) infinite',
        'pulse-soft': 'pulseSoft 3s cubic-bezier(0.25, 0.1, 0.25, 1.4) infinite',
      },
      keyframes: {
        rock: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        bounceRotate: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-2px) rotate(3deg)' },
          '50%': { transform: 'translateY(-4px) rotate(0deg)' },
          '75%': { transform: 'translateY(-2px) rotate(-3deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        pulseSoft: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'all': 'all',
      },
      boxShadow: {
        'skill': '0 0 15px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)'
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
}
