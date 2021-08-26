const screensConfig = {
  sm: '375px',
  md: '768px',
  mdp: '900px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1900px',
  '4xl': '2500px'
}

/**
 * Container Plugin - modifies Tailwind’s default container.
 */
const containerBase = {
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  '@screen md': {
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  '@screen xl': {
    paddingLeft: '80px',
    paddingRight: '80px'
  },
  '@screen 2xl': {
    paddingLeft: 0,
    paddingRight: 0
  }
}

const containerStyles = ({ addComponents }) => {
  addComponents({
    '.container': {
      ...containerBase,
      '@screen xl': {
        maxWidth: screensConfig['xl']
      }
    },
    '.container-fluid': {
      ...containerBase,
      '@screen lg': {
        paddingLeft: '45px',
        paddingRight: '45px'
      }
    }
  })
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'ui-sans-serif'],
      montserrat: ['Montserrat', 'ui-sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [containerStyles]
}
