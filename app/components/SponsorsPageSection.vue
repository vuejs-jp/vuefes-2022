<script setup lang="ts">
import SponsorList from '~/components/sponsors/SponsorList.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { useSponsorsCMS } from '~/composables/useCMS'
import { individuals } from '~/utils/individuals.constants'

const { fetchContent } = useSponsorsCMS()
const { data: sponsors } = useLazyAsyncData('sponsors', () => fetchContent())
</script>

<template>
  <section
    id="sponsors"
    class="bg-sponsors py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 lg:py-40">
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
            <SponsorList :sponsors="sponsors.dinner" />
            <SponsorList :sponsors="sponsors.specialMedia" />
            <SponsorList :sponsors="sponsors.media" />
            <SponsorList :sponsors="sponsors.streaming" />
          </div>
        </template>
        <div class="relative mx-5 border border-vue-blue py-10 px-5 text-vue-blue md:p-15">
          <h3 class="top absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-8 text-center font-yu-gothic text-xl font-bold md:-top-5 md:text-3xl">Individual</h3>
          <ul>
            <li
              v-for="individual in individuals"
              :key="individual"
              class="mr-6 inline text-sm leading-8 md:text-xl md:leading-10"
            >
              {{ individual }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
