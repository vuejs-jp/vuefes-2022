<script setup lang="ts">
const props = withDefaults(defineProps<{
  trackIndex: 0 | 1 | 2,
  isSponsorEvent?: boolean
}>(), {
  isSponsorEvent: false
})

const trackLabelClasses = computed(() => {
  switch (props.trackIndex) {
  case 0:
    return 'bg-track-a'
  case 1:
    return 'bg-track-b'
  case 2:
    return 'bg-track-c'
  }
})

const trackContainerClass = computed(() => {
  switch (props.trackIndex) {
  case 0:
    return props.isSponsorEvent
      ? 'border-2 border-track-a text-track-a md:flex items-center justify-center h-full'
      : 'bg-sponsor md:border-t-2 border-track-a'
  case 1:
    return props.isSponsorEvent
      ? 'border-2 border-track-b text-track-b md:flex items-center justify-center h-full'
      : 'bg-sponsor md:border-t-2 border-track-b'
  case 2:
    return props.isSponsorEvent
      ? 'border-2 border-track-c text-track-c md:flex items-center justify-center h-full'
      : 'bg-sponsor md:border-t-2 border-track-c'
  default:
    return ''
  }
})

const trackName = computed(() => {
  switch (props.trackIndex) {
  case 0:
    return 'メドピアトラック'
  case 1:
    return 'FUTUREトラック'
  case 2:
    return 'クラウドサイントラック'
  }
})
</script>
<template>
  <div :class="trackContainerClass">
    <div
      class="py-[7px] w-[50%] text-xs font-bold text-center text-white md:hidden"
      :class="trackLabelClasses"
    >
      {{ trackName }}
    </div>
    <div class="p-4 md:p-6">
      <slot />
    </div>
  </div>
</template>
