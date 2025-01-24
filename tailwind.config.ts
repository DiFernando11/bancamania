import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        'bottom-accent': '0 4px 6px -1px var(--accent-200)',
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
    },
  },
}
export default config
