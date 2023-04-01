<script setup lang="ts">
import TwitterSvg from '~/assets/icon/twitter_logo.svg'
import NoteSvg from '~/assets/icon/note_logo.svg'
import YouTubeSvg from '~/assets/icon/youtube_logo.svg'
import GitHubSvg from '~/assets/icon/github_logo.svg'
import { networkLinks } from '~/utils/constants'
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
          <GitHubSvg />
        </template>
      </span>
      {{ network.title }}
    </a>
  </div>
</template>

<style scoped>
a {
  border: 1px #fff solid;
  background: #35495e;
}

a svg {
  fill: #fff;
}

a:hover {
  color: #35495e;
  border: 1px #35495e solid;
  background: #fff;
}

a:hover svg {
  fill: #35495e;
}
</style>