<script setup lang="ts">
import { urlBasePath } from '~/utils/constants'
import { staffList } from '~/utils/staffs.constants'
import SectionTitle from '~/components/SectionTitle.vue'

const showStaffs = computed(() => staffList.filter((staff) => staff.image !== '').sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  return 0
}))
</script>

<template>
  <section
    id="team"
    class="py-10 px-5 bg-staffs md:px-10 lg:p-20"
  >
    <div class="py-20 px-5 bg-white lg:py-40">
      <div class="mx-auto max-w-700 lg:max-w-1180">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Team"
          title-yamato="チーム"
        />
        <p class="mb-10 text-sm leading-7 text-vue-blue md:text-center lg:mb-14 lg:text-lg lg:leading-8">
          Vue Fes Japan Online 2022 は、Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。
        </p>
        <div class="grid grid-cols-3 gap-3 mx-auto md:grid-cols-5 lg:grid-cols-7 lg:gap-5">
          <div
            v-for="(staff, index) in showStaffs"
            :key="index"
          >
            <template v-if="staff.twitterID">
              <a
                :href="`https://twitter.com/${staff.twitterID}`"
                :title="`${staff.name} logo`"
                target="_blank"
                rel="noopener"
              >
                <img
                  :alt="`${staff.name} logo`"
                  :src="`${urlBasePath}/staff/${staff.image}`"
                  loading="lazy"
                  class="mb-1 w-full lg:mb-2"
                >
                <p class="text-sm text-center text-vue-blue">{{ staff.name }}</p>
              </a>
            </template>
            <template v-else>
              <img
                :alt="`${staff.name} logo`"
                :src="`${urlBasePath}/staff/${staff.image}`"
                loading="lazy"
                class="mb-1 w-full lg:mb-2"
              >
              <p class="text-sm text-center text-vue-blue">{{ staff.name }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
