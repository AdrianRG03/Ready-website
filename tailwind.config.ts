import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────
        ready: {
          green:        '#0F5C4A',   // primary — matches joinready.com --primary
          'green-mid':  '#1A6B58',   // hover / mid tone
          'green-deep': '#083D2C',   // dark backgrounds
          'green-dark': '#042419',   // very dark
          yellow:       '#EEFF78',   // accent CTA — PDF palette "Yellow"
          'yellow-dark':'#D4E860',   // hover / darker yellow
          'yellow-soft':'#F0FAB4',   // muted — joinready.com --secondary
          black:        '#242424',   // PDF palette "Black"
        },
        // ── Neutrals with warm tint ────────────────
        ink: {
          50:  '#f7f8f4',
          100: '#eef0e9',
          200: '#d8ddd1',
          300: '#b4bcaa',
          400: '#8a9680',
          500: '#687560',
          600: '#505d49',
          700: '#3e4a38',
          800: '#2d3829',
          900: '#1c2419',
          950: '#0e1510',
        },
      },
      fontFamily: {
        sans:    ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':     'fadeIn 0.4s ease-out forwards',
        'float-y':     'floatY 4s ease-in-out infinite',
        'shimmer':     'shimmerSlide 0.55s ease forwards',
        'pulse-ring':  'pulseRing 1.8s ease-out infinite',
        'gradient-x':  'gradientX 6s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmerSlide: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.55' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'yellow-sm': '0 2px 10px rgba(238,255,120,0.28)',
        'yellow-md': '0 6px 24px rgba(238,255,120,0.35)',
        'yellow-lg': '0 12px 40px rgba(238,255,120,0.30)',
        'green-sm':  '0 2px 10px rgba(15,92,74,0.22)',
        'green-md':  '0 6px 24px rgba(15,92,74,0.30)',
        'green-lg':  '0 12px 40px rgba(15,92,74,0.28)',
      },
      screens: {
        xs:  '375px',
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl':'1536px',
      },
    },
  },
  plugins: [],
} satisfies Config
