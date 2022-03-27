<template>
  <header>
    <div class="py-4 px-2 xl:mx-12 lg:mx-4">
      <div>
        <nav class="flex justify-between items-center">
          <div class="flex items-center mr-5 text-white flex-no-shrink">
            <img
              :src="`/icon/vuefes_logo.svg`"
              :alt="conferenceTitle"
            >
          </div>
          <div class="grow items-center w-full lg:flex lg:w-auto">
            <div class="xl:mx-8 mt-2 font-bold text-vue-blue lg:grow">
              {{ subtitle }}
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { conferenceTitle, subtitle } from '~/utils/constants'
</script>
