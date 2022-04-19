import { gsap, Power2 } from 'gsap'

export function useAnimationParts() {
  const PARTS_CREATE_TIME = 0.6
  const PARTS_FADE_TIME = 0.2

  // 図形の位置
  const transform = (props) => {
    return `translate(${props.parts.x}, ${props.parts.y}) rotate(${props.parts.rotate})`
  }

  // 図形生成のアニメーション
  const createAnimation = (refs, attr) => {
    gsap.to(refs, PARTS_CREATE_TIME, {
      attr: { ...attr },
      ease: Power2.easeOut,
    })
  }

  // 図形切り替えのアニメーション
  const fadeAnimation = (refs, attr) => {
    gsap.to(refs, PARTS_FADE_TIME, {
      attr: { ...attr },
      ease: Power2.easeOut,
    })
  }

  return {
    transform,
    createAnimation,
    fadeAnimation,
  }
}
