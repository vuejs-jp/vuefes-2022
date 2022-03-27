module.exports = {
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
      boxShadow: {
        submit: '0px 10px 20px rgba(0, 0, 0, 0.1)',
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
      'ichimatsu-white':
        'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)',
      submit: 'linear-gradient(#42b893, #33A6B8)',
    },
    backgroundSize: {
      40: '40px 40px',
    },
    backgroundPosition: {
      'vertical-20': '0 0, 20px 20px',
    },
    screens: {
      md: '770px',
      lg: '980px',
      '3xl': '1920px',
    },
  },
}
