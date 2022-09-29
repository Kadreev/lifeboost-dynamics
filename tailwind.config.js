const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./**/*.{liquid,json}', './{frontend,modules}/**/*.js'],
  theme: {
    fontFamily: {
      // 'body': ['Wigrum Web','WigrumWeb'],
      body: ['WigrumWeb'],
      WWebMedium: ['WigrumWebMedium'],
      ginger: ['F37GingerPro'],
      cabinSketch: ['Cabin Sketch', 'cursive'],
    },
    extend: {
      screens: {
        xs: '480px',
        'xs-max': { max: '480px' },
        'md-max': { max: '640px' },
      },
      fontSize: {
        10: ['0.625rem', '0.75rem'],
        sm: ['0.875rem', '1rem'],
        base: ['1rem', '1.25rem'],
        lg: ['1.125rem', '1.25rem'],
        xl: ['1.25rem', '1.5rem'],
        22: ['1.375rem', '1.5rem'],
        '2xl': ['1.5rem', '1.75rem'],
        26: ['1.625rem', '1.875rem'],
        28: ['1.75rem', '1.875rem'],
        32: ['2rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        40: ['2.5rem', '2.813rem'],
        '5xl': ['3rem', '3.25rem'],
        54: ['3.375rem', '3.5rem'],
        107: ['6.688rem', '6.688rem'],
        116: ['7.25rem', '7.5rem'],
        249: ['15.563rem', '15.563rem'],
        312: ['19.5rem', '19.5rem'],
      },
      colors: {
        green: {
          DEFAULT: '#505011',
          light: '#A9A93D',
          mid: '#33591f',
        },
        lime: colors.lime,
        amber: colors.amber,
        coffee: '#261413',
        lifeboost: {
          red: {
            DEFAULT: '#F1574B',
            light: '#FDE8E7',
            lighter: '#f5f1ed',
          },
          c4: '#C4C4C4',
          coff: {
            DEFAULT: '#C19862',
            lighter: '#c2afa5',
          },
          brown: '#ba874e',
          blue: {
            DEFAULT: '#1E2E61',
            lightb: '#F1F8FC',
            mid: '#2784C1',
            dark: '#2E394D',
            light: '#E1EAF4',
            llight: '#ECEFF4',
            gray: '#F2F2F2',
          },
          yellow: {
            DEFAULT: '#EDD596',
            light: '#F5F1ED',
            dark: '#c39c30',
          },
          green: {
            DEFAULT: '#505011',
            dark: '#37736c',
            light: '#A9A93D',
            mid: '#33591f',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addVariant }) => {
      // "no-js" variant to be used for progressively-enhanced functionality
      addVariant('no-js', 'html.no-js &');
      addVariant('cart-loading', 'shopify-cart[data-loading="true"] &');
    }),
  ],
  safelist: [
    'grecaptcha-badge',
    'shopify-challenge__container',
    'shopify-challenge__message',
    'shopify-challenge__button',
    'shopify-payment-button__button',
    'shopify-payment-button__button--unbranded',
    'shopify-policy__container',
    'shopify-policy__title',
    'shopify-policy__body',
  ],
};
