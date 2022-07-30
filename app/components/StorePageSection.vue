<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import {
  storeDescription,
  orderAcceptancePeriod,
  productShippingSchedule,
  goodsList,
  storeSupplement
} from '~/utils/store.constants'
</script>

<template>
  <section
    id="store"
    class="py-10 px-5 bg-store md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="px-5 mx-auto max-w-[1300px]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Vue Fes Store"
          title-yamato="ストア"
        />
        <div class="mx-auto mb-10 w-4/5 lg:mb-20 lg:w-1/2">
          <p class="mb-10 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
            {{ storeDescription }}
          </p>
          <p class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
            {{ orderAcceptancePeriod }}
          </p>
          <p class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8">
            {{ productShippingSchedule }}
          </p>
        </div>
        <div class="flex flex-wrap gap-14 justify-between mx-auto mb-10 lg:mb-20">
          <div
            v-for="(goods, index) in goodsList"
            :key="index"
            class="w-full md:w-[45%] xl:w-[30%]"
          >
            <div class="mb-10 md:mb-5 md:h-[320px] lg:h-[360px]">
              <img
                :alt="`${goods.name}のサンプル画像`"
                :src="`/store/${goods.image}`"
                loading="lazy"
                class="block object-contain mx-auto h-full"
              >
            </div>
            <p class="text-2xl font-bold text-center text-vue-blue">
              {{ goods.name }}
            </p>
            <p class="mb-10 text-2xl font-bold text-center text-vue-blue">
              {{ goods.price }}
            </p>
            <p class="mb-5 min-h-[60px] text-sm text-vue-blue">
              {{ goods.description }}
            </p>
            <p
              class="p-6 text-sm font-bold text-vue-blue whitespace-pre-line bg-gray-50"
              v-text="goods.specification"
            />
          </div>
        </div>
        <div class="mx-auto">
          <p class="text-sm font-bold leading-7 text-vue-blue lg:text-lg lg:leading-8">
            {{ storeSupplement }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
