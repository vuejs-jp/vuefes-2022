<script setup lang="ts">
import TwitterSvg from '~/assets/icon/twitter_logo-invert.svg'
import NoteSvg from '~/assets/icon/note_logo.svg'
import YouTubeSvg from '~/assets/icon/youtube_logo.svg'
import GitHubSvg from '~/assets/icon/github_logo.svg'

import { networkLinks } from '~/utils/constants'

const mouseTwitter = ref(false)
const mouseNote = ref(false)
const mouseYouTube = ref(false)
const mouseGitHub = ref(false)

const onMouseOver = (value: string) => {
  if (value === 'twitter') {
    mouseTwitter.value = true
  } else if (value === 'note') {
    mouseNote.value = true
  } else if (value === 'youtube') {
    mouseYouTube.value = true
  } else {
    mouseGitHub.value = true
  }
}

const onMouseLeave = (value: string) => {
  if (value === 'twitter') {
    mouseTwitter.value = false
  } else if (value === 'note') {
    mouseNote.value = false
  } else if (value === 'youtube') {
    mouseYouTube.value = false
  } else {
    mouseGitHub.value = false
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
      @focus="onMouseOver(network.value)"
      @blur="onMouseLeave(network.value)"
      @mouseover="onMouseOver(network.value)"
      @mouseleave="onMouseLeave(network.value)"
    >
      <span class="pr-2">
        <template v-if="network.value === 'twitter'">
          <TwitterSvg :style="{ stroke: mouseTwitter ? '#35495e' : '#fff', fill: mouseTwitter ? '#35495e' : '#fff' }" />
        </template>
        <template v-if="network.value === 'note'">
          <NoteSvg :style="{ stroke: mouseNote ? '#35495e' : '#fff', fill: mouseTwitter ? '#35495e' : '#fff' }" />
        </template>
        <template v-if="network.value === 'youtube'">
          <YouTubeSvg :style="{ stroke: mouseYouTube ? '#35495e' : '#fff', fill: mouseTwitter ? '#35495e' : '#fff' }" />
        </template>
        <template v-if="network.value === 'github'">
          <GitHubSvg :style="{ stroke: mouseGitHub ? '#35495e' : '#fff', fill: mouseTwitter ? '#35495e' : '#fff' }" />
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