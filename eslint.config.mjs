import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import _import from 'eslint-plugin-import'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      'package-lock.json',
      'package.json',
      '**/next-env.d.ts',
      '!**/.next-i18next.config.js',
      '!**/.prettierrc.json',
      '**/.tsconfig.json',
      '.vscode/*',
      '**/node_modules/',
      '**/.next/',
      '**/.husky/',
      '**/coverage/',
      '**/build/',
      '**/dist/',
      '**/*.log',
      '**/.env',
      '**/.env.local',
      '**/.env.*.local',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'next',
      'next/core-web-vitals'
    )
  ).map(config => ({
    ...config,
    files: ['**/*.{js,jsx,ts,tsx}'],
  })),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      react: fixupPluginRules(react),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      import: fixupPluginRules(_import),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'sort-keys-fix': sortKeysFix,
      unicorn,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'storybook/default-exports': 'off',
      'storybook/prefer-pascal-case': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^T',
        },
      ],

      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],

      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },

          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'never',
        },
      ],

      'linebreak-style': ['error', 'unix'],

      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
        },
      ],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-unused-vars': 'off',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: 'return',
          prev: '*',
        },
      ],

      'react-hooks/exhaustive-deps': 'off',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],

      'react/jsx-newline': [
        'error',
        {
          prevent: true,
        },
      ],

      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'sort-keys-fix/sort-keys-fix': 'error',

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: false,
            pascalCase: false,
            snakeCase: false,
          },

          ignore: ['next-i18next.config.js'],
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['**/*.json'],
  },
  {
    files: ['**/*.tsx'],
    ignores: ['**/*.stories.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          message:
            'No declares types en archivos .tsx, usa un archivo separado .ts',
          selector: 'TSTypeAliasDeclaration',
        },
        {
          message:
            'No declares interfaces en archivos .tsx, usa un archivo separado .ts',
          selector: 'TSInterfaceDeclaration',
        },
        {
          message:
            'No declares enums en archivos .tsx, usa un archivo separado .ts',
          selector: 'TSEnumDeclaration',
        },
      ],
    },
  },
]
