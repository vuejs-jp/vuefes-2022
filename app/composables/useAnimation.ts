export function useAnimation() {
  // types
  type TWindowType = 'sm' | 'md' | 'lg'
  type TParts =
    | 'head-circle'
    | 'head-horizontal'
    | 'head-triangle'
    | 'head-cross'
    | 'head-photo'
    | 'head-slash'

  interface IParts {
    type: TParts
    x: number
    y: number
    rotate: number
    src: string
    key: string
  }

  // state
  interface IState {
    patternIndex: number
    t: number
    tMax: number
    isVisible: boolean
    windowMode: TWindowType
  }

  const state = reactive<IState>({
    patternIndex: 0,
    t: 0,
    tMax: 27,
    isVisible: false,
    windowMode: 'lg',
  })

  // 定数
  const GAP: number = 12
  const GRID: number = 120

  const PATTERN: string[][] = [
    ['-⧄|⧅⧄⧅⮽⧄o', 'o⮽⧄◢-⧄⧅◥|', '⧅◣⧅⧄⧅|⧄⧅⧄'],
    ['1⧄|⧅o⧅⮽⧄◥', 'o⮽⧄◢⧄-⧅2|', '◥◣o⧄⧅|⧄⧅⧄'],
    ['1⧄|3◤⧅o⧄◥', '-⮽◢◣⧄4⧅2|', '⧅⧅o⧄⧅◤⧄◢⧄'],
    ['◣⧄⧅3◤⧅o⧄6', '-⮽1⧅⧄4⧅|⧄', '⧅◣o⧄2-⧄⧄⧄'],
    ['5⧄◣3◤⧅o⧄6', '-⮽1⧅⧄4⮽|⧄', '⧄◣o⧅2-⧄⧄⧄'],
    ['o⧄⧅3⧄⧅o⧄6', '-⮽1⧅⧄4⧄|⧄', '⧄◣o⧄2⧅⧄◥⮽'],
    ['3⧄4⧅⧄⧅⮽5o', 'o⮽⧄◤2⧄6◥|', '⧅◢⧅1⧅⧅⧄-⧄'],
  ]

  // state の画面サイズを更新
  const setWindowMode = () => {
    const windowSize = window.innerWidth
    if (windowSize <= 770) {
      state.windowMode = 'sm'
    } else if (770 < windowSize && windowSize <= 980) {
      state.windowMode = 'md'
    } else {
      state.windowMode = 'lg'
    }
  }

  const createItems = (): IParts[][] => {
    return PATTERN[state.patternIndex].map((line, row) =>
      Array.from(line)
        .slice(0, state.t)
        .map((p, col): IParts => {
          const parts: IParts = {
            type: 'head-circle',
            x: (GAP + GRID) / 2 + col * (GAP + GRID),
            y: (GAP + GRID) / 2 + row * (GAP + GRID),
            rotate: 0,
            src: '',
            key: `${row}-${col}`,
          }
          switch (p) {
          case '⮽':
            parts.type = 'head-cross'
            break
          case '⧅':
            parts.type = 'head-slash'
            parts.rotate = 90
            break
          case '⧄':
            parts.type = 'head-slash'
            break
          case '|':
            parts.type = 'head-horizontal'
            parts.rotate = 90
            break
          case 'o':
            parts.type = 'head-circle'
            break
          case '-':
            parts.type = 'head-horizontal'
            break
          case '◢':
            parts.type = 'head-triangle'
            break
          case '◥':
            parts.type = 'head-triangle'
            parts.rotate = 270
            break
          case '◣':
            parts.type = 'head-triangle'
            parts.rotate = 90
            break
          case '◤':
            parts.type = 'head-triangle'
            parts.rotate = 180
            break
          case '1':
            parts.type = 'head-photo'
            parts.src = 'image01.png'
            break
          case '2':
            parts.type = 'head-photo'
            parts.src = 'image02.png'
            break
          case '3':
            parts.type = 'head-photo'
            parts.src = 'image03.png'
            break
          case '4':
            parts.type = 'head-photo'
            parts.src = 'image04.png'
            break
          case '5':
            parts.type = 'head-photo'
            parts.src = 'image05.png'
            break
          case '6':
            parts.type = 'head-photo'
            parts.src = 'image06.png'
            break
          }
          return parts
        }),
    )
  }

  const itemsFlatten = () => {
    // if (!state.isVisible) {
    //   return []
    // }
    return Array.prototype.concat.apply([], createItems())
  }

  // Timer
  onMounted(() => {
    setInterval(() => {
      if (state.t < state.tMax) {
        state.t++
      }
    }, 90)

    setInterval(() => {
      state.patternIndex = (state.patternIndex + 1) % PATTERN.length
    }, 2000)
  })

  // init
  onMounted(() => {
    setWindowMode()
  })

  return { state, itemsFlatten }
}
