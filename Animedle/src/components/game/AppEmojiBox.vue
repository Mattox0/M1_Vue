<script lang="ts" setup>
defineProps({
  emoji: String
})
</script>

<template>
  <div class="flex flex-col items-center justify-center classic-box mb-5 w-3/5">
    <h2 class="text-center m-3 mb-2 text-lg">{{ $t('emoji.box.title') }}</h2>
    <p class="text-center m-2 mt-1 text-sm text-slate-400 italic">{{ text }}</p>
  </div>
</template>