<script setup lang="ts">
import SpeakerPageHeading from '~/components/speakers/SpeakerPageHeading.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
</script>

<template>
  <section class="border border-vue-blue p-4 md:px-10 lg:py-10 lg:px-20">
    <h3 class="bg-img mx-auto -mt-[2.0rem] mb-6 w-[14.375rem] text-center text-xl font-bold text-vue-blue md:mb-8 lg:-mt-[3.6rem] lg:mb-14 lg:w-[26.875rem] lg:text-4xl">
      LT募集について
    </h3>
    <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-12 lg:text-lg lg:leading-8">
      Vue Fes Japan Online 2022 ではLT発表者を募集します。
      テーマは「Vue または Vue を取り巻くエコシステムに関する内容」、登壇時間は5分です。
      Vueとそのエコシステムについて、あなたが持つ知見と経験を、日本最大級の Vue.js カンファレンスでぜひ日本中に共有してください。
    </p>
    <SpeakerPageHeading
      class="mb-4 lg:mb-8"
      text="募集方法"
    />
    <p class="mb-4 text-sm leading-7 text-vue-blue lg:mb-8 lg:text-lg lg:leading-8">
      Vue Fes Japan Online 2022 では、LT発表枠を広く一般から募集するため、CFP（Call for Papers）の仕組みを利用します。
      Vue.js に関する具体的な登壇内容をご応募いただき、Vue Fes Japan Online 2022 実行委員会が選考の上、採用します。
    </p>
    <p class="mb-8 text-sm leading-7 text-vue-blue lg:mb-12 lg:text-lg lg:leading-8">
      ※応募には Fortee アカウントの作成が必要です。
    </p>
    <SpeakerPageHeading
      class="mb-4 lg:mb-8"
      text="募集スケジュール"
    />
    <p class="mb-12 text-sm leading-7 text-vue-blue lg:mb-16 lg:text-lg lg:leading-8">
      応募期限：2022/7/31（日）23:59:59 まで
    </p>
    <div class="mb-6 text-center">
      <LinkButtonField
        link="https://fortee.jp/vuefes-2022/speaker/callfor/lightning-talk/callfor"
        title-label="LTを応募する"
        :is-external-link="true"
      />
    </div>
  </section>
</template>

<style scoped>
.bg-img {
  background-image: url("/img/bg.png");
}
</style>
