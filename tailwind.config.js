/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#000000', 50: '#0A0908', 100: '#100E0C' },
        bone: { DEFAULT: '#F5F1EA', dim: 'rgba(245,241,234,0.56)', faint: 'rgba(245,241,234,0.38)' },
        vesper: { amber: '#FF8A1F', gold: '#FFB020', pink: '#FF3D77', rose: '#FF6FA5', violet: '#A78BFA', mint: '#34D399' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { bento: '28px', 'bento-lg': '34px', pill: '999px' },
      boxShadow: {
        bento: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.5)',
        'bento-lg': 'inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 90px rgba(0,0,0,0.6)',
        glow: '0 8px 26px rgba(255,120,40,0.34)',
        'glow-lg': '0 18px 50px rgba(255,120,40,0.45)',
        nav: '0 18px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'vesper-grad': 'linear-gradient(135deg, #FF8A1F 0%, #FF3D77 100%)',
        'vesper-text': 'linear-gradient(100deg, #FF8A1F 0%, #FFD27A 42%, #FF3D77 100%)',
        holo: 'conic-gradient(from 0deg, #FF3D77, #FFB020, #6EE7F9, #A78BFA, #FF3D77)',
        'holo-text': 'linear-gradient(100deg, #FFE9C7, #FFB020 30%, #FF8FB8 60%, #A5F3FC 90%)',
        grid: 'linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '88px 88px' },
      keyframes: {
        breathe: { '0%,100%': { transform: 'scale(1.04) translate3d(0,0,0)' }, '50%': { transform: 'scale(1.13) translate3d(0,-1.2%,0)' } },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-6%,0) scale(1.12)' },
          '66%': { transform: 'translate3d(-5%,4%,0) scale(.94)' },
        },
        marquee: { from: { transform: 'translate3d(0,0,0)' }, to: { transform: 'translate3d(-50%,0,0)' } },
        sheen: { from: { transform: 'translate3d(-120%,0,0) skewX(-18deg)' }, to: { transform: 'translate3d(320%,0,0) skewX(-18deg)' } },
        pulseGlow: { '0%,100%': { opacity: '.35', transform: 'scale(.97)' }, '50%': { opacity: '1', transform: 'scale(1.06)' } },
        floaty: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-14px,0)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.25' } },
      },
      animation: {
        breathe: 'breathe 22s ease-in-out infinite',
        'breathe-slow': 'breathe 26s ease-in-out infinite reverse',
        drift: 'drift 26s ease-in-out infinite',
        'drift-slow': 'drift 34s ease-in-out infinite reverse',
        'drift-slower': 'drift 42s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite',
        sheen: 'sheen 3.6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.2s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        blink: 'blink 2.4s ease-in-out infinite',
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
};
