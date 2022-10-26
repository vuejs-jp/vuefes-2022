<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TrackLabel from '~/components/timetable/TrackLabel.vue'
import { platinumSponsorSessions, goldSponsorSessions, mainSessions } from '~/utils/timeslots.constants'
import ExplainText from '~/components/ExplainText.vue'
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
      <div class="px-5 mx-auto max-w-1190 text-vue-blue">
        <div class="mb-4 xl:text-xl">
          <div class="hidden sm:grid grid-cols-1 gap-2.5 mx-auto mb-2.5 h-18 md:grid md:grid-cols-md-timetable lg:grid xl:grid xl:grid-cols-timetable xl:max-w-1260">
            <div />
            <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-a">メドピア<br class="lg:hidden">トラック</div>
            <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-b">FUTURE<br class="lg:hidden">トラック</div>
            <div class="flex flex-col justify-center items-center py-4 px-2 font-bold text-center text-white bg-track-c">クラウドサイン<br class="lg:hidden">トラック</div>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">9:30 - 10:00</p>
            <div class="flex flex-col col-span-3 justify-center items-center py-2 font-bold bg-sponsor">
              <p>配信開始（待機時間）</p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">10:00 - 10:10</p>
            <div class="flex flex-col col-span-3 justify-center items-center py-2 text-center bg-sponsor">
              <p><span class="font-bold">オープニング｜川口和也</span><br class="md:hidden"><span class="text-sm">（Vue.js 日本ユーザーグループ 代表）</span></p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">10:10 - 11:00</p>
            <TrackLabel
              class="speaker-track-label"
              :track-index="0"
            >
              <nuxt-link
                to="/sessions/yyx990803"
                class="hover:opacity-60 transition-opacity"
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
                class="hover:opacity-60 transition-opacity"
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
                class="hover:opacity-60 transition-opacity"
              >
                <p class="mb-1 font-bold underline">キーノート｜Evan You</p>
              </nuxt-link>
              <p class="text-sm">音声：同時通訳による日本語＋英語</p>
            </TrackLabel>
          </div>

          <div
            v-for="timeslot in platinumSponsorSessions"
            :key="timeslot.time"
            class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260"
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
                class="hover:opacity-60 transition-opacity"
              >
                <p class="mb-1 font-bold underline">{{ tracks.sessionTitle }}</p>
              </nuxt-link>
              <p class="text-sm">{{ tracks.subTitle }}</p>
            </TrackLabel>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">11:20 - 12:00</p>
            <div class="flex flex-col col-span-3 justify-center items-center py-2 font-bold bg-sponsor">
              <p>
                <nuxt-link
                  to="#lets-ask-evan-you"
                  class="underline hover:opacity-60 transition-opacity"
                >
                  Evan You に聞こう
                </nuxt-link>
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">12:00 - 12:30</p>
            <div class="flex flex-col col-span-3 justify-center items-center py-2 font-bold bg-sponsor">
              <p>ランチタイム</p>
            </div>
          </div>

          <div
            v-for="timeslot in goldSponsorSessions"
            :key="timeslot.time"
            class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260"
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
                class="hover:opacity-60 transition-opacity"
              >
                <p class="mb-1 font-bold underline">{{ tracks.sessionTitle }}</p>
              </nuxt-link>
              <p class="text-sm">{{ tracks.subTitle }}</p>
            </TrackLabel>
          </div>

          <div class="grid grid-cols-1 gap-y-1.5 mx-auto mb-5 md:grid-cols-md-timetable md:gap-2.5 md:mb-2.5 md:min-h-[83px] xl:grid-cols-timetable xl:max-w-1260">
            <p class="timeslot">13:00 - 13:30</p>
            <div class="flex flex-col col-span-3 justify-center items-center py-2 font-bold bg-sponsor">
              <p>ランチタイム</p>
            </div>
          </div>

          <div
            class="mx-auto md:mb-0 xl:max-w-1260"
          >
            <div
              v-for="(session, index) in mainSessions"
              :key="index"
              class="grid grid-cols-1 gap-y-1.5 mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:grid-cols-timetable"
            >
              <p class="timeslot">{{ session.time }}</p>
              <TrackLabel
                v-for="(event, key) in session.events"
                :key="key"
                :class="event.type === 'others' ? 'md:flex md:justify-center md:items-center speaker-track-label' : 'speaker-track-label'"
                :track-index="key"
              >
                <template v-if="event.type === 'session'">
                  <nuxt-link
                    :to="event.link || ''"
                    class="hover:opacity-60 transition-opacity"
                  >
                    <p class="mb-1 font-bold underline">{{ event.sessionTitle }}</p>
                  </nuxt-link>
                  <p class="text-sm">{{ event.subTitle }}</p>
                </template>
                <template v-if="event.type === 'lt' || event.type === 'multiple_session'">
                  <p class="mb-8 font-bold">ライトニングトーク</p>
                  <div
                    v-for="(e, k) in event.events"
                    :key="k"
                  >
                    <div class="mb-8">
                      <p
                        v-if="e.title"
                        class="mb-1 text-sm"
                      >
                        {{ e.title }}
                      </p>
                      <nuxt-link
                        to="/sessions/oreo"
                        class="hover:opacity-60 transition-opacity"
                      >
                        <p class="mb-1 font-bold underline">{{ e.sessionTitle }}</p>
                      </nuxt-link>
                      <p class="text-sm">{{ e.subTitle }}</p>
                    </div>
                  </div>
                </template>
                <template v-if="event.type === 'others'">
                  <nuxt-link
                    :to="event.link"
                    class="hover:opacity-60 transition-opacity"
                  >
                    <p class="mb-1 font-bold underline">{{ event.sessionTitle }}</p>
                  </nuxt-link>
                  <p class="text-sm">{{ event.subTitle }}</p>
                </template>
              </TrackLabel>
            </div>

            <div
              class="grid grid-cols-1 gap-y-1.5 mb-2.5 md:grid-cols-md-timetable md:gap-2.5 xl:grid-cols-timetable"
            >
              <p class="row-span-2 timeslot">15:10 - 15:55</p>
              <TrackLabel
                class="row-span-2 md:flex md:justify-center md:items-center speaker-track-label"
                :track-index="0"
              >
                <nuxt-link
                  to="#naruhodo-vue-component"
                  class="hover:opacity-60 transition-opacity"
                >
                  <p class="font-bold text-center underline">なるほどVue<br>コンポーネント</p>
                </nuxt-link>
              </TrackLabel>

              <TrackLabel
                class="row-span-2 speaker-track-label"
                :track-index="1"
              >
                <div class="mb-8">
                  <p class="mb-1 text-sm">15:10 - 15:30</p>
                  <nuxt-link
                    to="/sessions/monsat"
                    class="hover:opacity-60 transition-opacity"
                  >
                    <p class="mb-1 font-bold underline">Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</p>
                  </nuxt-link>
                  <p class="text-sm">田中弘治</p>
                </div>
                <div>
                  <p class="mb-1 text-sm">15:35 - 15:55</p>
                  <nuxt-link
                    to="/sessions/ota-meshi"
                    class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
                >
                  <p class="mb-1 font-bold underline">State Alchemy with Pinia</p>
                </nuxt-link>
                <p class="text-sm">Eduardo San Martin Morote</p>
              </TrackLabel>

              <TrackLabel
                class="row-span-5 h-full md:flex md:justify-center md:items-center speaker-track-label"
                :track-index="2"
              >
                <div>
                  <p class="text-sm text-center">15:35 - 17:35</p>
                  <nuxt-link
                    to="#vue3-handson"
                    class="hover:opacity-60 transition-opacity"
                  >
                    <p class="font-bold text-center underline">Vue 3 ハンズオン</p>
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
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
                  class="hover:opacity-60 transition-opacity"
                >
                  <p class="mb-1 font-bold underline">Patterns of VueUse</p>
                </nuxt-link>
                <p class="text-sm">Anthony Fu</p>
              </TrackLabel>

              <p class="timeslot">
                18:00 - 19:00
              </p>
              <div class="flex col-span-3 justify-center items-center min-h-10 bg-sponsor md:min-h-[83px]">
                <nuxt-link
                  to="#peephole"
                  class="hover:opacity-60 transition-opacity"
                >
                  <p class="font-bold underline">Peephole</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <ExplainText explain="※各セッションの開始・終了時間は多少前後する可能性がありますので、あらかじめご了承ください。" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeslot {
  @apply text-lg xl:text-23 text-white text-center bg-timetable-timeslot col-span-3 md:col-span-1 min-h-10 pt-1.5 md:pt-[29px];
}

.speaker-track-label {
  @apply col-span-3 md:col-span-1;
}
</style>
