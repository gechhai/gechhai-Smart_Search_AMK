/** @type {import('tailwindcss').Config} */

const colors = {
  primary: '#A43C6F', // purple
  secondary: '#FFFFFF', // 
  background: '#F7F7FA', // 
  surface: '#b35d87', // light pink
  white: '#FFFFFF',
  darkpurple: '#5b0b30',
  lightyellow: "#FFF7DB",
  boldyellow: "#E4B20E",
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors, 
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      fontSize: {
        h1: ['48px', { lineHeight: '56px', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '40px', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '32px', fontWeight: '500' }],
        h4: ['20px', { lineHeight: '20px', fontWeight: '500' }],
        b1: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        b2: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        b3: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
    },
    
  },
  plugins: [],
};
