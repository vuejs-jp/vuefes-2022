<script setup lang="ts">
import ExplainText from '~/components/ExplainText.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import TrackLabel from '~/components/timetable/TrackLabel.vue'
import { platinumSponsorSessions, goldSponsorSessions } from '~/utils/timeslots.constants'
</script>

<template>
  <section
    id="timetable"
    class="bg-timetable py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 lg:py-40">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Time Table"
        title-yamato="タイムテーブル"
      />
      <div class="mx-auto max-w-1190 px-5 text-vue-blue">
        <div class="mb-4 xl:text-xl">
          <div class="sm:grid mx-auto mb-2.5 hidden h-18 grid-cols-1 gap-2.5 md:grid md:grid-cols-md-timetable lg:grid xl:grid xl:max-w-1260 xl:grid-cols-timetable">
            <div />
            <div class="flex flex-col items-center justify-center bg-track-a py-4 px-2 text-center font-bold text-white">メドピア<br class="lg:hidden">トラック</div>
            <div class="flex flex-col items-center justify-center bg-track-b py-4 px-2 text-center font-bold text-white">FUTURE<br class="lg:hidden">トラック</div>
            <div class="flex flex-col items-center justify-center bg-track-c py-4 px-2 text-center font-bold text-white">クラウドサイン<br class="lg:hidden">トラック</div>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">9:30 - 10:00</p>
            <div class="col-span-3 flex flex-col items-center justify-center bg-sponsor py-2 font-bold">
              <p>配信開始（待機時間）</p>
            </div>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">10:00 - 10:10</p>
            <div class="col-span-3 flex flex-col items-center justify-center bg-sponsor py-2 text-center">
              <p><span class="font-bold">オープニング｜川口和也</span><br class="md:hidden"><span class="text-sm">（Vue.js 日本ユーザーグループ 代表）</span></p>
            </div>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">10:10 - 11:00</p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/yyx990803"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">キーノート｜Evan You</p>
              </nuxt-link>
              <p class="text-sm">音声：同時通訳による日本語のみ</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/yyx990803"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">キーノート｜Evan You</p>
              </nuxt-link>
              <p class="text-sm">音声：英語のみ</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="2"
            >
              <nuxt-link
                to="/sessions/yyx990803"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">キーノート｜Evan You</p>
              </nuxt-link>
              <p class="text-sm">音声：同時通訳による日本語＋英語</p>
            </TrackLabel>
          </div>

          <div
            v-for="timeslot in platinumSponsorSessions"
            :key="timeslot.time"
            class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable"
          >
            <p class="timeslot">{{ timeslot.time }}</p>
            <TrackLabel
              v-for="(tracks, timeslotIndex) in timeslot.events"
              :key="timeslotIndex"
              is-sponsor-event
              :track-index="timeslotIndex"
              class="speaker-track-label"
            >
              <p class="mb-1 text-sm">{{ tracks.title }}</p>
              <nuxt-link
                :to="tracks.link"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">{{ tracks.sessionTitle }}</p>
              </nuxt-link>
              <p class="text-sm">{{ tracks.subTitle }}</p>
            </TrackLabel>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">11:20 - 12:00</p>
            <div class="col-span-3 flex flex-col items-center justify-center bg-sponsor py-2 font-bold">
              <p>
                <nuxt-link
                  to="#lets-ask-evan-you"
                  class="underline transition-opacity hover:opacity-60"
                >
                  Evan You に聞こう
                </nuxt-link>
              </p>
            </div>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">12:00 - 12:30</p>
            <div class="col-span-3 flex flex-col items-center justify-center bg-sponsor py-2 font-bold">
              <p>ランチタイム</p>
            </div>
          </div>

          <div
            v-for="timeslot in goldSponsorSessions"
            :key="timeslot.time"
            class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable"
          >
            <p class="timeslot">{{ timeslot.time }}</p>
            <TrackLabel
              v-for="(tracks, timeslotIndex) in timeslot.events"
              :key="timeslotIndex"
              is-sponsor-event
              :track-index="timeslotIndex"
              class="speaker-track-label"
            >
              <p class="mb-1 text-sm">{{ tracks.title }}</p>
              <nuxt-link
                :to="tracks.link"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">{{ tracks.sessionTitle }}</p>
              </nuxt-link>
              <p class="text-sm">{{ tracks.subTitle }}</p>
            </TrackLabel>
          </div>

          <div class="mx-auto mb-5 grid grid-cols-1 gap-y-1.5 md:mb-2.5 md:min-h-[83px] md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">13:00 - 13:30</p>
            <div class="col-span-3 flex flex-col items-center justify-center bg-sponsor py-2 font-bold">
              <p>ランチタイム</p>
            </div>
          </div>

          <div class="mx-auto mb-2.5 grid grid-cols-1 gap-y-1.5 md:mb-0 md:grid-cols-md-timetable md:gap-2.5 xl:max-w-1260 xl:grid-cols-timetable">
            <p class="timeslot">13:30 - 13:50</p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/t0yohei"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">負債が溜まったレガシーフロントエンド画面を Vue.js でリプレイスした話</p>
              </nuxt-link>
              <p class="text-sm">とよへい</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/8845musign"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">不確実性のある将来に対応するためのデザイン戦略</p>
              </nuxt-link>
              <p class="text-sm">腹筋ローラーの力を信じろ</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="2"
            >
              <nuxt-link
                to="/sessions/miyaoka"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">Vue2 Vue3 マイグレーション 令和最新 最強</p>
              </nuxt-link>
              <p class="text-sm">miyaoka</p>
            </TrackLabel>

            <p class="timeslot">13:55 - 14:15</p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <p class="mb-8 font-bold">ライトニングトーク</p>
              <div class="mb-8">
                <nuxt-link
                  to="/sessions/oreo"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">レガシーなMPAアプリケーションをwebpackからviteに移行する話</p>
                </nuxt-link>
                <p class="text-sm">oreo</p>
              </div>
              <div class="mb-8">
                <nuxt-link
                  to="/sessions/ebiryu"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">provide/injectを用いたローカルな状態管理</p>
                </nuxt-link>
                <p class="text-sm">ebiryu</p>
              </div>
              <div class="mb-8">
                <nuxt-link
                  to="/sessions/l4dybird"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">Nuxt2 + Composition API から Nuxt Bridge へのマイグレーションのすゝめ</p>
                </nuxt-link>
                <p class="text-sm">掛水優輝</p>
              </div>
              <div>
                <nuxt-link
                  to="/sessions/FurusawaKaoru"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">ブログを作るならNuxt Content v2はいいぞ</p>
                </nuxt-link>
                <p class="text-sm">古澤 棟熏</p>
              </div>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/yamanoku"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">Vue.js でアクセシブルなコンポーネントをつくるために</p>
              </nuxt-link>
              <p class="text-sm">やまのく</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="2"
            >
              <nuxt-link
                to="/sessions/kenji7157"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">「こわくない」Vuetifyで始めるOSSコントリビュート</p>
              </nuxt-link>
              <p class="text-sm">川野邉 賢二</p>
            </TrackLabel>

            <p class="timeslot">14:20 - 15:05</p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <div class="mb-8">
                <p class="mb-1 text-sm">14:20 - 14:40</p>
                <nuxt-link
                  to="/sessions/shigasy"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">施策を止めるな！Vue2からVue3への移行</p>
                </nuxt-link>
                <p class="text-sm">志賀 奎太</p>
              </div>
              <div>
                <p class="mb-1 text-sm">14:45 - 15:05</p>
                <nuxt-link
                  to="/sessions/tbashiyy"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング</p>
                </nuxt-link>
                <p class="text-sm">tbashiyy</p>
              </div>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label md:centering"
              :track-index="1"
            >
              <nuxt-link
                to="#oss-first-step"
                class="transition-opacity hover:opacity-60"
              >
                <p class="text-center font-bold underline">OSSはじめの一歩</p>
              </nuxt-link>
            </TrackLabel>

            <TrackLabel
              class="speaker-track-label"
              :track-index="2"
            >
              <div class="mb-8">
                <p class="mb-1 text-sm">14:20 - 14:40</p>
                <nuxt-link
                  to="/sessions/kawamataryo"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する</p>
                </nuxt-link>
                <p class="text-sm">川俣 涼</p>
              </div>
              <div>
                <p class="mb-1 text-sm">14:45 - 15:05</p>
                <nuxt-link
                  to="/sessions/Akryum"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">How Vite enables Histoire</p>
                </nuxt-link>
                <p class="text-sm">Guillaume Chau</p>
              </div>
            </TrackLabel>

            <p class="timeslot row-span-2">15:10 - 15:55</p>
            <TrackLabel
              class="speaker-track-label md:centering row-span-2"
              :track-index="0"
            >
              <nuxt-link
                to="#naruhodo-vue-component"
                class="transition-opacity hover:opacity-60"
              >
                <p class="text-center font-bold underline">なるほどVue<br>コンポーネント</p>
              </nuxt-link>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label row-span-2"
              :track-index="1"
            >
              <div class="mb-8">
                <p class="mb-1 text-sm">15:10 - 15:30</p>
                <nuxt-link
                  to="/sessions/monsat"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</p>
                </nuxt-link>
                <p class="text-sm">田中弘治</p>
              </div>
              <div>
                <p class="mb-1 text-sm">15:35 - 15:55</p>
                <nuxt-link
                  to="/sessions/ota-meshi"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="mb-1 font-bold underline">eslint-plugin-vueを使用して継続的にVue3移行する</p>
                </nuxt-link>
                <p class="text-sm">太田 洋介</p>
              </div>
            </TrackLabel>

            <TrackLabel
              class="speaker-track-label"
              :track-index="2"
            >
              <p class="mb-1 text-sm">15:10 - 15:30</p>
              <nuxt-link
                to="/sessions/posva"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">State Alchemy with Pinia</p>
              </nuxt-link>
              <p class="text-sm">Eduardo San Martin Morote</p>
            </TrackLabel>

            <TrackLabel
              class="speaker-track-label md:centering row-span-5 h-full"
              :track-index="2"
            >
              <div>
                <p class="text-center text-sm">15:35 - 17:35</p>
                <nuxt-link
                  to="#vue3-handson"
                  class="transition-opacity hover:opacity-60"
                >
                  <p class="text-center font-bold underline">Vue 3 ハンズオン</p>
                </nuxt-link>
              </div>
            </TrackLabel>

            <p class="timeslot">
              16:00 - 16:20
            </p>

            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/watsuyo"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">安全に開発効率を上げるための Vue 2.7 移行</p>
              </nuxt-link>
              <p class="text-sm">watsuyo</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/Atinux"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">From Zero to One</p>
              </nuxt-link>
              <p class="text-sm">Sebastien Chopin</p>
            </TrackLabel>

            <p class="timeslot">
              16:25 - 16:45
            </p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/patak"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">Vite 3 and Beyond</p>
              </nuxt-link>
              <p class="text-sm">Matias Capeletto</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/KanDai"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">NuxtJSによるJamstack構築とNuxt 3でどう変わるのか</p>
              </nuxt-link>
              <p class="text-sm">菅家 大地</p>
            </TrackLabel>

            <p class="timeslot">
              16:50 - 17:10
            </p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/Jess"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">Component Testing</p>
              </nuxt-link>
              <p class="text-sm">Jessica Sachs</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/mew-ton"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成</p>
              </nuxt-link>
              <p class="text-sm">みゅーとん</p>
            </TrackLabel>

            <p class="timeslot">
              17:15 - 17:35
            </p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/KushibikiMashu"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">共通コンポーネントのテスト実装方法にあえてVRTを選択した話</p>
              </nuxt-link>
              <p class="text-sm">プログラミングをするパンダ</p>
            </TrackLabel>
            <TrackLabel
              class="speaker-track-label"
              :track-index="1"
            >
              <nuxt-link
                to="/sessions/anfu"
                class="transition-opacity hover:opacity-60"
              >
                <p class="mb-1 font-bold underline">Patterns of VueUse</p>
              </nuxt-link>
              <p class="text-sm">Anthony Fu</p>
            </TrackLabel>

            <p class="timeslot">
              18:00 - 19:00
            </p>
            <div class="col-span-3 flex min-h-10 items-center justify-center bg-sponsor md:min-h-[83px]">
              <nuxt-link
                to="#peephole"
                class="transition-opacity hover:opacity-60"
              >
                <p class="font-bold underline">Peephole</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <ExplainText explain="※各セッションの開始・終了時間は多少前後する可能性がありますので、あらかじめご了承ください。" />
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
