import { urlBasePath } from './constants'

export const preloadImages = () => [
  { rel: 'preload', as: 'image', type: 'image/png', href: `${urlBasePath}/img/wave_lg.png` },
  { rel: 'preload', as: 'image', type: 'image/png', href: `${urlBasePath}/img/wave_md.png` },
  { rel: 'preload', as: 'image', type: 'image/png', href: `${urlBasePath}/img/wave_sm.png` },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/github_logo.svg`,
  },
  { rel: 'preload', as: 'image', type: 'image/svg+xml', href: `${urlBasePath}/icon/note_logo.svg` },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/twitter_logo.svg`,
  },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/twitter_logo-invert.svg`,
  },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/vuefes_logo.svg`,
  },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/vuefes_logo-invert.svg`,
  },
  {
    rel: 'preload',
    as: 'image',
    type: 'image/svg+xml',
    href: `${urlBasePath}/icon/youtube_logo.svg`,
  },
]
