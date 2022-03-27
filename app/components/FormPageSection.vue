<script lang="ts">
import SubmitButtonField from '~/components/forms/customize/SubmitButtonField.vue'
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'

import useForm from '~/hooks/useForm'

import { introduction } from '~/utils/constants'

export default {
  components: {
    SubmitButtonField,
    InputField,
    TextareaField
  },
  setup() {
    const formComposable = useForm()
    return { ...formComposable, introduction }
  }
}
</script>

<template>
  <section
    id="form"
    class="py-20 lg:py-40"
  >
    <div class="px-5 mx-auto max-w-[43.75rem]">
      <div class="mb-10 text-center lg:mb-20">
        <div class="font-kokuryu-heading text-[2.5rem] text-vue-blue opacity-10 lg:text-[5rem]">
          お問い合わせ
        </div>
        <h2 class="-mt-6 text-xl font-extrabold text-vue-blue lg:-mt-10 lg:text-[2.5rem]">
          Contact
        </h2>
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
              id-label="name"
              title-label="お名前"
              placeholder="山田太郎"
              required
              @on-input="updateName"
            />
            <p
              v-if="nameError"
              class="mt-2.5 text-sm text-sangosyu"
            >
              {{ nameError }}
            </p>
          </div>
          <div class="mb-10 w-full lg:mb-20">
            <InputField
              id-label="email"
              title-label="メールアドレス"
              placeholder="yamada@gmail.com"
              type="email"
              required
              @on-input="updateEmail"
            />
            <p
              v-if="emailError"
              class="mt-2.5 text-sm text-sangosyu"
            >
              {{ emailError }}
            </p>
          </div>
          <div class="mb-10 w-full lg:mb-20">
            <TextareaField
              id-label="detail"
              title-label="お問い合わせ内容"
              :rows="3"
              required
              @on-input="updateDetail"
            />
            <p
              v-if="detailError"
              class="mt-2.5 text-sm text-sangosyu"
            >
              {{ detailError }}
            </p>
          </div>
          <div class="text-center">
            <SubmitButtonField
              title-label="送信"
              :disabled="!isSubmitting"
              @click="createSubmit"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
