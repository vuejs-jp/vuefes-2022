<script setup lang="ts">
import ExplainText from '~/components/ExplainText.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import {
  childcareDescription,
  childcareCostSupportConditions,
  childcareNote,
  childcareCaution
} from '~/utils/events.constants'
</script>

<template>
  <div>
    <div class="relative z-10 mx-auto w-[12.5rem] bg-white lg:w-[21.25rem]">
      <h3 class="text-center text-xl font-bold text-vue-blue lg:text-4xl">
        託児サポート
      </h3>
    </div>
    <div class="-mt-4 border border-vue-blue py-10 px-5 text-vue-blue md:p-20 lg:-mt-5">
      <div class="mb-10 aspect-[738/269]">
        <img
          src="/events/childcare.png"
          alt="託児サポートのイメージ画像"
          loading="lazy"
        >
      </div>
      <ExplainText
        class="mb-5 md:mb-10"
        :explain="childcareDescription"
      />
      <div class="mb-10 pl-5 lg:pl-10">
        <ul class="list-inside list-disc">
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
