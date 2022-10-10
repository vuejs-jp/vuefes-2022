<script setup lang="ts">
import {
  message1,
  message2,
  message3,
  message4,
  message5,
  representative,
  representativeTwitterID,
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
</script>

<template>
  <section
    id="message"
    class="bg-white py-20 lg:py-40"
  >
    <div
      class="mx-auto max-w-[43.75rem] px-5 lg:flex lg:max-w-[74.375rem] lg:items-center lg:justify-between"
    >
      <SectionTitle
        class="mb-10 lg:mr-6 lg:mb-20"
        title="Message"
        title-yamato="想い"
      />
      <div class="text-sm leading-7 text-vue-blue lg:max-w-[45rem] lg:text-lg lg:leading-8">
        <p class="mb-6">{{ message1 }}</p>
        <p class="mb-6">{{ message2 }}</p>
        <p class="mb-6">{{ message3 }}</p>
        <p class="mb-6">{{ message4 }}</p>
        <p class="mb-6">{{ message5 }}</p>
        <p class="text-right">
          {{ representative }}（<a
            href="https://twitter.com/kazu_pon"
            target="_blank"
            rel="noopener"
            class="underline transition-opacity hover:opacity-60"
          >{{ representativeTwitterID }}</a>）
        </p>
      </div>
    </div>
  </section>
</template>
