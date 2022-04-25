<script setup lang="ts">
import {
  sponsorsDescriptionText,
  sponsorsPublicScheduleText,
  sponsorsDocumentUrl,
  tweetUrl,
  tweetLink
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
import ButtonField from '~/components/forms/ButtonField.vue'

const open = () => {
  window.open(sponsorsDocumentUrl, '__blank')
}
</script>

<template>
  <section
    id="sponsors"
    class="p-10 bg-suponsors lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div
        class="px-10 mx-auto max-w-[43.75rem]"
      >
        <SectionTitle
          class="mb-20 lg:mb-10"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <p class="mb-20 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
          {{ sponsorsDescriptionText }}
        </p>
        <div class="mb-20 text-center">
          <ButtonField
            title-label="スポンサー資料を開く"
            @on-click="open"
          />
        </div>
        <p class="mb-10 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
          {{ sponsorsPublicScheduleText }}
        </p>
        <p class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
          最新情報は、
          <a
            :href="tweetUrl"
            target="_blank"
            rel="noreferrer"
            class="underline hover:opacity-60 transition-opacity"
          >
            {{ tweetLink }}
          </a>
          をご確認ください。
        </p>
      </div>
    </div>
  </section>
</template>
