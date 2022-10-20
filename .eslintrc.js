module.exports = {
  parser: '@typescript-eslint/parser',
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the React version
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', './components/'],
          ['@lib', './lib/'],
          ['@api', './api/'],
          ['@util', './util/'],
          ['@styles', './styles/'],
          ['@typed', './typed/'],
          ['@hooks', './hooks/'],
          ['@public', './public/'],
          ['@constants', './constants/'],
          ['@state', './state/'],
          ['@page-components', './page-components/']
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
  },
  plugins: ['simple-import-sort']
}
