<script setup lang="ts">
import SubmitButtonField from '~/components/forms/customize/SubmitButtonField.vue'
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'

import { introduction } from '~/utils/constants'

const name = ref('')
const email = ref('')
const detail = ref('')
const isSended = ref(false)

const createSubmit = () => {
  console.log('Clicked', { name: name.value, email: email.value, detail: detail.value })
  isSended.value = true
}
</script>

<template>
  <section
    id="form"
    class="py-20 lg:py-40"
  >
    <div class="px-5 mx-auto max-w-[700px]">
      <div class="mb-10 text-center lg:mb-20">
        <div class="font-kokuryu-heading text-[40px] text-vue-blue opacity-10 lg:text-[80px]">
          お問い合わせ
        </div>
        <h2 class="-mt-6 text-xl font-extrabold text-vue-blue lg:-mt-10 lg:text-[40px]">Contact</h2>
      </div>
      <p
        class="mb-10 text-sm leading-7 text-vue-blue lg:mb-20 lg:text-lg lg:leading-8"
        v-html="introduction"
      />
      <p
        v-if="isSended"
        class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
      >
        お問い合わせありがとうございます。担当者より確認次第、ご返答させていただきます。
      </p>
      <div v-else>
        <form @submit.prevent>
          <div class="mb-10 w-full lg:mb-20">
            <InputField
              v-model.trim="name"
              id-label="name"
              title-label="お名前"
              placeholder="山田太郎"
              required
            />
          </div>
          <div class="mb-10 w-full lg:mb-20">
            <InputField
              v-model.trim="email"
              id-label="email"
              title-label="メールアドレス"
              placeholder="yamada@gmail.com"
              type="email"
              required
            />
          </div>
          <div class="mb-10 w-full lg:mb-20">
            <TextareaField
              v-model.trim="detail"
              id-label="detail"
              title-label="お問い合わせ内容"
              :rows="3"
              required
            />
          </div>
          <div class="text-center">
            <SubmitButtonField
              title-label="送信"
              @click="createSubmit"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
