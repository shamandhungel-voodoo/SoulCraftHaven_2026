/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soul-purple': '#8B5CF6',
        'soul-pink': '#EC4899',
        'soul-amber': '#F59E0B',
        'soul-cream': '#FEF3C7',
        'soul-brown': '#78350F',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(236, 72, 153, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}