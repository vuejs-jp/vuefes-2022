export const initHeadingFont = () => {
  const $config = useRuntimeConfig()
  let config = {
      kitId: $config.NUXT_KOKURYU_FONT_ID,
      scriptTimeout: 3000,
      async: true,
    },
    h = document.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
    }, config.scriptTimeout),
    tk = document.createElement('script'),
    f = false,
    s = document.getElementsByTagName('script')[0],
    a
  h.className += ' wf-loading'
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
  tk.async = true
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState
    if (f || (a && a != 'complete' && a != 'loaded')) return
    f = true
    clearTimeout(t)
    try {
      Typekit.load(config)
    } catch (e) {}
  }
  s.parentNode.insertBefore(tk, s)
}
