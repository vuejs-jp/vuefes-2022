/**
 * 画面サイズでトップ画像の読み込み先を切り替える
 */
export const getTopImage = () => {
  const windowSize = window.innerWidth
  if (windowSize <= 770) {
    return '/img/kv_solid_sm.png'
  } else if (770 < windowSize && windowSize <= 980) {
    return '/img/kv_solid_md.png'
  } else {
    return '/img/kv_solid_lg.png'
  }
}

/**
 * 画面サイズで波画像の読み込み先を切り替える
 */
export const getWaveImage = () => {
  const windowSize = window.innerWidth
  if (windowSize <= 770) {
    return '/img/wave_sm.png'
  } else if (770 < windowSize && windowSize <= 980) {
    return '/img/wave_md.png'
  } else {
    return '/img/wave_lg.png'
  }
}
