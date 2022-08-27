<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
</script>
<template>
  <section
    id="timetable"
    class=" py-10 px-5 bg-timetable md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white md:py-40">
      <SectionTitle
        class="mb-10 lg:mb-20"
        title="Time Table"
        title-yamato="タイムテーブル"
      />
      <div class="grid grid-cols-4 mx-auto lg:max-w-[1260px]">
        <div>'</div>
        <div>メドピアトラック</div>
        <div>FUTUREトラック</div>
        <div>クラウドサイントラック</div>
      </div>
    </div>
  </section>
</template>
