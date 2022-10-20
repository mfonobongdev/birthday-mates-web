/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        main: ['Epilogue', 'sans-serif']
      },
      colors: {
        'logo-purple': '#9E07C0',
        'app-purple': '#5F04BA',
        'app-red': '#FF0606'
      },
      fontSize: {
        Logo: ['1.563rem', { lineHeight: '1.579rem' }],
        LargeTitle: ['1.332rem', { lineHeight: '1.365rem' }],
        TitleOne: ['1.063rem', { lineHeight: '1.089rem' }],
        Subhead: ['0.746rem', { lineHeight: '0.764rem' }],
        FootNote: ['0.625rem', { lineHeight: '0.625rem' }],
        Caption: ['0.469rem', { lineHeight: '0.563rem' }],
        Button: ['0.852rem', { lineHeight: '0.875rem' }],
        Input: ['0.693rem', { lineHeight: '0.71rem' }],
        Body: ['0.75rem', { lineHeight: '0.769rem' }]
      }
    }
  },
  plugins: []
}
