<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import {
  storeDescription,
  goodsList,
  storeSupplement
} from '~/utils/store.constants'
</script>

<template>
  <section
    id="store"
    class="bg-store py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 lg:py-40">
      <div class="mx-auto max-w-1190 px-5">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Vue Fes Store"
          title-yamato="ストア"
        />
        <div class="mx-auto mb-10 max-w-700 lg:mb-20">
          <p class="paragraph mb-6">
            {{ storeDescription }}
          </p>
        </div>
        <div class="mx-auto mb-10 flex flex-wrap justify-between gap-14 lg:mb-20">
          <div
            v-for="(goods, index) in goodsList"
            :key="index"
            class="w-full md:w-[45%] xl:w-[30%]"
          >
            <div class="mb-10 flex aspect-square md:mb-5">
              <img
                :alt="`${goods.name}のサンプル画像`"
                :src="`/store/${goods.image}`"
                loading="lazy"
                class="mx-auto block max-h-full object-contain"
              >
            </div>
            <p class="text-center text-2xl font-bold text-vue-blue">
              {{ goods.name }}
            </p>
            <p class="mb-10 text-center text-2xl font-bold text-vue-blue">
              {{ goods.price }}
            </p>
            <p class="mb-5 text-sm text-vue-blue md:min-h-[80px]">
              {{ goods.description }}
            </p>
            <p
              class="whitespace-pre-line bg-gray-50 p-6 text-sm font-bold text-vue-blue"
              v-text="goods.specification"
            />
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
