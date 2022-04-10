module.exports = {
  mode: 'jit',
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

        // アニメーションで使用する色
        'anime-typescript-blue': '#4374AA',
        'anime-asagi': '#4D9EAA',
        'anime-vue-green': '#5AB088',
        'anime-hiwamoegi': '#93AF5E',
        'anime-sangosyou': '#D47373',
        'anime-tohoh': '#E7C350',
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
        'submit-hover': '0 0 0 rgba(#000000, 0.2)',
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
      submit: 'linear-gradient(91.03deg, #33A6B8 0%, #42B983 100.01%)',
      'submit-border': 'linear-gradient(90deg, #42b983 0%, #33a6b8 100%)',
    },
    backgroundSize: {
      40: '40px 40px',
      80: '80px 80px',
    },
    backgroundPosition: {
      'vertical-20': '0 0, 20px 20px',
      'vertical-40': '0 0, 40px 40px',
    },
    screens: {
      md: '771px',
      lg: '981px',
      '3xl': '1921px',
    },
  },

  content: ['./app/**/*.vue'],
}
