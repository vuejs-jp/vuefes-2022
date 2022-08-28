<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import LiveIcon from '~/components/timetable/LiveIcon.vue'
function trackClassByIndex(index:number, isSponsorEvent: boolean) {
  switch (index) {
  case 0:
    return isSponsorEvent ? 'border border-track-a text-track-a' : 'bg-sponsor/[.03] border-t-2 border-track-a'
  case 1:
    return isSponsorEvent ?  'border border-track-b text-track-b' : 'bg-sponsor/[.03] border-t-2 border-track-b'
  case 2:
    return isSponsorEvent ?  'border border-track-c text-track-c' : 'bg-sponsor/[.03] border-t-2 border-track-c'
    
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
        title: '開場',
      },
    ],
  },
  {
    time: '10:00 - 10:10',
    isAllTrackEvent: true,
    isSponsorEvent: false,
    isLive: true,
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
    isLive: true,
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
    isLive: true,
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
        title: 'とよへい: 負債まみれのレガシーフロントエンド画面を Vue.js でリプレイスした話',
      },
      {
        title: '腹筋ローラーの力を信じろ: 不確実性のある将来に対応するためのデザイン戦略',
      },
      {
        title: 'miyaoka: Vue2 Vue3 マイグレーション 令和最新 最強',
      },
    ],
  },
  {
    time: '13:55 - 14:15',
    isAllTrackEvent: false,
    isSponsorEvent: false,
    events: [
      {
        title: `1. oreo:  レガシーなMPAアプリケーションをwebpackからviteに移行する話
2. ebiryu: provide/injectを用いたローカルな状態管理
3. 掛水優輝: Nuxt2 + Composition API から Nuxt Bridge へのマイグレーションのすゝめ
4. 古澤 棟熏: Nuxt Content v2でエンジニアブログを作っている話`,
      },
      {
        title: 'やまのく: Vue.js でアクセシブルなコンポーネントをつくるために',
      },
      {
        title: '川野邉 賢二: こわくない」Vuetifyで始めるOSSコントリビュート',
      },
    ],
  },
]
</script>
<template>
  <section
    id="timetable"
    class="py-10 px-5 bg-timetable md:px-10 lg:p-20"
  >
    <div class="relative justify-center p-20 text-center bg-white md:py-12 xl:px-2">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Time Table"
        title-yamato="タイムテーブル"
      />
      <div class="grid grid-cols-1 gap-2.5 mx-auto mb-2.5 md:sticky md:top-0 md:grid-cols-md-timetable xl:grid-cols-timetable xl:max-w-[1260px]">
        <div class="py-7 " />
        <div class="flex justify-center items-center py-4 px-2 text-lg font-bold text-white bg-track-a lg:text-2xl">メドピア<br class="md:hidden">トラック</div>
        <div class="flex justify-center items-center py-4 px-2 text-lg font-bold text-white bg-track-b lg:text-2xl">FUTURE<br class="md:hidden">トラック</div>
        <div class="flex justify-center items-center py-4 px-2 text-lg font-bold text-white bg-track-c lg:text-2xl">クラウドサイン<br class="md:hidden">トラック</div>
      </div>
      <div
        v-for="(timeslot, index) in timeslots"
        :key="index"
        class="grid grid-cols-1 gap-y-2.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:grid-cols-timetable xl:max-w-[1260px]"
      >
        <p class="py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:min-h-[5.25rem] lg:text-2xl">
          {{ timeslot.time }}
        </p>
        <template v-if="timeslot.isAllTrackEvent">
          <div class="flex col-span-3 justify-center items-center px-1 mb-10 min-h-[5rem] text-base text-center bg-sponsor/[.03] md:mb-0 lg:text-lg">
            <h3><LiveIcon v-if="timeslot.isLive" /> {{ timeslot.events[0].title }}<br>{{ timeslot.events[0].subTitle }}</h3>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(tracks, eventIndex) in timeslot.events"
            :key="eventIndex"
            class="flex justify-center items-center px-1 last:mb-10 min-h-[5rem] text-base md:last:mb-0 lg:text-lg"
            :class="trackClassByIndex(index, timeslot.isSponsorEvent)"
          >
            <h3 class="whitespace-pre-wrap"><LiveIcon v-if="timeslot.isLive" /> {{ tracks.title }}<br>{{ tracks.subTitle }}</h3>
          </div>
        </template>
      </div>
      <div
        class="grid grid-cols-1 gap-y-2.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:grid-cols-timetable xl:max-w-[1260px]"
      >
        <p class="col-span-3 row-span-2 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          14:20 - 15:05
        </p>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><p>14:20 - 14:40</p><h3>志賀 奎太: 施策を止めるな！Vue2からVue3への移行</h3></div>
        <div class="flex flex-col col-span-3 row-span-2 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><h3><LiveIcon /> OSSはじめのいっぽ</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-c md:col-span-1 lg:text-lg"><p>14:20 - 14:40</p><h3>川俣 涼:  JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><p>14:45 - 15:05</p><h3>tbashiyy: 十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-c md:col-span-1 lg:text-lg"><p>14:45 - 15:05</p><h3>Guillaume Chau</h3></div>

        <p class="col-span-3 row-span-2 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          15:10 - 15:55
        </p>
        <div class="flex col-span-3 row-span-2 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><h3>なるほどVue<br>コンポーネント</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><p>15:10 - 15:30</p><h3>田中弘治: Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-c md:col-span-1 lg:text-lg"><p>15:10 - 15:30</p><h3>Eduardo San Martin Morote</h3></div>
        <div class="flex flex-col col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><p>15:10 - 15:30</p><h3>太田 洋介:  eslint-plugin-vueを使用して継続的にVue3移行する</h3></div>
        <div class="flex flex-col col-span-3 row-span-5 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-c md:col-span-1 lg:text-lg"><p>15:35 - 17:35</p><h3><LiveIcon /> ハンズオン</h3></div>

        <p class="col-span-3 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          16:00 - 16:20
        </p>
        
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><h3>watsuyo: 安全に開発効率を上げるための Vue 2.7 移行</h3></div>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base border-t-2 border-track-b md:col-span-1 lg:text-lg -sponsor/[.03]"><h3>Sebastien Chopin</h3></div>
        
        <p class="col-span-3 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          16:25 - 16:45
        </p>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><h3>Matias Capeletto</h3></div>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><h3>菅家 大地: NuxtJSによるJamstack構築とNuxt 3でどう変わるのか</h3></div>
        
        <p class="col-span-3 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          16:50 - 17:10
        </p>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><h3>Jessica Sachs</h3></div>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><h3>みゅーとん: デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成</h3></div>
        
        <p class="col-span-3 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          17:15 - 17:35
        </p>        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-a md:col-span-1 lg:text-lg"><h3>プログラミングをするパンダ: 社内用共通コンポーネントのビジュアルリグレッションテストにStorybookとChromaticを選択した話</h3></div>
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base bg-sponsor/[.03] border-t-2 border-track-b md:col-span-1 lg:text-lg"><h3>Anthony Fu</h3></div>

        <p class="col-span-3 py-7 min-h-[5rem] text-lg text-center text-white align-middle bg-timetable-timeslot md:col-span-1 lg:text-2xl">
          18:00 - 19:00
        </p>
        
        <div class="flex col-span-3 justify-center items-center px-1 min-h-[5rem] text-base text-center bg-sponsor/[.03] lg:text-lg">
          <h3><LiveIcon /> Peephole</h3>
        </div>
      </div>
    </div>
  </section>
</template>
