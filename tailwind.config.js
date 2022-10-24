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
        sponsor: '#F5F6F7',
        // アニメーションで使用する色
        'anime-typescript-blue': '#4374AA',
        'anime-asagi': '#4D9EAA',
        'anime-vue-green': '#5AB088',
        'anime-hiwamoegi': '#93AF5E',
        'anime-sangosyou': '#D47373',
        'anime-tohoh': '#E7C350',
        'timetable-timeslot': 'rgba(52, 73, 94, 0.7);',
        'track-a': '#90B44B',
        'track-b': '#F17C67',
        'track-c': '#3178C6',
      },
      spacing: {
        14: '50px',
        35: '140px',
        90: '360px',
        153: '610px',
        7.5: '1.875rem', // 30px
        12.5: '3.125rem', // 50px
        15: '3.75rem', // 60px
        22.5: '5.625rem', // 90px
      },
      width: {
        37.5: '9.375rem', // 150px
        50: '12.5rem', // 200px
        55: '13.75rem', // 220px
        57.5: '14.375rem', // 230px
        62.5: '15.625rem', // 250px
        85: '21.25rem', // 340px
        107.5: '26.875rem', // 430px
        120: '30rem', // 480px
        170: '42rem',
        192: '54rem',
      },
      height: {
        13.5: '3.375rem', // 54px
        15.75: '3.9375rem', // 63px
        18: '4.5rem', // 72px
        18.5: '4.625rem', // 74px
        27: '6.75rem', // 108px
        32.5: '8.125rem', // 130px
        37.5: '9.375rem', // 150px
        45: '11.25rem', // 180px
      },
      minHeight: {
        10: '2.5rem', // 40px
        20: '5rem', // 80px
      },
      maxWidth: {
        400: '25rem', // 400px
        480: '30rem', // 480px
        700: '43.75rem', // 700px
        720: '45rem', // 720px
        900: '56.25rem', // 900px
        940: '58.75rem', // 940px
        1176: '73.5rem', // 1176px
        1180: '73.75rem', // 1180px
        1190: '74.375rem', // 1190px
        1260: '78.75rem', // 1260px
        1920: '120rem', // 1920px
      },
      boxShadow: {
        submit: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        'submit-hover': '0 0 0 rgba(#000000, 0.2)',
        card: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0px 10px 20px rgba(#000000, 0.2)',
      },
      borderRadius: {
        '4xl': '100px',
      },
      fontFamily: {
        'kokuryu-heading': ['kokuryu', 'sans-serif'],
        'yu-gothic': ['YuGothic', 'sans-serif'],
      },
      fontSize: {
        11: '0.6875rem', // 11px
        13: '0.8125rem', // 13px
        15: '0.9375rem', // 15px
        22: '1.375rem', // 22px
        23: '1.4375rem', // 23px
        25: '1.5625rem', // 25px
        35: '2.1875rem', // 35px
        40: '2.5rem', // 40px
        50: '3.125rem', // 50px
        65: '4.0625rem', // 65px
        80: '5rem', // 80px
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      gridTemplateColumns: {
        'md-timetable': '150px repeat(3, minmax(0, 1fr))',
        timetable: '260px repeat(3, minmax(0, 1fr))',
      },
    },
    backgroundImage: {
      'ichimatsu-vue-blue':
        'linear-gradient(45deg, #35495e 25%, transparent 25%, transparent 75%, #35495e 75%), linear-gradient(45deg, #35495e 25%, transparent 25%, transparent 75%, #35495e 75%)',
      'ichimatsu-white':
        'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)',
      'ichimatsu-tohoh':
        'linear-gradient(45deg, #FFC408 25%, transparent 25%, transparent 75%, #FFC408 75%), linear-gradient(45deg, #FFC408 25%, transparent 25%, transparent 75%, #FFC408 75%)',
      'ichimatsu-hiwamoegi':
        'linear-gradient(45deg, #90b44b 25%, transparent 25%, transparent 75%, #90b44b 75%), linear-gradient(45deg, #90b44b 25%, transparent 25%, transparent 75%, #90b44b 75%)',
      'ichimatsu-silver-tree':
        'linear-gradient(45deg, #5ab088 25%, transparent 25%, transparent 75%, #5ab088 75%), linear-gradient(45deg, #5ab088 25%, transparent 25%, transparent 75%, #5ab088 75%)',
      'ichimatsu-sangosyu':
        'linear-gradient(45deg, #F17C67 25%, transparent 25%, transparent 75%, #F17C67 75%), linear-gradient(45deg, #F17C67 25%, transparent 25%, transparent 75%, #F17C67 75%)',
      'ichimatsu-timetable':
        'linear-gradient(45deg, #42B983 25%, transparent 25%, transparent 75%, #42B983 75%), linear-gradient(45deg, #42B983 25%, transparent 25%, transparent 75%, #42B983 75%)',
      'ichimatsu-asagi':
        'linear-gradient(45deg, #33A6B8 25%, transparent 25%, transparent 75%, #33A6B8 75%), linear-gradient(45deg, #33A6B8 25%, transparent 25%, transparent 75%, #33A6B8 75%)',
      'ichimatsu-typescript-blue':
        'linear-gradient(45deg, #4374AA 25%, transparent 25%, transparent 75%, #4374AA 75%), linear-gradient(45deg, #4374AA 25%, transparent 25%, transparent 75%, #4374AA 75%)',
      'ichimatsu-white-green':
        'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, #5ab088 25%, #5ab088 75%, #fff 75%)',
      sponsors: 'linear-gradient(180deg, #90b44b 0%, #5ab088 100%)',
      events: 'linear-gradient(180deg, #4374AA 0%, rgba(255, 255, 255, 0) 100%)',
      store: 'linear-gradient(180deg, #33A6B8 0%, rgba(255, 255, 255, 0) 100%)',
      staffs: 'linear-gradient(180deg, #F17C67 0%, rgba(196, 196, 196, 0) 100%)',
      ticket: 'linear-gradient(180deg, #FFC408 0%, rgba(255, 255, 255, 0) 100%)',
      speakers: 'linear-gradient(90deg, rgb(255 255 255 / 100%) 0%, rgb(255 255 255 / 0%) 100%)',
      nav: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
      submit: 'linear-gradient(91.03deg, #33A6B8 0%, #42B983 100.01%)',
      timetable: 'linear-gradient(180deg, #42B983 0%, rgba(255, 255, 255, 0) 100%)',
      'submit-border': 'linear-gradient(90deg, #42b983 0%, #33a6b8 100%)',
    },
    backgroundSize: {
      cover: 'cover',
      40: '40px 40px',
      80: '80px 80px',
    },
    backgroundPosition: {
      center: 'center',
      'vertical-20': '0 0, 20px 20px',
      'vertical-40': '0 0, 40px 40px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      circle: 'circle',
    },
    screens: {
      md: '771px',
      lg: '981px',
      xl: '1200px',
      xxl: '1320px',
      '3xl': '1921px',
    },
  },

  content: ['./app/**/*.vue'],
}
