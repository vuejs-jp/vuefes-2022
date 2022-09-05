export interface ScrollLocation {
  x: number
  y: number
}
export default function (callback: (scrollLocation: ScrollLocation) => void) {
  // TODO: consider debounce?
  const handler = (_event: Event) => {
    callback({
      x: window.scrollX,
      y: window.scrollY,
    })
  }
  const mount = () => {
    window.addEventListener('scroll', handler)
    handler(undefined)
  }
  const unmount = () => {
    window.removeEventListener('scroll', handler)
  }

  return {
    mount,
    unmount,
  }
}
