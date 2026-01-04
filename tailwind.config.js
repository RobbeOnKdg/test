module.exports = {
  content: ["./index.html", "./weeks/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        'bg-move': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        'bg-move': 'bg-move 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}