/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#FDFCFB',
          DEFAULT: '#FAF8F5',
          warm: '#F5F2EC',
          border: '#E8E3DA',
        },
        ink: {
          DEFAULT: '#17151A',
          muted: '#615C6B',
          subtle: '#8F8999',
          light: '#26232B',
        },
        lavender: {
          subtle: '#F3EFFF',
          light: '#D9CAFF',
          DEFAULT: '#B99CFF',
          dark: '#8E67FA',
        },
        rose: {
          subtle: '#FFF0F3',
          light: '#FAC7D3',
          DEFAULT: '#F3A6B8',
          dark: '#E06A84',
        },
        peach: {
          subtle: '#FFF5F0',
          light: '#FFE4D4',
          DEFAULT: '#FFCFB3',
          dark: '#F59A6D',
        },
        flutter: {
          DEFAULT: '#54C5F8',
          dark: '#02569B',
          navy: '#012754',
        }
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'phone': '0 30px 60px -12px rgba(23, 21, 26, 0.25), 0 18px 36px -18px rgba(23, 21, 26, 0.2)',
        'phone-float': '0 40px 80px -15px rgba(185, 156, 255, 0.3), 0 25px 40px -20px rgba(23, 21, 26, 0.15)',
        'glow-lavender': '0 0 40px rgba(185, 156, 255, 0.4)',
        'glow-rose': '0 0 40px rgba(243, 166, 184, 0.4)',
        'soft-card': '0 10px 30px -5px rgba(23, 21, 26, 0.05)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.97)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
}
