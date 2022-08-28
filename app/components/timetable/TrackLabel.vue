<script setup lang="ts">
const props = defineProps({
  trackIndex: {
    type: Number as PropType<0 | 1 | 2>,
    required: true,
  },
  isSponsorEvent: {
    type: Boolean,
    default: false,
  },
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
      ? 'border-2 md:border border-track-a text-track-a items-center justify-center text-center'
      : 'bg-sponsor/[.03] md:border-t border-track-a'
  case 1:
    return props.isSponsorEvent
      ? 'border-2 md:border border-track-b text-track-b items-center justify-center text-center'
      : 'bg-sponsor/[.03] md:border-t border-track-b'
  case 2:
    return props.isSponsorEvent
      ? 'border-2 md:border border-track-c text-track-c items-center justify-center text-center'
      : 'bg-sponsor/[.03] md:border-t border-track-c'
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
  <div
    class="flex flex-col md:pb-0"
    :class="trackContainerClass"
  >
    <div
      class="self-start pr-2 min-w-[50%] text-xs leading-3 text-white md:hidden"
      :class="trackLabelClasses"
    >
      {{ trackName }}
    </div>
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>
