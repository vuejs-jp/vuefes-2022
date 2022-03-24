import { conferenceTitle } from './constants'

export const generalOg = (title?: string, description?: string, url?: string, image?: string) => [
  {
    hid: 'description',
    name: 'description',
    content: description
      ? description
      : '2022年10月16日（日）に開催される日本最大級の Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
  },
  {
    hid: 'og:site_name',
    name: 'og:site_name',
    content: title ? title : conferenceTitle,
  },
  {
    hid: 'og:type',
    name: 'og:type',
    content: 'website',
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: description
      ? description
      : '2022年10月16日（日）に開催される日本最大級の Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
  },
  {
    hid: 'og:title',
    name: 'og:title',
    content: title ? title : conferenceTitle,
  },
  {
    hid: 'og:url',
    name: 'og:url',
    content: url ? url : 'https://webneko.dev/',
  },
  // {
  //   hid: 'og:image',
  //   name: 'og:image',
  //   content: '',
  // },
]

export const twitterOg = (title?: string, description?: string, image?: string) => [
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: description
      ? description
      : '2022年10月16日（日）に開催される日本最大級の Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
  },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: title ? title : conferenceTitle,
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image', // ex: summary, summary_large_image
  },
  {
    hid: 'twitter:site',
    name: 'twitter:site',
    content: '@vuefes',
  },
  {
    hid: 'twitter:creator',
    name: 'twitter:creator',
    content: '@vuefes',
  },
  {
    hid: 'twitter:site',
    name: 'twitter:site',
    content: '@vuefes',
  },
  // {
  //   hid: 'twitter:image',
  //   name: 'twitter:image',
  //   content: '',
  // },
]
