import { conferenceTitle, ogDescription, linkUrl, vuefesTwitterID } from './constants'

export const generalOg = (title?: string, description?: string, url?: string, image?: string) => [
  {
    hid: 'description',
    name: 'description',
    content: description ? description : ogDescription,
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
    content: description ? description : ogDescription,
  },
  {
    hid: 'og:title',
    name: 'og:title',
    content: title ? title : conferenceTitle,
  },
  {
    hid: 'og:url',
    name: 'og:url',
    content: url ? url : linkUrl,
  },
  {
    hid: 'og:image',
    name: 'og:image',
    content: `${linkUrl}og/og-image.png`,
  },
]

export const twitterOg = (title?: string, description?: string, image?: string) => [
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: description ? description : ogDescription,
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
    content: vuefesTwitterID,
  },
  {
    hid: 'twitter:creator',
    name: 'twitter:creator',
    content: vuefesTwitterID,
  },
  {
    hid: 'twitter:site',
    name: 'twitter:site',
    content: vuefesTwitterID,
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: `${linkUrl}og/og-image.png`,
  },
]
