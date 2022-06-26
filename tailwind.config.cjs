/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: "class",
  theme: {
    screens: {
      'xs' : '350px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',

    },
      extend: {
        fontFamily: {
          'mont' : 'Montserrat',
          'bitter' : 'Bitter',
          'source' : 'Source Sans Pro',
          'brandon' : 'brandon-grotesque',
          'futura' : 'futura-pt',
          'open' : 'Open Sans',
        },
      },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
