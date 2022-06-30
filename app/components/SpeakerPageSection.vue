<script setup lang="ts">
import {
  speakersFormUrl,
  tweetUrl,
  tweetLink,
} from '~/utils/constants'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SpeakerPageHeading from '~/components/SpeakerPageHeading.vue'
import SpeakerPageBlock from '~/components/SpeakerPageBlock.vue'
import SpeakerLTSection from '~/components/SpeakerLTSection.vue'

const mock_speaker = {
  id: '1',
  name_jp: '名前入ります．',
  name_jp_kana: '日本語カナ',
  name_en: '',
  bio: '本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．',
  session: '本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．',
  title: 'タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．',
  company: '社名等入ります．社名等入ります．',
  twitter: '',
  facebook: '',
  connpass: '',
  github: '',
  related_url: '',
  image: 'https://placehold.jp/150x150.png'
}
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
          Vueとそのエコシステムについて、あなただけが持つ知見と経験を、日本最大級の Vue.js カンファレンスでぜひ日本中に共有してください。
        </p>
        <SpeakerPageHeading
          class="mb-4 lg:mb-8"
          text="募集方法"
        />
        <p class="mb-4 text-sm leading-7 text-vue-blue lg:mb-8 lg:text-lg lg:leading-8">
          Vue Fes Japan Online 2022 では、スピーカー発表を広く一般から募集するため、CFP（Call for Papers）の仕組みを利用します。<br>Vue.js に関する具体的なセッション内容をご応募いただき、Vue Fes Japan Online 2022 実行委員会が選考の上、正式なセッションとして採用します。
        </p>
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          ※応募には
          <a
            href="https://fortee.jp/"
            target="_blank"
            rel="noreferrer"
            class="underline hover:opacity-60 transition-opacity"
          >
            Fortee
          </a>
          アカウントの作成が必要です。
        </p>
        <SpeakerPageHeading
          class="mb-4 lg:mb-8"
          text="募集スケジュール"
        />
        <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
          応募期限: 2022/7/18（月）23:59:59 まで
        </p>
        <div class="mb-8 text-center lg:mb-16">
          <LinkButtonField
            :link="speakersFormUrl"
            title-label="応募フォームを開く"
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
        <section class="grid grid-cols-2 gap-x-4 gap-y-6 mt-20 md:grid-cols-3 md:gap-10 lg:grid-cols-5 lg:gap-6">
          <SpeakerPageBlock
            v-for="i in 15"
            :key="i"
            :speaker="mock_speaker"
          />
        </section>
        <SpeakerLTSection />
      </div>
    </div>
  </section>
</template>
