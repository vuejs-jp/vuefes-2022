<script lang="ts">
import SubmitButtonField from '~/components/forms/customize/SubmitButtonField.vue'
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SectionTitle from '~/components/SectionTitle.vue'

import useForm from '~/composables/useForm'

import { introduction } from '~/utils/constants'

export default {
  components: {
    SubmitButtonField,
    InputField,
    TextareaField,
    SectionTitle,
  },
  setup() {
    const formComposable = useForm()
    return { ...formComposable, introduction }
  },
}
</script>

<template>
  <section
    id="form"
    class="py-20 lg:py-40"
  >
    <div class="px-5 mx-auto max-w-[43.75rem]">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Contact"
        title-yamato="お問い合わせ"
      />
      <p
        class="mb-10 text-sm leading-7 text-vue-blue lg:mb-20 lg:text-lg lg:leading-8"
        v-html="introduction"
      />
      <p
        v-if="isSent"
        class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
      >
        お問い合わせありがとうございます。担当者より確認次第、ご返答させていただきます。
      </p>
      <div v-else>
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          netlify
          @submit.prevent
        >
          <div class="hidden">
            <p>
              <label for="bot-field">
                Don’t fill this out:
                <input
                  id="bot-field"
                  name="bot-field"
                >
              </label>
            </p>
            <input
              type="hidden"
              name="form-name"
              value="contact"
            >
          </div>
          <div class="mb-10 w-full lg:mb-20">
            <InputField
              name="name"
              id-label="name"
              title-label="お名前"
              placeholder="山田太郎"
              required
              @input="updateName"
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
              name="email"
              id-label="email"
              title-label="メールアドレス"
              placeholder="yamada@gmail.com"
              type="email"
              required
              @input="updateEmail"
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
              name="detail"
              id-label="detail"
              title-label="お問い合わせ内容"
              :rows="3"
              required
              @input="updateDetail"
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
            <p
              v-if="submitError"
              class="mt-2.5 text-sm text-sangosyu"
            >
              {{ submitError }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
