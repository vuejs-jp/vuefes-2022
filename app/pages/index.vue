<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import TopPageSection from '~/components/TopPageSection.vue'
import MessagePageSection from '~/components/MessagePageSection.vue'
import TicketPageSection from '~/components/TicketPageSection.vue'
import SpeakerPageSection from '~/components/SpeakerPageSection.vue'
import StorePageSection from '~/components/StorePageSection.vue'
import SponsorsPageSection from '~/components/SponsorsPageSection.vue'
import TeamPageSection from '~/components/TeamPageSection.vue'
import TimetablePageSection from '~/components/TimetablePageSection.vue'
import FormPageSection from '~/components/FormPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import EventsPageSection from '~/components/EventsPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { SHOW_TICKET, SHOW_TEAM, SHOW_STORE, SHOW_TIMETABLE } from '~/utils/feature.constants'
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useNuxt2Meta({
  title: conferenceTitle,
  meta: [
    ...generalOg(),
    ...twitterOg(),
  ],
})
</script>

<template>
  <div>
    <nav-page-section />
    <top-page-section />
    <template v-if="SHOW_TIMETABLE">
      <ichimatsu-divided-bar color="timetable" />
      <timetable-page-section />
    </template>
    <speaker-page-section />
    <ichimatsu-divided-bar color="typescript-blue" />
    <events-page-section />
    <template v-if="SHOW_STORE">
      <ichimatsu-divided-bar color="asagi" />
      <store-page-section />
    </template>
    <template v-if="SHOW_TICKET">
      <ichimatsu-divided-bar color="tohoh" />
      <ticket-page-section />
    </template>
    <ichimatsu-divided-bar color="hiwamoegi" />
    <sponsors-page-section />
    <ichimatsu-divided-bar color="white" />
    <message-page-section />
    <ichimatsu-divided-bar color="white" />
    <form-page-section />
    <template v-if="SHOW_TEAM">
      <ichimatsu-divided-bar color="sangosyu" />
      <team-page-section />
    </template>
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
