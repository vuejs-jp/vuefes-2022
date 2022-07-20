
import Image01 from '!url-loader!~/assets/img/animation/image05.png'
import { ISponsor, Rank } from '../types/sponsors'

export const sponsorSupportLevelTitle = (rank: Rank) => {
  switch (rank) {
  case 'platinum':
    return 'Platinum'
  case 'gold':
    return 'Gold'
  case 'silver':
    return 'Silver'
  case 'bronze':
    return 'Bronze'
  case 'media':
    return '配信'
  default:
    const _missing: never = rank
    return ''
  }
}



export const sponsors: ISponsor[] = [
  {
    id: '1234',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
    bio: '12円芸団にどー文川辺べぐ秋掲ス船真掛ー点大べぱ的25王74各2亭そぱわル。量ユツワヘ六31月ぽそや態時ぐぎ字込ヘレリ導治サス却季スレシ東視シヌウコ棋属で転流ヨイリ会同をぴてリ扱六ゃだ置圧キノ断候職表よのね。芸ク味込セニ殊歴マ図権びぞあも問浜されてべ並宿紀そずさゃ品身ロ見器よ言高メヤ時間結ほ口媛せげはふ圏気ネミエ読夜きえに間的べぶづ彦刊エヱオ城囲刊ヘタ転単純役ひへ。'
  },
  {
    id: '2345',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
    bio: '12円芸団にどー文川辺べぐ秋掲ス船真掛ー点大べぱ的25王74各2亭そぱわル。量ユツワヘ六31月ぽそや態時ぐぎ字込ヘレリ導治サス却季スレシ東視シヌウコ棋属で転流ヨイリ会同をぴてリ扱六ゃだ置圧キノ断候職表よのね。芸ク味込セニ殊歴マ図権びぞあも問浜されてべ並宿紀そずさゃ品身ロ見器よ言高メヤ時間結ほ口媛せげはふ圏気ネミエ読夜きえに間的べぶづ彦刊エヱオ城囲刊ヘタ転単純役ひへ。'
  },
  {
    id: '12345634',
    name_jp: 'Sponsor_3',
    name_jp_kana: 'スポンサー_3',
    name_en: 'Sponsor_3',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
    bio: '12円芸団にどー文川辺べぐ秋掲ス船真掛ー点大べぱ的25王74各2亭そぱわル。量ユツワヘ六31月ぽそや態時ぐぎ字込ヘレリ導治サス却季スレシ東視シヌウコ棋属で転流ヨイリ会同をぴてリ扱六ゃだ置圧キノ断候職表よのね。芸ク味込セニ殊歴マ図権びぞあも問浜されてべ並宿紀そずさゃ品身ロ見器よ言高メヤ時間結ほ口媛せげはふ圏気ネミエ読夜きえに間的べぶづ彦刊エヱオ城囲刊ヘタ転単純役ひへ。'
  },

  {
    id: '1234',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '2345',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '12345634',
    name_jp: 'Sponsor_3',
    name_jp_kana: 'スポンサー_3',
    name_en: 'Sponsor_3',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '12345123',
    name_jp: 'Sponsor_4',
    name_jp_kana: 'スポンサー_4',
    name_en: 'Sponsor_4',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '123456789',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: 'asdfasdf',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: 'asdfasdfqwer',
    name_jp: 'Sponsor_3',
    name_jp_kana: 'スポンサー_3',
    name_en: 'Sponsor_3',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: 'asdfzxcv',
    name_jp: 'Sponsor_4',
    name_jp_kana: 'スポンサー_4',
    name_en: 'Sponsor_4',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  }
]