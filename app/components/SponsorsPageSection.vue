<script setup lang="ts">
import {
  sponsorsDescriptionText,
  generalSponsorsApplicationUrl,
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
        <p class="mb-10 text-sm font-bold leading-7 text-vue-blue lg:text-lg lg:leading-8">
          ※PR文はプランによって掲載文字数が異なるので、後日入稿していただきます。申し込みフォームのPR文入力欄には適当な文字列を入力してお申し込みください。
        </p>
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          ※申し込みの管理には
          <a
            href="https://fortee.jp/"
            target="_blank"
            rel="noreferrer"
            class="underline hover:opacity-60 transition-opacity"
          >
            Fortee
          </a>
          を使用します。
        </p>
        <div class="mb-10 text-center lg:mb-10">
          <LinkButtonField
            :link="generalSponsorsApplicationUrl"
            title-label="申し込みフォームを開く"
            :is-external-link="true"
          />
        </div>
        <p class="mb-5 text-sm leading-7 text-vue-blue lg:mb-10 lg:text-lg lg:leading-8">
          申し込み期限: 2022/7/15（金）23:59:59 まで
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
