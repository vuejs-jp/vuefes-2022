<script setup lang="ts">
import ExplainText from '~/components/ExplainText.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import {
  childcareDescription,
  childcareCostSupportConditions,
  childcareLinkText
} from '~/utils/events.constants'
</script>

<template>
  <div>
    <div class="relative z-10 mx-auto w-[12.5rem] bg-white lg:w-[21.25rem]">
      <h3 class="text-xl font-bold text-center text-vue-blue lg:text-4xl">
        託児サポート
      </h3>
    </div>
    <div class="p-10 -mt-4 text-vue-blue border border-vue-blue md:p-20 lg:-mt-5">
      <img
        src="/events/childcare.png"
        alt="託児サポートのイメージ画像"
        loading="lazy"
        class="mb-10"
      >
      <ExplainText
        class="mb-10"
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
      <ExplainText
        class="mb-10 lg:mb-20"
        :explain="childcareLinkText"
      />
      <!-- TODO: リンク先が決まり次第修正 -->
      <div class="text-center">
        <LinkButtonField
          link=""
          title-label="託児サポートに申し込む"
        />
      </div>
    </div>
  </div>
</template>
