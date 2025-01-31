import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        'all-accent': '0 0 12px 0 var(--accent-200)',
        'bottom-accent': '0 4px 6px -1px var(--accent-200)',
        'left-accent': '-4px 0 6px -1px var(--accent-200)',
        'right-accent': '4px 0 6px -1px var(--accent-200)',
        'top-accent': '0 -4px 6px -1px var(--accent-200)',
      },
      colors: {
        accent: {
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
        },
        bg: {
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          300: 'var(--bg-300)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
        },
        text: {
          100: 'var(--text-100)',
          200: 'var(--text-200)',
        },
      },
      height: {
        'content-destokp': `calc(100vh - (80px + 1.5rem))`,
        'content-mobile': `calc(100vh - (80px + 50px + 2.5rem))`,
      },
    },
  },
}
export default config
