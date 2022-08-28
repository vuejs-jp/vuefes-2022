import { IEvent } from '~/types/events'
import {
  SHOW_EVENT_SPEAKER_PROFILE_OSS,
  SHOW_EVENT_SPEAKER_PROFILE_VUE,
  SHOW_EVENT_SPEAKER_PROFILE_PEEPHOLE,
} from '~/utils/feature.constants'

export const eventDescription =
  'Vue Fes Japan では、より Vue.js を楽しんでいただくための企画を多数ご用意しています。セッションの合間にぜひご参加ください。'

export const eventList: IEvent[] = [
  {
    title: 'OSS はじめのいっぽ',
    // TODO: ロゴが確定次第修正
    logoList: [],
    description:
      'Vue のコミュニティを通して OSS に関わろう！OSS をやったことがある人もやったことがない人も、先輩たちを参考にはじめのいっぽを踏み出そう！',
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_OSS,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
  {
    title: 'なるほど Vue コンポーネント',
    logoList: [
      {
        src: '/events/miyaocast.png',
        alt: 'miyaocastのロゴ',
        link: 'https://podcasts.apple.com/us/podcast/id1540114737',
      },
      {
        src: '/events/fm.jpeg',
        alt: 'お元気ですか.fmのロゴ',
        link: 'https://anchor.fm/ogenkidesuka-fm/episodes/fm-vol-01-e15tku0',
      },
    ],
    description:
      'miyaocast + お元気ですか.fm の Vue Fes 合同企画開催です！Vue でコンポーネントをつくるときにどんなことを考えているのか、エンジニア＆デザイナー目線で語ります。Vue3 で開発がどう変わったか、デザインシステム開発についてなど、ざっくばらんなテーマが聴けます！',
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_VUE,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
  {
    title: 'Peephole',
    // TODO: リンク先が確定次第修正
    logoList: [
      {
        src: '/events/peephole.png',
        alt: 'peepholeのロゴ',
      },
    ],
    description:
      '数々の素晴らしいセッションを楽しんだ後は、あのスピーカーが鋭意開発中のナニカをチラ見せ&#x1f440;する新企画、Peephole（ピープホール）をお楽しみください！もしかすると世界に向けて初公開の情報もあるかも……？',
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_PEEPHOLE,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
]

export const childcareDescription =
  '当日何らかの託児サービスを利用した方には、Vue Fes 運営で費用を補助いたします。'
export const childcareCostSupportConditions = [
  '当日利用したと分かる託児サービスの領収書を保管してください',
  '運営で補助費用の上限額は15,000円です',
  '補助費用は後日運営から口座振り込みします',
]
export const childcareLinkText = '託児サービスのお申し込みはこちら'
