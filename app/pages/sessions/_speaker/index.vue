<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import SessionSection from '~/components/SessionSection.vue'
interface ISpeaker {
  id: string
  name_jp: string
  name_jp_kana: string
  name_en: string
  bio: string
  session: string
  title: string
  company: string
  twitter: string
  facebook: string
  connpass: string
  github: string
  related_url: string
  image: string
}
// mock用のSpeaker
const mock_speaker = reactive<ISpeaker>({
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
})
</script>
<template>
  <div>
    <nav-page-section />
    <SectionTitle
      class="mb-10 lg:mb-20"
      title="Session"
      title-yamato="セッション"
    />
    <SessionSection :speaker="mock_speaker" />
  </div>
</template>