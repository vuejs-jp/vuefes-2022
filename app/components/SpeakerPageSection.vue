<script setup lang="ts">
import {
  speakersFormUrl,
  tweetUrl,
  tweetLink,
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SpeakerPageHeading from '~/components/SpeakerPageHeading.vue'
</script>

<template>
  <section
    id="speakers"
    class="px-5 md:px-10"
  >
    <div class="py-20 lg:py-40">
      <div class="px-5 mx-auto max-w-[43.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Speakers"
          title-yamato="スピーカー"
        />
        <p class="mb-4 text-sm leading-7 text-vue-blue lg:mb-8 lg:text-lg lg:leading-8">
          Vue Fes Japan Online 2022 に登壇してみませんか？
        </p>
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          VueとVueを取り巻くエコシステムについて、あなただけが持つ、この世に一つの知見と経験を、ぜひ日本中に共有してください。
        </p>
        <SpeakerPageHeading
          class="mb-4 lg:mb-8"
          text="募集方法"
        />
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          Vue Fes Japan Online 2022 では、スピーカー発表を広く一般から募集するため、CFP（Call for Papers）の仕組みを利用します。<br>Vue.js に関する具体的なセッション内容をご応募いただき、Vue Fes Japan Online 2022 実行委員会が選考の上、正式なセッションとして採用します。
        </p>
        <SpeakerPageHeading
          class="mb-4 lg:mb-8"
          text="募集スケジュール"
        />
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          応募期限: 2022/6/30（木）23:59:59 まで
        </p>
        <div class="mb-8 text-center lg:mb-16">
          <LinkButtonField
            :link="speakersFormUrl"
            title-label="申し込みフォームを開く"
            :is-external-link="true"
          />
        </div>
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
