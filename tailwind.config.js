/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FAFE',
          100: '#E0F5FD',
          200: '#C2EDFC',
          300: '#A1E3F9', // Primary brand color
          400: '#73D3F5',
          500: '#3BBEEF',
          600: '#1EA0D5',
          700: '#157FAB',
          800: '#16678B',
          900: '#165573',
          DEFAULT: '#A1E3F9',
          darkText: '#0B2938', // High-contrast dark text over #A1E3F9
        },
        light: {
          bg: '#FFFFFF',
          bgSecondary: '#F5FAFD',
          text: '#16242E',
          textSecondary: '#50616C',
          border: '#E2EAF0',
          glass: 'rgba(255, 255, 255, 0.82)',
          glassBorder: 'rgba(161, 227, 249, 0.35)',
        },
        dark: {
          bg: '#101820',
          bgSecondary: '#17232D',
          text: '#F3F8FC',
          textSecondary: '#B8C7D1',
          border: '#223545',
          glass: 'rgba(23, 35, 45, 0.82)',
          glassBorder: 'rgba(161, 227, 249, 0.2)',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(16, 24, 32, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(161, 227, 249, 0.18)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-brand': '0 0 20px -3px rgba(161, 227, 249, 0.45)',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
};
