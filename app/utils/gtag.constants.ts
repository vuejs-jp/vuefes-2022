// GA4
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NUXT_GTAG_ID}');`

export const gtagList = () => {
  return [
    {
      hid: 'GAsrc',
      src: 'https://www.googletagmanager.com/gtag/js?id=' + process.env.NUXT_GTAG_ID,
    },
    { hid: 'GAcode', innerHTML: GAcode },
  ]
}
