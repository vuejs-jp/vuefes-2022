<script setup lang="ts">
import SubmitButtonField from '~/components/forms/customize/SubmitButtonField.vue'
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'

import { introduction } from '~/utils/constants'

const name = ref('')
const email = ref('')
const detail = ref('')

const updateName = (value: string) => {
  name.value = value
}

const updateEmail = (value: string) => {
  email.value = value
}

const updateDetail = (value: string) => {
  detail.value = value
}

const createSubmit = () => {
  console.log('Clicked', { name: name.value, email: email.value, detail: detail.value })
}
</script>

<template>
  <section
    id="form"
    class="container py-40 px-0 m-0 max-w-full bg-tsuchi"
  >
    <form>
      <div class="flex flex-col justify-center items-center align-middle">
        <div class="mb-6 text-center md:px-12 px-90">
          <div class="flex flex-col justify-center items-center">
            <div class="text-6xl opacity-10 font-kokuryu-heading text-vue-blue">{{ `お問い合わせ` }}</div>
            <div class="-m-5 text-4xl font-extrabold lg:w-36 text-vue-blue">{{ `Contact` }}</div>
          </div>
          <div
            class="py-20 text-lg text-left text-vue-blue"
            v-html="introduction"
          />
        </div>
        <div class="px-36 mb-6 3xl:w-3/5 md:px-0 md:w-full">
          <InputField
            id-label="name"
            title-label="お名前"
            required
            @on-change="updateName"
          />
        </div>
        <div class="px-36 mb-6 3xl:w-3/5 md:px-0 md:w-full">
          <InputField
            id-label="email"
            title-label="メールアドレス"
            placeholder="yamada@gmail.com"
            type="email"
            required
            @on-change="updateEmail"
          />
        </div>
        <div class="px-36 mb-6 3xl:w-3/5 md:px-0 md:w-full">
          <TextareaField
            id-label="detail"
            title-label="お問い合わせ内容"
            :rows="3"
            required
            @on-change="updateDetail"
          />
        </div>
        <div class="mb-6 text-center md:px-12">
          <SubmitButtonField
            title-label="送信"
            @on-click="createSubmit"
          />
        </div>
      </div>
    </form>
  </section>
</template>
