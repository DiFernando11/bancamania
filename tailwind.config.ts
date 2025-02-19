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
          230: 'var(--accent-230)',
        },
        bg: {
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          300: 'var(--bg-300)',
        },
        comun: {
          'card-wave': 'var(--card-wave)',
        },
        loading: {
          100: 'var(--loading-100)',
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
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.5rem',
      },
      height: {
        'content-destokp': `calc(100vh - (80px + 1.5rem))`,
        'content-mobile': `calc(100vh - (80px + 50px + 2.5rem))`,
        'content-tablet': `calc(100vh - (80px))`,
        'menu-destokp': `calc(100vh - 80px)`,
      },
      lineHeight: {
        xxs: '0.875rem',
        xxxs: '0.75rem',
      },
      width: {
        22: '5.5rem',
      },
    },
  },
}
export default config
