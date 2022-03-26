<script setup lang="ts">
import SubmitButtonField from '~/components/forms/customize/SubmitButtonField.vue'
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'

import { introduction } from '~/utils/constants'

const name = ref('')
const email = ref('')
const detail = ref('')

const createSubmit = () => {
  console.log('Clicked', { name: name.value, email: email.value, detail: detail.value })
}
</script>

<template>
  <section
    id="form"
    class="py-40"
  >
    <form @submit.prevent>
      <div class="flex flex-col justify-center items-center align-middle">
        <div class="3xl:px-0 mb-6 3xl:w-3/5 text-center md:px-36">
          <div class="flex flex-col justify-center items-center">
            <div class="text-6xl opacity-10 font-kokuryu-heading text-vue-blue">
              {{ `お問い合わせ` }}
            </div>
            <div class="-m-5 text-4xl font-extrabold lg:w-36 text-vue-blue">{{ `Contact` }}</div>
          </div>
          <div
            class="py-20 text-lg text-left text-vue-blue"
            v-html="introduction"
          />
        </div>
        <div class="3xl:px-0 mb-6 3xl:w-2/5 md:px-36">
          <InputField
            v-model.trim="name"
            id-label="name"
            title-label="お名前"
            placeholder="山田太郎"
            required
          />
        </div>
        <div class="3xl:px-0 mb-6 3xl:w-2/5 md:px-36">
          <InputField
            v-model.trim="email"
            id-label="email"
            title-label="メールアドレス"
            placeholder="yamada@gmail.com"
            type="email"
            required
          />
        </div>
        <div class="3xl:px-0 mb-6 3xl:w-2/5 md:px-36">
          <TextareaField
            v-model.trim="detail"
            id-label="detail"
            title-label="お問い合わせ内容"
            :rows="3"
            required
          />
        </div>
        <div class="mb-6 text-center md:px-12">
          <SubmitButtonField
            title-label="送信"
            @click="createSubmit"
          />
        </div>
      </div>
    </form>
  </section>
</template>
