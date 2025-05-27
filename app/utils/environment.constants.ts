export const isProd = process.env.NODE_ENV === 'production'

export const REDIRECT_URL = isProd ? 'https://vuefes.jp/2022' : 'http://localhost:3000'
