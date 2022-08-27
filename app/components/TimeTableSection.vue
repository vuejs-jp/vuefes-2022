<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
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
        title: 'メインセッション',
      },
      {
        title: 'メインセッション',
      },
      {
        title: 'メインセッション',
      },
    ],
  },
  {
    time: '13:55 - 14:15',
    isAllTrackEvent: false,
    isSponsorEvent: false,
    events: [
      {
        title: 'メインセッション',
      },
      {
        title: 'メインセッション',
      },
      {
        title: 'メインセッション',
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
    <div class="justify-center py-20 text-center bg-white md:py-40">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Time Table"
        title-yamato="タイムテーブル"
      />
      <div class="grid grid-cols-4 gap-2.5 mx-auto mb-2.5 lg:max-w-[1260px]">
        <div class="py-7 px-[4.5rem]" />
        <div>メドピアトラック</div>
        <div>FUTUREトラック</div>
        <div>クラウドサイントラック</div>
      </div>
      <div
        v-for="(timeslot, index) in timeslots"
        :key="index"
        class="grid grid-cols-4 gap-2.5 mx-auto mb-2.5 lg:max-w-[1260px]"
      >
        <p class="py-7 px-[4.5rem] max-w-[16.875rem] min-h-[5.25rem] text-xl text-center text-white align-middle bg-timetable-timeslot">
          {{ timeslot.time }}
        </p>
        <template v-if="timeslot.isAllTrackEvent">
          <div class="flex col-span-3 justify-center items-center px-[3.125rem] text-lg text-center bg-sponsor/[.03]">
            <h3>{{ timeslot.events[0].title }}<br>{{ timeslot.events[0].subTitle }}</h3>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(tracks, index) in timeslot.events"
            :key="index"
            class="flex justify-center items-center px-[3.125rem] text-lg"
            :class="trackClassByIndex(index, timeslot.isSponsorEvent)"
          >
            <h3>{{ tracks.title }}<br>{{ tracks.subTitle }}</h3>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
