export function useAnimationParts() {
  const { gsap, Power2 } = useGsap()

  const PARTS_CREATE_TIME = 0.6
  const PARTS_FADE_TIME = 0.2

  // 図形の位置
  const transformPosition = (props) => {
    return `translate(${props.parts.x}, ${props.parts.y}) rotate(${props.parts.rotate})`
  }

  // 図形生成のアニメーション
  const createAnimation = (refs, attr) => {
    gsap.to(refs, {
      attr: { ...attr },
      ease: Power2.easeOut,
      duration: PARTS_CREATE_TIME,
    })
  }

  // 図形切り替えのアニメーション
  const fadeAnimation = (refs, attr) => {
    gsap.to(refs, {
      attr: { ...attr },
      ease: Power2.easeOut,
      duration: PARTS_FADE_TIME,
    })
  }

  return {
    transformPosition,
    createAnimation,
    fadeAnimation,
  }
}
