export default {
  theme: {
    extend: {
      colors: {
        'vue-blue': '#35495E',
        'vue-green': '#42b893',
        'typescript-blue': '#3178C6',
        asagi: '#33A6B8',
        sangosyu: '#F17C67',
        tohoh: '#FFC408',
        hiwamoegi: '#90B44B',
        tsuchi: '#E5E5E5',
      },
      spacing: {
        14: '50px',
        35: '140px',
        90: '360px',
        153: '610px',
      },
      width: {
        170: '42rem',
        192: '54rem',
      },
      borderRadius: {
        '4xl': '100px',
      },
      fontFamily: {
        'kokuryu-heading': ['kokuryu', 'sans-serif'],
      },
    },
    backgroundImage: {
      'ichimatsu-vue-blue':
        'linear-gradient(45deg, #35495e 25%, transparent 25%, transparent 75%, #35495e 75%), linear-gradient(45deg, #35495e 25%, transparent 25%, transparent 75%, #35495e 75%)',
      'ichimatsu-tsuchi':
        'linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%), linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%)',
      submit: 'linear-gradient(#42b893, #33A6B8)',
    },
    backgroundSize: {
      40: '40px 40px',
    },
    backgroundPosition: {
      'vertical-20': '0 0, 20px 20px',
    },
    screens: {
      md: { max: '770px' },
      lg: { max: '980px' },
      '3xl': { max: '1920px' },
    },
  },
}
