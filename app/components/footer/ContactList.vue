<script setup lang="ts">
import TwitterSvg from '~/static/icon/twitter_logo-invert.svg?inline'
import NoteSvg from '~/static/icon/note_logo.svg?inline'
import YouTubeSvg from '~/static/icon/youtube_logo.svg?inline'
import GithubSvg from '~/static/icon/github_logo.svg?inline'

import { networkLinks } from '~/utils/constants'

const onMouseOver = (value: string) => {
  if (value === 'twitter') {
    document.getElementById('twitterIcon').setAttribute('fill', '#35495e')
    document.getElementById('twitterIcon').setAttribute('stroke', '#35495e')
  } else if (value === 'note') {
    document.getElementById('noteIcon').setAttribute('fill', '#35495e')
    document.getElementById('noteIcon').setAttribute('stroke', '#35495e')
  } else if (value === 'youtube') {
    document.getElementById('youtubeIcon').setAttribute('fill', '#35495e')
    document.getElementById('youtubeIcon').setAttribute('stroke', '#35495e')
  } else {
    document.getElementById('githubIcon').setAttribute('fill', '#35495e')
    document.getElementById('githubIcon').setAttribute('stroke', '#35495e')
  }
}

const onMouseLeave = (value: string) => {
  if (value === 'twitter') {
    document.getElementById('twitterIcon').setAttribute('fill', '#fff')
    document.getElementById('twitterIcon').setAttribute('stroke', '#fff')
  } else if (value === 'note') {
    document.getElementById('noteIcon').setAttribute('fill', '#fff')
    document.getElementById('noteIcon').setAttribute('stroke', '#fff')
  } else if (value === 'youtube') {
    document.getElementById('youtubeIcon').setAttribute('fill', '#fff')
    document.getElementById('youtubeIcon').setAttribute('stroke', '#fff')
  } else {
    document.getElementById('githubIcon').setAttribute('fill', '#fff')
    document.getElementById('githubIcon').setAttribute('stroke', '#fff')
  }
}
</script>

<template>
  <div
    class="grid grid-cols-[max-content_max-content] gap-2.5 justify-center lg:grid-cols-[max-content_max-content_max-content_max-content] lg:gap-5"
  >
    <a
      v-for="network in networkLinks"
      :key="network.value"
      :href="network.url"
      :title="network.description"
      class="flex justify-center items-center w-40 h-10 text-base font-bold hover:text-vue-blue hover:bg-white rounded-full border-2 shadow-sm transition lg:w-[13.75rem] lg:h-[3.375rem] lg:text-lg"
      @mouseover="onMouseOver(network.value)"
      @focus="onMouseOver(network.value)"
      @mouseout="onMouseLeave(network.value)"
      @blur="onMouseLeave(network.value)"
    >
      <span class="pr-2">
        <template v-if="network.value === 'twitter'">
          <TwitterSvg />
        </template>
        <template v-if="network.value === 'note'">
          <NoteSvg />
        </template>
        <template v-if="network.value === 'youtube'">
          <YouTubeSvg />
        </template>
        <template v-if="network.value === 'github'">
          <GithubSvg />
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
