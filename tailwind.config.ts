import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Night Owl Dark Theme
        night: {
          bg: '#011627',
          'bg-alt': '#0b2942',
          'bg-highlight': '#1d3b53',
          text: '#d6deeb',
          'text-muted': '#7fdbca',
          accent: '#82aaff',
          'accent-alt': '#c792ea',
          cyan: '#7fdbca',
          yellow: '#ecc48d',
          orange: '#f78c6c',
          red: '#ef5350',
          pink: '#c792ea',
          green: '#22da6e',
          comment: '#637777',
        },
        // Light Theme
        day: {
          bg: '#fbfbfb',
          'bg-alt': '#f0f0f0',
          'bg-highlight': '#e0e0e0',
          text: '#403f53',
          'text-muted': '#0c969b',
          accent: '#4876d6',
          'accent-alt': '#994cc3',
          cyan: '#0c969b',
          yellow: '#c96765',
          orange: '#e0440e',
          red: '#de3d3b',
          pink: '#994cc3',
          green: '#08916a',
          comment: '#989fb1',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'night-gradient': 'linear-gradient(135deg, #011627 0%, #0b2942 50%, #1d3b53 100%)',
        'day-gradient': 'linear-gradient(135deg, #fbfbfb 0%, #f0f0f0 50%, #e8e8e8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
