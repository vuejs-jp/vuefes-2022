<script setup lang="ts">
import { staffList } from '~/utils/staffs.constants'
import SectionTitle from '~/components/SectionTitle.vue'

const showStaffs = computed(() => staffList.filter((staff) => staff.image !== '').sort((a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}))
</script>

<template>
  <section
    id="staffs"
    class="py-10 px-5 bg-staffs md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="px-5 mx-auto max-w-[83.75rem] md:max-w-[92.25rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Team"
          title-yamato="チーム"
        />
        <p class="px-4 pt-20 pb-14 text-center md:px-14">
          Vue Fes Japan Online 2022 は、Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。
        </p>
        <div class="mb-10 text-center lg:mb-20">
          <div class="flex flex-wrap justify-center items-center w-full">
            <div
              v-for="(staff, index) in showStaffs"
              :key="index"
              class="flex flex-col justify-center mx-1 mb-10 w-1/8 md:mx-4"
            >
              <a
                v-if="staff.twitterID"
                :href="`https://twitter.com/${staff.twitterID}`"
                :title="`${staff.name} logo`"
                target="_blank"
                rel="noopener"
              >
                <img
                  :alt="`${staff.name} logo`"
                  :src="`/staff/${staff.image}`"
                  class="w-20 h-20 md:w-[7.2rem] md:h-[7.2rem]"
                >
                <div class="pt-2 text-sm text-center">{{ staff.name }}</div>
              </a>
              <div v-else>
                <img
                  :alt="`${staff.name} logo`"
                  :src="`/staff/${staff.image}`"
                  class="w-20 h-20 md:w-[7.2rem] md:h-[7.2rem]"
                >
                <div class="pt-2 text-sm text-center">{{ staff.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
