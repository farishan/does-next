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
    },
    '.full-image': {
      img: {
        width: '100%'
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
  paddingLeft: '24px',
  paddingRight: '24px',
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
        // maxWidth: screensConfig['xl']
        maxWidth: '1200px'
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

const scrollBarStyles = ({ addComponents }) => {
  addComponents({
    '.no-scrollbar': {
      /* Hide scrollbar for IE, Edge and Firefox */
      '-ms-overflow-style': 'none' /* IE and Edge */,
      'scrollbar-width': 'none' /* Firefox */,

      /* Hide scrollbar for Chrome, Safari and Opera */
      '&::-webkit-scrollbar': {
        display: 'none'
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
      typography: {
        DEFAULT: {
          css: {
            '*, strong, h1, h2, h3, h4, h5, h6, blockquote, a, code, pre, ol li:before':
              {
                color: '#fff'
              }
          }
        }
      },
      screens: screensConfig,
      height: {
        18: '4.5rem' // 72px
      },
      colors: {
        dark: '#222222',
        primary: '#D2292D',
        'gray-333': '#333333',
        'gray-666': '#666666',
        'gray-888': '#888888',
        'gray-bbb': '#BBBBBB'
      },
      fontSize: {
        xl: ['1.25rem', '2.5rem'],
        '4xlp': [
          '2.5rem', // 40px
          '3.75rem' // 60px
        ]
      },
      fontFamily: {
        accent: ['Poppins', 'ui-sans-serif'],
        body: ['Montserrat', 'ui-sans-serif', 'sans-serif']
      },
      minHeight: {
        '50vh': '50vh',
        '70vh': '70vh',
        '90vh': '90vh'
      },
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(.63,0,.52,.77)'
      },
      zIndex: {
        header: '999',
        menu: '998'
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out forwards',
        'fade-in-delayed': 'fadeIn 0.1s ease-in-out 0.2s forwards',
        'fade-out': 'fadeOut 0.2s ease-in-out forwards',
        'fade-out-delayed': 'fadeOut 0.1s ease-in-out 0.2s forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    globalStyles,
    containerStyles,
    scrollBarStyles
  ]
}
