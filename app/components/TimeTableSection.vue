<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'

import TrackLabel from '~/components/timetable/TrackLabel.vue'
function trackClassByIndex(index:number, isSponsorEvent: boolean) {
  switch (index) {
  case 0:
    return isSponsorEvent ? 'border border-track-a text-track-a items-start sm:items-center' : 'bg-sponsor/[.03] border-t-2 border-track-a'
  case 1:
    return isSponsorEvent ?  'border border-track-b text-track-b items-start sm:items-center' : 'bg-sponsor/[.03] border-t-2 border-track-b'
  case 2:
    return isSponsorEvent ?  'border border-track-c text-track-c items-start sm:items-center' : 'bg-sponsor/[.03] border-t-2 border-track-c'
    
  default:
    break
  }
}
const timeslots = [
  {
    time: '09:30 - 10:00',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: '会場',
      },
    ],
  },
  {
    time: '10:00 - 10:10',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: 'オープニングムービー・挨拶｜Kazupon',
      },
    ],
  },
  {
    time: '10:10 - 11:00',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: 'キーノート｜Evan You',
      },
    ],
  },
  {
    time: '11:00 - 11:20',
    isAllTrackEvent: false,
    isSponsorEvent: true,
    events: [
      {
        title: 'プラチナスポンサー#A',
        subTitle: 'メドピア',
      },
      {
        title: 'プラチナスポンサー#B',
        subTitle: 'FUTURE',
      },
      {
        title: 'プラチナスポンサー#C',
        subTitle: 'クラウドサイン',
      },
    ],
  },
  {
    time: '11:20 - 12:00',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: 'Evan Youに聞こう',
      }
    ],
  },
  {
    time: '12:00 - 12:30',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: 'ランチタイム',
      }
    ],
  },
  {
    time: '12:30 - 12:40',
    isAllTrackEvent: false,
    isSponsorEvent: true,
    events: [
      {
        title: 'ゴールドスポンサー#A 1',
        subTitle: 'ヘイ株式会社',
      },
      {
        title: 'ゴールドスポンサー#B 1',
        subTitle: 'LINE株式会社',
      },
      {
        title: 'ゴールドスポンサー#C 1',
        subTitle: '株式会社イエソド',
      },
    ],
  },
  {
    time: '12:45 - 12:55',
    isAllTrackEvent: false,
    isSponsorEvent: true,
    events: [
      {
        title: 'ゴールドスポンサー#A 2',
        subTitle: 'グレープシティ株式会社',
      },
      {
        title: 'ゴールドスポンサー#B 2',
        subTitle: '株式会社iCARE',
      },
      {
        title: 'ゴールドスポンサー#C 2',
        subTitle: 'BASE株式会社',
      },
    ],
  },
  {
    time: '13:00 - 13:30',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    events: [
      {
        title: 'ランチタイム',
      }
    ],
  },
  {
    time: '13:30 - 13:50',
    isAllTrackEvent: false,
    isSponsorEvent: false,
    events: [
      {
        title: '負債まみれのレガシーフロントエンド画面を Vue.js でリプレイスした話',
        subTitle: 'とよへい'
      },
      {
        title: '不確実性のある将来に対応するためのデザイン戦略',
        subTitle: '腹筋ローラーの力を信じろ'
      },
      {
        title: 'Vue2 Vue3 マイグレーション 令和最新 最強',
        subTitle: 'miyaoka'
      },
    ],
  },
  {
    time: '13:55 - 14:15',
    isAllTrackEvent: false,
    isSponsorEvent: false,
    events: [
      {
        title: `1. レガシーなMPAアプリケーションをwebpackからviteに移行する話
oreo
2. provide/injectを用いたローカルな状態管理
ebiryu
3. Nuxt2 + Composition API から Nuxt Bridge へのマイグレーションのすゝめ
掛水優輝
4. Nuxt Content v2でエンジニアブログを作っている話
古澤 棟熏`,
      },
      {
        title: 'Vue.js でアクセシブルなコンポーネントをつくるために',
        subTitle: 'やまのく'
      },
      {
        title: 'こわくない」Vuetifyで始めるOSSコントリビュート',
        subTitle: '川野邉 賢二'
      },
    ],
  },
]
</script>
<template>
  <section
    id="timetable"
    class="py-10 px-5 bg-timetable md:px-10 lg:p-20 text-timetable"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="relative px-5 mx-auto max-w-1190">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Time Table"
          title-yamato="タイムテーブル"
        />
        <div class="hidden sm:grid grid-cols-1 gap-2.5 mx-auto mb-2.5 md:sticky md:top-0 md:grid-cols-md-timetable xl:grid-cols-timetable xl:max-w-[1260px]">
          <div />
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-white bg-track-a">メドピアトラック</div>
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-white bg-track-b">FUTUREトラック</div>
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-white bg-track-c">クラウドサイントラック</div>
        </div>
        <div
          v-for="(timeslot, index) in timeslots"
          :key="index"
          class="grid grid-cols-1 gap-y-2.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:grid-cols-timetable xl:max-w-[1260px]"
        >
          <p class="timeslot">
            {{ timeslot.time }}
          </p>
          <template v-if="timeslot.isAllTrackEvent">
            <div class="flex flex-col col-span-3 justify-center items-center py-3.5 font-bold text-center bg-sponsor/[.03] md:mb-0">
              <h3>{{ timeslot.events[0].title }}<br>{{ timeslot.events[0].subTitle }}</h3>
            </div>
          </template>
          <template v-else>
            <TrackLabel
              v-for="(tracks, timeslotIndex) in timeslot.events"
              :key="timeslotIndex"
              class="col-span-3 last:mb-2.5 whitespace-pre-wrap md:col-span-1 md:last:mb-0"
              :is-sponsor-event="timeslot.isSponsorEvent"
              :track-index="timeslotIndex"
            >
              <h3>{{ tracks.title }}<br>{{ tracks.subTitle }}</h3>
            </TrackLabel>
          </template>
        </div>
        <div
          class="grid grid-cols-1 gap-y-2.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 md:mb-0 xl:grid-cols-timetable xl:max-w-[1260px]"
        >
          <p class="timeslot">
            14:20 - 15:05
          </p>
          <TrackLabel
            class="col-span-3 md:col-span-1 md:row-span-1"
            :track-index="0"
          >
            <p class="text-base">14:20 - 14:40</p><h3>施策を止めるな！Vue2からVue3への移行<br>志賀 奎太</h3><p class="mt-2.5 text-base">14:45 - 15:05</p><h3>十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング<br>tbashiyy</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 justify-center md:col-span-1 md:row-span-1"
            :track-index="1"
          >
            <h3 class="text-center">OSSはじめのいっぽ</h3>
          </TrackLabel>

          <TrackLabel
            class="col-span-3 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="2"
          >
            <p class="text-base">14:20 - 14:40</p><h3>JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する<br>川俣 涼</h3><p class="mt-2.5 text-base">14:45 - 15:05</p><h3>Guillaume Chau</h3>
          </TrackLabel>

          <p class="timeslot">
            15:10 - 15:55
          </p>
          <TrackLabel
            class="col-span-3 row-span-2 justify-center md:col-span-1 md:row-span-1"
            :track-index="0"
          >
            <h3 class=" text-center">ぬるほどVue<br>コンポーネント</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 row-span-2 md:col-span-1 md:row-span-1"
            :track-index="1"
          >
            <p class="text-base">15:10 - 15:30</p><h3>Nuxt モジュールの作り方を知って 開発した機能を再利用しよう<br>田中弘治</h3><p class="mt-2.5 text-base">15:10 - 15:30</p><h3>eslint-plugin-vueを使用して継続的にVue3移行する<br>太田 洋介</h3>
          </TrackLabel>

          <TrackLabel
            class="col-span-3 row-span-5 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="2"
          >
            <p class="text-base">15:10 - 15:30</p><h3>Nuxt モジュールの作り方を知って 開発した機能を再利用しよう<br>田中弘治</h3>
            <p class="mt-2.5 text-base">15:35 - 17:35</p><h3 class="mt-2.5 text-center">ハンズオン</h3>
          </TrackLabel>

          <p class="timeslot">
            16:00 - 16:20
          </p>

          <TrackLabel
            class="col-span-3 md:col-span-1"
            :track-index="0"
          >
            <h3>安全に開発効率を上げるための Vue 2.7 移行<br>watsuyo</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="1"
          >
            <h3>Sebastien Chopin</h3>
          </TrackLabel>

          <p class="timeslot">
            16:25 - 16:45
          </p>
          <TrackLabel
            class="col-span-3 md:col-span-1"
            :track-index="0"
          >
            <h3>Matias Capeletto</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="1"
          >
            <h3>NuxtJSによるJamstack構築とNuxt 3でどう変わるのか<br>菅家 大地</h3>
          </TrackLabel>

          <p class="timeslot">
            16:50 - 17:10
          </p>
          <TrackLabel
            class="col-span-3 md:col-span-1"
            :track-index="0"
          >
            <h3>Jessica Sachs</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="1"
          >
            <h3>デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成<br>みゅーとん</h3>
          </TrackLabel>

          <p class="timeslot">
            17:15 - 17:35
          </p>
          <TrackLabel
            class="col-span-3 md:col-span-1"
            :track-index="0"
          >
            <h3>社内用共通コンポーネントのビジュアルリグレッションテストにStorybookとChromaticを選択した話<br>プログラミングをするパンダ</h3>
          </TrackLabel>
          <TrackLabel
            class="col-span-3 mb-2.5 md:col-span-1 md:mb-0"
            :track-index="1"
          >
            <h3>Anthony Fu</h3>
          </TrackLabel>

          <p class="timeslot">
            18:00 - 19:00
          </p>

          <div class="multi-track">
            <h3 class="md:py-2.5">Peephole</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-timetable {
  @apply text-sm leading-7 lg:text-lg lg:leading-8;
}

.timeslot {
  @apply text-sm leading-7 lg:text-lg lg:leading-8 text-white text-center
    bg-timetable-timeslot col-span-3 md:col-span-1 md:pt-2;
}

.multi-track {
  @apply text-sm leading-7 lg:text-lg lg:leading-8 text-center lg:text-lg
    col-span-3 bg-sponsor/[0.03];
}
</style>
