<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TrackLabel from '~/components/timetable/TrackLabel.vue'
import { timeslots } from '~/utils/timeslots.constants'
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
        <div class="hidden sm:grid grid-cols-1 gap-2.5 mx-auto mb-2.5 md:grid md:sticky md:top-0 md:grid-cols-md-timetable lg:grid xl:grid xl:grid-cols-timetable xl:max-w-[1260px]">
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
              class="speaker-track-label"
              :is-sponsor-event="timeslot.isSponsorEvent"
              :track-index="timeslotIndex"
            ><h3>{{ tracks.title }}<p
                  class="text-sm leading-7 lg:text-lg lg:leading-8"
                  :class="{ 'font-normal': !timeslot.isSponsorEvent }"
                >{{ tracks.subTitle }}</p>
              </h3></TrackLabel>
          </template>
        </div>
        <div
          class="grid grid-cols-1 gap-y-2.5 mx-auto mb-2.5 md:grid-cols-md-timetable md:gap-2.5 md:mb-0 xl:grid-cols-timetable xl:max-w-[1260px]"
        >
          <p class="timeslot">
            14:20 - 15:05
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <p class="text-sm">14:20 - 14:40</p><h3>施策を止めるな！Vue2からVue3への移行</h3><p class="text-sm">志賀 奎太</p><p class="mt-2.5 text-sm">14:45 - 15:05</p><h3>十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング</h3><p class="text-sm">tbashiyy</p>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <h3 class="text-center">OSSはじめのいっぽ</h3>
          </TrackLabel>

          <TrackLabel
            class="speaker-track-label"
            :track-index="2"
          >
            <p class="text-base">14:20 - 14:40</p><h3>JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する</h3><p class="text-sm">川俣 涼</p><p class="mt-2.5 text-base">14:45 - 15:05</p><h3>調整中</h3><p class="text-sm">Guillaume Chau</p>
          </TrackLabel>

          <p class="timeslot">
            15:10 - 15:55
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <h3 class=" text-center">ぬるほどVue<br>コンポーネント</h3>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <p class="text-base">15:10 - 15:30</p><h3>Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</h3><p class="text-sm">田中弘治</p><p class="mt-2.5 text-base">15:10 - 15:30</p><h3>eslint-plugin-vueを使用して継続的にVue3移行する</h3><p class="text-sm">太田 洋介</p>
          </TrackLabel>

          <TrackLabel
            class="row-span-5 speaker-track-label"
            :track-index="2"
          >
            <p class="text-base">15:10 - 15:30</p><h3>Nuxt モジュールの作り方を知って 開発した機能を再利用しよう</h3><p class="text-sm">田中弘治</p>
            <p class="mt-2.5 text-base">15:35 - 17:35</p><h3 class="mt-2.5 text-center">ハンズオン</h3>
          </TrackLabel>

          <p class="timeslot">
            16:00 - 16:20
          </p>

          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <h3>安全に開発効率を上げるための Vue 2.7 移行</h3><p class="text-sm">watsuyo</p>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <h3>調整中</h3><p class="text-sm">Sebastien Chopin</p>
          </TrackLabel>

          <p class="timeslot">
            16:25 - 16:45
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <h3>調整中</h3><p class="text-sm">Matias Capeletto</p>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <h3>NuxtJSによるJamstack構築とNuxt 3でどう変わるのか</h3><p class="text-sm">菅家 大地</p>
          </TrackLabel>

          <p class="timeslot">
            16:50 - 17:10
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <h3>調整中</h3><p class="text-sm">Jessica Sachs</p>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <h3>デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成</h3><p class="text-sm">みゅーとん</p>
          </TrackLabel>

          <p class="timeslot">
            17:15 - 17:35
          </p>
          <TrackLabel
            class="speaker-track-label"
            :track-index="0"
          >
            <h3>社内用共通コンポーネントのビジュアルリグレッションテストにStorybookとChromaticを選択した話</h3><p class="text-sm">プログラミングをするパンダ</p>
          </TrackLabel>
          <TrackLabel
            class="speaker-track-label"
            :track-index="1"
          >
            <h3>調整中</h3><p class="text-sm">Anthony Fu</p>
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
  @apply text-lg md:text-sm leading-7 lg:text-lg lg:leading-8 text-white text-center
    bg-timetable-timeslot col-span-3 md:col-span-1 md:pt-2;
}

.multi-track {
  @apply text-sm leading-7 lg:text-lg lg:leading-8 text-center lg:text-lg
    col-span-3 bg-sponsor/[0.03];
}

.speaker-track-label {
  @apply col-span-3 last:mb-2.5 whitespace-pre-wrap md:col-span-1 md:last:mb-0


}

.speaker-track-label h3 {
  @apply font-bold;
}
</style>
