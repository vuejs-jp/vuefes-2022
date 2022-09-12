<script setup lang="ts">
import SponsorList from '~/components/sponsors/SponsorList.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { useSponsorsCMS } from '~/composables/useCMS'
import { indivisuals } from '~/utils/indivisals.constants'

const { fetchContent } = useSponsorsCMS({ modelUid: 'sponsor' })
const { data: sponsors } = useLazyAsyncData('sponsors', () => fetchContent())
</script>

<template>
  <section
    id="sponsors"
    class="py-10 px-5 bg-sponsors md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="mx-auto max-w-1190">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <template v-if="sponsors">
          <div class=" mb-16 md:mb-28">
            <SponsorList :sponsors="sponsors.platinum" />
            <SponsorList :sponsors="sponsors.gold" />
            <SponsorList :sponsors="sponsors.silver" />
            <SponsorList :sponsors="sponsors.bronze" />
            <SponsorList :sponsors="sponsors.specialMedia" />
            <SponsorList :sponsors="sponsors.media" />
            <SponsorList :sponsors="sponsors.streaming" />
          </div>
        </template>
        <div class="relative py-10 px-5 mx-5 text-vue-blue border border-vue-blue md:p-15">
          <h3 class="absolute -top-4 left-1/2 px-8 font-yu-gothic text-xl font-bold text-center bg-white -translate-x-1/2 md:-top-5 md:text-3xl top">Individual</h3>
          <ul>
            <li
              v-for="indivisual in indivisuals"
              :key="indivisual"
              class="inline mr-6 text-sm leading-8 md:text-xl md:leading-10"
            >
              {{ indivisual }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
