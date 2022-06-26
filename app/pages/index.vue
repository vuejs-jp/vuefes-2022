<template>
  <div>
    <nav-page-section />
    <top-page-section />
    <ichimatsu-divided-bar color="white" />
    <message-page-section />
    <div v-if="SHOW_TICKET">
      <ichimatsu-divided-bar color="tohoh" />
      <ticket-page-section />
    </div>
    <ichimatsu-divided-bar color="white" />
    <speaker-page-section />
    <ichimatsu-divided-bar color="hiwamoegi" />
    <sponsors-page-section />
    <ichimatsu-divided-bar color="silver-tree" />
    <form-page-section />
    <ichimatsu-divided-bar color="sangosyu" />
    <team-page-section />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>

<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import TopPageSection from '~/components/TopPageSection.vue'
import MessagePageSection from '~/components/MessagePageSection.vue'
import TicketPageSection from '~/components/TicketPageSection.vue'
import SpeakerPageSection from '~/components/SpeakerPageSection.vue'
import SponsorsPageSection from '~/components/SponsorsPageSection.vue'
import TeamPageSection from '~/components/TeamPageSection.vue'
import FormPageSection from '~/components/FormPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { SHOW_TICKET } from '~/utils/feature.constants'
</script>
