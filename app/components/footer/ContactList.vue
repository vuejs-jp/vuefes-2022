<script setup lang="ts">
import TwitterSvg from '~/assets/icon/twitter_logo-invert.svg'
import NoteSvg from '~/assets/icon/note_logo.svg'
import YouTubeSvg from '~/assets/icon/youtube_logo.svg'
import GithubSvg from '~/assets/icon/github_logo.svg'

import { networkLinks } from '~/utils/constants'

const hovered1 = ref(false)
const hovered2 = ref(false)
const hovered3 = ref(false)
const hovered4 = ref(false)

const onMouseOver = (value: string) => {
  if (value === 'twitter') {
    hovered1.value = true
  } else if (value === 'note') {
    hovered2.value = true
  } else if (value === 'youtube') {
    hovered3.value = true
  } else {
    hovered4.value = true
  }
}

const onMouseLeave = (value: string) => {
  if (value === 'twitter') {
    hovered1.value = false
  } else if (value === 'note') {
    hovered2.value = false
  } else if (value === 'youtube') {
    hovered3.value = false
  } else {
    hovered4.value = false
  }
}
</script>

<template>
  <div
    class="grid grid-cols-[max-content_max-content] gap-2.5 justify-center lg:grid-cols-[max-content_max-content_max-content_max-content] lg:gap-5"
  >
    <a
      v-for="network in networkLinks"
      :id="`${network.value}Icon`"
      :key="network.value"
      :href="network.url"
      :title="network.description"
      class="flex justify-center items-center w-40 h-10 text-base font-bold hover:text-vue-blue hover:bg-white rounded-full border-2 shadow-sm transition lg:w-55 lg:h-13.5 lg:text-lg"
      target="_blank"
      rel="noopener"
      @mouseover="onMouseOver(network.value)"
      @mouseleave="onMouseLeave(network.value)"
      @focus="() => {}"
      @blur="() => {}"
    >
      <span class="pr-2">
        <template v-if="network.value === 'twitter'">
          <TwitterSvg
            :fill="hovered1 ? '#35495e' : '#fff'"
          />
        </template>
        <template v-if="network.value === 'note'">
          <NoteSvg
            :fill="hovered2 ? '#35495e' : '#fff'"
          />
        </template>
        <template v-if="network.value === 'youtube'">
          <YouTubeSvg
            :fill="hovered3 ? '#35495e' : '#fff'"
          />
        </template>
        <template v-if="network.value === 'github'">
          <GithubSvg
            :fill="hovered4 ? '#35495e' : '#fff'"
          />
        </template>
      </span>
      {{ network.title }}
    </a>
  </div>
</template>

<style scoped>
svg:hover {
  fill: #35495e;
  stroke: #35495e;
}
</style>
