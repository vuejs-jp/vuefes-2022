<script setup lang="ts">
import {
  speakersDescriptionText1,
  speakersDescriptionText2,
  speakersFormUrl,
  tweetUrl,
  tweetLink,
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
</script>

<template>
  <section
    id="speraker"
    class="py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="py-20 lg:py-40">
      <div class="px-5 mx-auto max-w-[43.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Speakers"
          title-yamato="スピーカー"
        />
        <p class="mb-5 text-sm leading-7 text-vue-blue lg:mb-10 lg:text-lg lg:leading-8">
          {{ speakersDescriptionText1 }}
        </p>
        <p class="mb-10 text-sm leading-7 text-vue-blue lg:mb-20 lg:text-lg lg:leading-8">
          {{ speakersDescriptionText2 }}
        </p>
        <div class="mb-10 text-center lg:mb-20">
          <LinkButtonField
            :link="speakersFormUrl"
            title-label="申し込みフォームを開く"
            :is-external-link="true"
          />
        </div>
        <p class="mb-5 text-sm leading-7 text-vue-blue lg:mb-10 lg:text-lg lg:leading-8">
          申し込み締め切りは、6/30（木）23:59 です。
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
