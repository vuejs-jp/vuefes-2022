export type Rank =
  | 'platinum'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'specialMedia'
  | 'media'
  | 'broadcaster'

export interface ISponsor {
  id: string
  name_jp: string
  name_jp_kana: string
  name_en: string
  bio?: string
  twitter: string
  facebook: string
  image: string
  corporate_url: string
  rank: Rank
  order: number
}
