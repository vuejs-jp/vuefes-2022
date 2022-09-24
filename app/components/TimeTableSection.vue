<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TrackLabel from '~/components/timetable/TrackLabel.vue'
import { timeslots } from '~/utils/timeslots.constants'
</script>

<template>
  <section
    id="timetable"
    class="py-10 px-5 bg-timetable md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Time Table"
        title-yamato="タイムテーブル"
      />
      <div class="px-5 mx-auto max-w-1190 text-vue-blue xl:text-xl">
        <div class="hidden sm:grid grid-cols-1 gap-2.5 mx-auto mb-2.5 h-18 md:grid md:grid-cols-md-timetable lg:grid xl:grid xl:grid-cols-timetable xl:max-w-1260">
          <div />
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-a">メドピア<br class="lg:hidden">トラック</div>
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-b">FUTURE<br class="lg:hidden">トラック</div>
          <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-c">クラウドサイン<br class="lg:hidden">トラック</div>
        </div>
        <div
          v-for="(timeslot, index) in timeslots"
          :key="index"
          class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260"
        >
          <p class="timeslot">
            {{ timeslot.time }}
          </p>
          <template v-if="timeslot.isAllTrackEvent">
            <div class="flex flex-col col-span-3 justify-center items-center py-2 font-bold bg-sponsor">
              <p v-if="timeslot.events[0].link"><n-link :to="timeslot.events[0].link">{{ timeslot.events[0].title }}<br>{{ timeslot.events[0].subTitle }}</n-link></p>
              <p v-else>{{ timeslot.events[0].title }}<br>{{ timeslot.events[0].subTitle }}</p>
            </div>
          </template>
          <template v-else>
            <n-link
              v-for="(tracks, timeslotIndex) in timeslot.events"
              :key="timeslotIndex"
              :to="tracks.link"
              class="speaker-track-label"
            >
              <TrackLabel
                :is-sponsor-event="timeslot.isSponsorEvent"
                :track-index="timeslotIndex"
              >
                <p :class="{'font-bold': !timeslot.isSponsorEvent}">{{ tracks.title }}</p>
                <p :class="{'text-sm': !timeslot.isSponsorEvent}">{{ tracks.subTitle }}</p>
              </TrackLabel>
            </n-link>
          </template>
        </div>
        <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 md:mb-0 xl:grid-cols-timetable xl:max-w-1260">
          <p class="timeslot">13:30 - 13:50</p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <n-link to="/sessions/t0yohei">
              <p class="mb-1 font-bold">負債が溜まったレガシーフロントエンド画面を Vue.js でリプレイスした話</p>
              <p class="text-sm">とよへい</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/8845musign">
              <p class="mb-1 font-bold">不確実性のある将来に対応するためのデザイン戦略</p>
              <p class="text-sm">腹筋ローラーの力を信じろ</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="2"
          >
            <n-link to="/sessions/miyaoka">
              <p class="mb-1 font-bold">Vue2 Vue3 マイグレーション 令和最新 最強</p>
              <p class="text-sm">miyaoka</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">13:55 - 14:15</p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <p class="mb-8 font-bold">ライトニングトーク</p>
            <div class="mb-8">
              <n-link to="/sessions/oreo">
                <p class="mb-1 font-bold">レガシーなMPAアプリケーションをwebpackからviteに移行する話</p>
                <p class="text-sm">oreo</p>
              </n-link>
            </div>
            <div class="mb-8">
              <n-link to="/sessions/ebiryu">
                <p class="mb-1 font-bold">provide/injectを用いたローカルな状態管理</p>
                <p class="text-sm">ebiryu</p>
              </n-link>
            </div>
            <div class="mb-8">
              <n-link to="/sessions/l4dybird">
                <p class="mb-1 font-bold">Nuxt2 + Composition API から Nuxt Bridge へのマイグレーションのすゝめ</p>
                <p class="text-sm">掛水優輝</p>
              </n-link>
            </div>
            <div>
              <n-link to="/sessions/FurusawaKaoru">
                <p class="mb-1 font-bold">ブログを作るならNuxt Content v2はいいぞ</p>
                <p class="text-sm">古澤 棟熏</p>
              </n-link>
            </div>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/yamanoku">
              <p class="mb-1 font-bold">Vue.js でアクセシブルなコンポーネントをつくるために</p>
              <p class="text-sm">やまのく</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="2"
          >
            <n-link to="/sessions/kenji7157">
              <p class="mb-1 font-bold">「こわくない」Vuetifyで始めるOSSコントリビュート</p>
              <p class="text-sm">川野邉 賢二</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">14:20 - 15:05</p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <div class="mb-8">
              <n-link to="/sessions/shigasy">
                <p class="mb-1 text-sm">14:20 - 14:40</p>
                <p class="mb-1 font-bold">施策を止めるな！Vue2からVue3への移行</p>
                <p class="text-sm">志賀 奎太</p>
              </n-link>
            </div>
            <div>
              <n-link to="/sessions/tbashiyy">
                <p class="mb-1 text-sm">14:45 - 15:05</p>
                <p class="mb-1 font-bold">十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング</p>
                <p class="text-sm">tbashiyy</p>
              </n-link>
            </div>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label md:centering"
            :track-index="1"
          >
            <n-link to="#oss-first-step">
              <p class="font-bold text-center">OSSはじめの一歩</p>
            </n-link>
          </TrackLabel>

          <TrackLabel
            class="speaker-track-label"
            :track-index="2"
          >
            <div class="mb-8">
              <n-link to="/sessions/kawamataryo">
                <p class="mb-1 text-sm">14:20 - 14:40</p>
                <p class="mb-1 font-bold">JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する</p>
                <p class="text-sm">川俣 涼</p>
              </n-link>
            </div>
            <div>
              <n-link to="/sessions/Akryum">
                <p class="mb-1 text-sm">14:45 - 15:05</p>
                <p class="mb-1 font-bold">How Vite enables Histoire</p>
                <p class="text-sm">Guillaume Chau</p>
              </n-link>
            </div>
          </TrackLabel>

          <p class="row-span-2 timeslot">15:10 - 15:55</p>
          <TrackLabel
            class="row-span-2 speaker-track-label md:centering"
            :track-index="0"
          >
            <n-link to="#naruhodo-vue-component">
              <p class="font-bold text-center">なるほどVue<br>コンポーネント</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="row-span-2 speaker-track-label"
            :track-index="1"
          >
            <div class="mb-8">
              <n-link to="/sessions/monsat">
                <p class="mb-1 text-sm">15:10 - 15:30</p>
                <p class="mb-1 font-bold">Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</p>
                <p class="text-sm">田中弘治</p>
              </n-link>
            </div>
            <div>
              <n-link to="/sessions/ota-meshi">
                <p class="mb-1 text-sm">15:10 - 15:30</p>
                <p class="mb-1 font-bold">eslint-plugin-vueを使用して継続的にVue3移行する</p>
                <p class="text-sm">太田 洋介</p>
              </n-link>
            </div>
          </TrackLabel>

          <TrackLabel
            class="speaker-track-label"
            :track-index="2"
          >
            <n-link to="/sessions/posva">
              <p class="mb-1 text-sm">15:10 - 15:30</p>
              <p class="mb-1 font-bold">State Alchemy with Pinia</p>
              <p class="text-sm">Eduardo San Martin Morote</p>
            </n-link>
          </TrackLabel>

          <TrackLabel
            class="row-span-5 h-full speaker-track-label md:centering"
            :track-index="2"
          >
            <div>
              <n-link to="#vue3-handson">
                <p class="text-sm text-center">15:35 - 17:35</p>
                <p class="font-bold text-center">Vue 3 ハンズオン</p>
              </n-link>
            </div>
          </TrackLabel>

          <p class="timeslot">
            16:00 - 16:20
          </p>

          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <n-link to="/sessions/watsuyo">
              <p class="mb-1 font-bold">安全に開発効率を上げるための Vue 2.7 移行</p>
              <p class="text-sm">watsuyo</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/Atinux">
              <p class="mb-1 font-bold">From Zero to One</p>
              <p class="text-sm">Sebastien Chopin</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">
            16:25 - 16:45
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <n-link to="/sessions/patak">
              <p class="mb-1 font-bold">Vite 3 and Beyond</p>
              <p class="text-sm">Matias Capeletto</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/KanDai">
              <p class="mb-1 font-bold">NuxtJSによるJamstack構築とNuxt 3でどう変わるのか</p>
              <p class="text-sm">菅家 大地</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">
            16:50 - 17:10
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <n-link to="/sessions/Jess">
              <p class="mb-1 font-bold">Component Testing</p>
              <p class="text-sm">Jessica Sachs</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/mew-ton">
              <p class="mb-1 font-bold">デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成</p>
              <p class="text-sm">みゅーとん</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">
            17:15 - 17:35
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <n-link to="/sessions/KushibikiMashu">
              <p class="mb-1 font-bold">共通コンポーネントのテスト手法にあえてVRTを選択した話</p>
              <p class="text-sm">プログラミングをするパンダ</p>
            </n-link>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <n-link to="/sessions/anfu">
              <p class="mb-1 font-bold">Patterns of VueUse</p>
              <p class="text-sm">Anthony Fu</p>
            </n-link>
          </TrackLabel>

          <p class="timeslot">
            18:00 - 19:00
          </p>
          <div class="flex col-span-3 justify-center items-center min-h-10 bg-sponsor md:min-h-[83px]">
            <n-link to="#peephole">
              <p class="font-bold">Peephole</p>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeslot {
  @apply text-lg xl:text-23 text-white text-center bg-timetable-timeslot col-span-3 md:col-span-1 min-h-10 pt-1.5 md:pt-[29px];
}

.speaker-track-label {
  @apply col-span-3 md:col-span-1;
}

.md\:centering {
  @apply md:flex md:justify-center md:items-center
}
</style>
