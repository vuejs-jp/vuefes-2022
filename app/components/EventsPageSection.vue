<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import ExplainText from '~/components/ExplainText.vue'
import EventDetail from '~/components/events/EventDetail.vue'
import ChildcareDetail from '~/components/events/ChildcareDetail.vue'
import {
  eventDescription,
  eventList,
} from '~/utils/events.constants'
</script>

<template>
  <section
    id="events"
    class="bg-events py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 lg:py-40">
      <div class="mx-auto max-w-[940px] px-5">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Events"
          title-yamato="企画"
        />
        <ExplainText
          class="mx-auto mb-10 max-w-700 lg:mb-20"
          :explain="eventDescription"
        />
        <EventDetail
          v-for="(event, index) in eventList"
          :key="index"
          :event="event"
          class="mb-10 lg:mb-20"
        />
        <ChildcareDetail class="pt-10" />
      </div>
    </div>
  </section>
</template>
