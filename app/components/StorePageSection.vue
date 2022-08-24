<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import {
  storeDescription,
  storeDescription2,
  storeDescription3,
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
      <div class="px-5 mx-auto max-w-1190">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Vue Fes Store"
          title-yamato="ストア"
        />
        <div class="mx-auto mb-10 max-w-700 lg:mb-20">
          <p class="mb-6 paragraph">
            {{ storeDescription }}
          </p>
          <p class="mb-6 paragraph">
            {{ storeDescription2 }}
          </p>
          <p class="paragraph">
            {{ orderAcceptancePeriod }}
          </p>
          <p class="mb-6 paragraph">
            {{ productShippingSchedule }}
          </p>
          <p class="paragraph">
            ■送料について
          </p>
          <p class="paragraph">
            {{ storeDescription3 }}
          </p>
        </div>
        <div class="flex flex-wrap gap-14 justify-between mx-auto mb-10 lg:mb-20">
          <div
            v-for="(goods, index) in goodsList"
            :key="index"
            class="w-full md:w-[45%] xl:w-[30%]"
          >
            <a
              :href="goods.url"
              target="_blank"
              rel="noreferrer"
            >
              <div class="flex mb-10 md:mb-5 md:h-[320px] lg:h-[360px]">
                <img
                  :alt="`${goods.name}のサンプル画像`"
                  :src="`/store/${goods.image}`"
                  loading="lazy"
                  class="block object-contain mx-auto max-h-full"
                >
              </div>
              <p class="text-2xl font-bold text-center text-vue-blue">
                {{ goods.name }}
              </p>
              <p class="mb-10 text-2xl font-bold text-center text-vue-blue">
                {{ goods.price }}
              </p>
              <p class="mb-5 text-sm text-vue-blue md:min-h-[80px]">
                {{ goods.description }}
              </p>
              <p
                class="p-6 text-sm font-bold text-vue-blue whitespace-pre-line bg-gray-50"
                v-text="goods.specification"
              />
            </a>
          </div>
        </div>
        <div class="mx-auto">
          <p class="text-xs leading-5 text-vue-blue md:text-base">
            {{ storeSupplement }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.paragraph {
  @apply text-sm leading-7 lg:text-lg lg:leading-8 text-vue-blue
}
</style>
