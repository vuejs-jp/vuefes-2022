<script setup lang="ts">
import { representative } from '~/utils/constants'
</script>

<template>
  <section
    id="message"
    class="py-20 bg-white lg:py-40"
  >
    <div
      class="px-5 mx-auto max-w-[43.75rem] lg:flex lg:gap-6 lg:justify-between lg:items-center lg:max-w-[74.375rem]"
    >
      <div class="shrink-0 mb-10 text-center lg:mb-20">
        <div class="font-kokuryu-heading text-[2.5rem] text-vue-blue opacity-10 lg:text-[5rem]">
          ことづけ
        </div>
        <h2 class="-mt-6 text-xl font-extrabold text-vue-blue lg:-mt-10 lg:text-[2.5rem]">
          Message
        </h2>
      </div>
      <div class="text-sm leading-7 text-vue-blue lg:max-w-[45rem] lg:text-lg lg:leading-8">
        <p class="mb-6">
          Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。文字通り Fes =
          お祭りのように Vue.js
          を共に盛り上げ、共に学び、そしてなによりも共に楽しむために誕生しました。
        </p>
        <p class="mb-6">
          残念ながら 2019 年は令和元年東日本台風により、2020
          年以降は新型コロナウイルス感染症により中止となり、痛恨の極みとなりましたが、私たちはカンファレンス開催を諦めず、力を貯めつつ活動を続けてきました。
        </p>
        <p class="mb-6">
          この数年で Vue.js を取り巻く環境は激変しました。Vue.js 3.0 のリリース、そして Vue.js
          の作者 Evan You 氏によって新たな OSS として Vite.js が作られ、JavaScript
          コミュニティに放たれました。Vue.js や Nuxt.js といった OSS はもちろん、それ以外に Vitest
          といった Vue.js 以外の新しい OSS エコシステムが形成しつつあります。
        </p>
        <p class="mb-6">
          そうした状況で盛り上がる中、この度 2022 年、オンラインカンファレンスとして Vue Fes Japan
          の開催を決定しましたので、ここにお知らせいたします。
        </p>
        <p class="mb-6">ぜひ、一緒にカンファレンスを楽しみましょう！</p>
        <p class="text-right">{{ representative }}</p>
      </div>
    </div>
  </section>
</template>
