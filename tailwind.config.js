/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the theme.
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */
const globalStyles = ({ addBase, config }) => {
  addBase({
    html: {
      fontFamily: config('theme.fontFamily.body')
    },
    body: {
      backgroundColor: config('theme.colors.black'),
      color: config('theme.colors.white')
    },
    a: {
      transition: 'color 0.2s',
      color: config('theme.colors.dark'),
      '&:hover': {
        color: config('theme.colors.primary')
      }
    }
  })
}

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
    extend: {
      colors: {
        dark: '#222222',
        primary: '#D2292D'
      }
    },
    fontFamily: {
      body: ['Poppins', 'ui-sans-serif'],
      accent: ['Montserrat', 'ui-sans-serif', 'sans-serif']
    },
    minHeight: {
      '50vh': '50vh',
      '70vh': '70vh',
      '90vh': '90vh'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [globalStyles, containerStyles]
}
