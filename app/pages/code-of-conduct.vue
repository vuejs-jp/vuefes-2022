<script setup lang="ts">
import { linkUrl } from '~/utils/constants'
import NavPageSection from '~/components/NavPageSection.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
</script>

<template>
  <div>
    <nav-page-section />
    <SectionTitle
      class="mb-10 lg:mb-20"
      title="Code of Conduct"
      title-yamato="行動規範"
    />
    <div class="px-5 mx-auto max-w-[43.75rem] text-sm leading-7 text-vue-blue lg:max-w-[73.75rem] lg:text-lg lg:leading-8">
      <p class="mb-16">Vue Fes Japan のすべての参加者、スピーカー、スポンサー、スタッフは、オープンかつ友好的な環境を育むため、以下の行動規範に同意していただく必要があります。主催者である Vue.js 日本ユーザーグループは、この規範の実施を遵守します。誰にとっても安全な環境を守るために、すべての参加者のご協力をお願いいたします。</p>

      <h2 class="mb-8 text-3xl font-bold">何かお困りですか？</h2>
      <p class="mb-8">Vue.js 日本ユーザーグループへのお問い合わせは、 フォームよりお願いいたします。また、Vue Fes Japan 会場内でお困りの場合は、お近くのスタッフまでお尋ねください。</p>

      <div class="mb-32 text-center">
        <LinkButtonField
          :link="linkUrl"
          title-label="トップに戻る"
        />
      </div>
    </div>
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
