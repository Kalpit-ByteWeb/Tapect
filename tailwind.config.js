/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#652DBF",
        secondary:"#010E21",
        border_color:"#E5E5E5",
        body:"#464646",
      },
      padding:{
        100: '6.25rem',
        88: '5.5rem',
        120 : '7.5rem'
      },
      margin:{
        88: '5.5rem'
      },
      boxShadow:{
        'featurecardsection': '0px 0px 16px 0px #0000000A'
      },
      space:{
        88 : '5.5rem',
        120 : '7.5rem'
      }
    },
    container:{
      screens: {
        DEFAULT: '1220px', // Set default container size to 1440px
      },
    },
    fontFamily: {
      primary: ['lexend', 'serif'], // Heading font
      secondary: ['Manrope', 'sans-serif'], // Body font
    },
    borderRadius:{
      DEFAULT:'0.5rem',
      15: '0.938rem',
      30:'1.875rem',
      20: '1.25rem',
      48: '3rem',
      full:'100%',
    },
    fontSize: {
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      TitleHeading: '2.5rem',
      BannerTitle: '3.75rem',
      60: '3.75rem',
    },
    lineHeight:{
      85: '5.313rem',
      30: '1.875rem',
      40: '2.5rem',
      24: '1.5rem',
      56: '3.5rem',
    },
    
  },
  plugins: [],
}

