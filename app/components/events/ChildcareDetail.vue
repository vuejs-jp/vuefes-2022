<script setup lang="ts">
import ExplainText from '~/components/ExplainText.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import { urlBasePath } from '~/utils/constants'
import {
  childcareDescription,
  childcareCostSupportConditions,
  childcareNote,
  childcareCaution
} from '~/utils/events.constants'
</script>

<template>
  <div>
    <div class="relative z-10 mx-auto w-50 bg-white lg:w-85">
      <h3 class="text-xl font-bold text-center text-vue-blue lg:text-4xl">
        託児サポート
      </h3>
    </div>
    <div class="py-10 px-5 -mt-4 text-vue-blue border border-vue-blue md:p-20 lg:-mt-5">
      <div class="aspect-[738/269] mb-10">
        <img
          :src="`${urlBasePath}/events/childcare.png`"
          alt="託児サポートのイメージ画像"
          loading="lazy"
        >
      </div>
      <ExplainText
        class="mb-5 md:mb-10"
        :explain="childcareDescription"
      />
      <div class="pl-5 mb-10 lg:pl-10">
        <ul class="list-disc list-inside">
          <li
            v-for="(condition, index) in childcareCostSupportConditions"
            :key="index"
            class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
          >
            {{ condition }}
          </li>
        </ul>
      </div>
      <div class="text-center">
        <LinkButtonField
          link="https://docs.google.com/forms/d/e/1FAIpQLSeOteOtPhi_HA4i9Ba9RSq6OK7lCmJJCn4YiK2YgRUGDM5TSQ/viewform"
          title-label="託児サポートに申し込む"
          is-external-link
          class="mb-5 md:mb-10"
        />
      </div>
      <ExplainText
        class="mb-5"
        :explain="childcareNote"
      />
      <p class="text-sm font-bold leading-7 md:text-base">{{ childcareCaution }}</p>
    </div>
  </div>
</template>
