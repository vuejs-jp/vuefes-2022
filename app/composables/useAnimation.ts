export default () => {
  interface IState {
    patternIndex: number
    t: number
    tMax: number
    isVisible: boolean
  }

  const state = reactive<IState>({ patternIndex: 0, t: 0, tMax: 27, isVisible: false })

  const pattern = [
    ['-⧄|⧅⧄⧅⮽⧄o', 'o⮽⧄◢-⧄⧅◥|', '⧅◣⧅⧄⧅|⧄⧅⧄'],
    ['1⧄|⧅o⧅⮽⧄◥', 'o⮽⧄◢⧄-⧅2|', '◥◣o⧄⧅|⧄⧅⧄'],
    ['1⧄|3◤⧅o⧄◥', '-⮽■◣⧄4⧅2|', '⧅⧅o⧄⧅◤⧄■⧄'],
    ['◣⧄⧅3◤⧅o⧄6', '-⮽1⧅⧄4⧅|⧄', '⧅◣o⧄2-⧄⧄⧄'],
    ['5⧄◣3◤⧅o⧄6', '-⮽1⧅⧄4⮽|⧄', '⧄◣o⧅2-⧄⧄⧄'],
    ['o⧄⧅3⧄⧅o⧄6', '-⮽1⧅⧄4⧄|⧄', '⧄◣o⧄2⧅⧄◥⮽'],
    ['3⧄4⧅⧄⧅⮽5o', 'o⮽⧄◤2⧄6◥|', '⧅◢⧅1⧅⧅⧄-⧄'],
  ]

  onMounted(() => {
    setInterval(() => {
      if (state.t < state.tMax) {
        state.t++
      }
    }, 90)

    setInterval(() => {
      state.patternIndex = (state.patternIndex + 1) % pattern.length
    }, 2000)
  })

  const itemsFlatten = () => {
    // if (!state.isVisible) {
    //   return []
    // }
    return Array.prototype.concat.apply([], createItems())
  }

  const createItems = () => {
    return pattern[state.patternIndex].map((line, row) =>
      Array.from(line)
        .slice(0, state.t)
        .map((p, col) => {
          let type = 'head-circle'
          let rotate = 0
          let src = ''
          switch (p) {
            case '⮽':
              type = 'head-cross'
              break
            case '⧅':
              type = 'head-slash'
              rotate = 90
              break
            case '⧄':
              type = 'head-slash'
              break
            case '■':
              type = 'head-square'
              break
            case '|':
              type = 'head-horizontal'
              rotate = 90
              break
            case 'o':
              type = 'head-circle'
              break
            case '-':
              type = 'head-horizontal'
              break
            case '◢':
              type = 'head-triangle'
              break
            case '◥':
              type = 'head-triangle'
              rotate = 270
              break
            case '◣':
              type = 'head-triangle'
              rotate = 90
              break
            case '◤':
              type = 'head-triangle'
              rotate = 180
              break
            case '1':
              type = 'head-photo'
              src = 'image01.png'
              break
            case '2':
              type = 'head-photo'
              src = 'image02.png'
              break
            case '3':
              type = 'head-photo'
              src = 'image03.png'
              break
            case '4':
              type = 'head-photo'
              src = 'image04.png'
              break
            case '5':
              type = 'head-photo'
              src = 'image05.png'
              break
            case '6':
              type = 'head-photo'
              src = 'image06.png'
              break
          }
          return {
            type,
            // x: (gap + grid) / 2 + col * (gap + grid),
            // y: (gap + grid) / 2 + row * (gap + grid),
            rotate,
            src,
            key: `${row}-${col}-${type}-${rotate}`,
          }
        }),
    )
  }

  // init
  // itemsFlatten()

  return { state, itemsFlatten }
}
