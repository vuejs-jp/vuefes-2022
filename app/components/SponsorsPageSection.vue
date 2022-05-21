<script setup lang="ts">
import {
  sponsorsDescriptionText,
  previousSponsorsApplicationUrl,
  sponsorsDocumentUrl,
  tweetUrl,
  tweetLink,
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
</script>

<template>
  <section
    id="sponsors"
    class="py-10 px-5 bg-suponsors md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="px-5 mx-auto max-w-[43.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <p class="mb-10 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
          {{ sponsorsDescriptionText }}
        </p>
        <div class="mb-10 text-center lg:mb-10">
          <LinkButtonField
            :link="previousSponsorsApplicationUrl"
            title-label="申し込みフォームを開く"
            :is-external-link="true"
          />
        </div>
        <p class="mb-5 text-sm leading-7 text-vue-blue lg:mb-10 lg:text-lg lg:leading-8">
          5/23 (月) ～ 5/29 (日) は、<span class="font-bold">Vue Fes Japan 2019 のスポンサー（当時）各社様限定の先行申し込み</span>の受付期間です。該当社以外のお申し込みは無効となりますのでご注意ください。一般申し込みは
          5/30 (月) 10:00 より開始予定です。
        </p>
        <p class="mb-10 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
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
        <div class="mb-0 text-center">
          <LinkButtonField
            :link="sponsorsDocumentUrl"
            title-label="スポンサー資料を開く"
            :is-external-link="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
