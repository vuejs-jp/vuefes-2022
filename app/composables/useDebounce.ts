export default function useDebounce(callback: Function, timeout: number = 0) {
  let threshold

  return (...args) => {
    clearTimeout(threshold)
    threshold = setTimeout(() => {
      callback.apply(this, args)
    }, timeout)
  }
}
