import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        'all-accent': '0 0 0.75rem 0 var(--accent-200)',
        'bottom-accent': '0 0.25rem 0.375rem -0.0625rem var(--accent-200)',
        'left-accent': '-0.25rem 0 0.375rem -0.0625rem var(--accent-200)',
        'right-accent': '0.25rem 0 0.375rem -0.0625rem var(--accent-200)',
        'top-accent': '0 -0.25rem 0.375rem -0.0625rem var(--accent-200)',
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
        error: 'var(--error)',
        icon: {
          default: 'var(--icon-default)',
        },
        info: 'var(--info)',
        loading: {
          100: 'var(--loading-100)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
        },
        success: 'var(--success)',
        text: {
          100: 'var(--text-100)',
          200: 'var(--text-200)',
        },
        warning: 'var(--warning)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.5rem',
      },
      height: {
        '22': '5.5rem',
        '50': '12.5rem',
        'content-destokp': `calc(100vh - (5rem + 1.5rem))`,
        'content-mobile': `calc(100vh - (5rem + 3.125rem + 2.5rem))`,
        'menu-destokp': `calc(100vh - 5rem)`,
      },
      lineHeight: {
        xxs: '0.875rem',
        xxxs: '0.75rem',
      },
      maxWidth: {
        '160': '40rem',
      },
      width: {
        '160': '40rem',
        22: '5.5rem',
      },
    },
  },
}
export default config
