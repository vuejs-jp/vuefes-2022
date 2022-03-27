<script setup lang="ts">
import TwitterSvg from '~/static/icon/twitter_logo.svg?inline'
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
  <div class="flex justify-center items-center pb-8 md:flex-wrap md:px-48">
    <a
      v-for="network in networkLinks"
      :key="network.value"
      :href="network.url"
      :title="network.description"
      class="flex justify-center items-center px-4 mr-2 mb-0 w-40 h-10 hover:text-vue-blue no-underline hover:bg-white rounded-full border-2 border-gray-200 shadow-sm md:mr-0 md:mb-5"
      @mouseover="onMouseOver(network.value)"
      @focus="onMouseOver(network.value)"
      @mouseout="onMouseLeave(network.value)"
      @blur="onMouseLeave(network.value)"
    >
      <div class="pr-2 text-right rounded-full">
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
      </div>
      <div class="text-left">
        <p class="text-xs font-medium">{{ network.title }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
svg:hover {
  fill: #35495e;
  stroke: #35495e;
}
</style>
