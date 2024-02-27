<script lang="ts" setup>
defineProps({
  streaks: Number
})
</script>

<template>
  <div class="flex justify-center items-end ml-4">
    <div class="flex flex-col">
      <h3 class="text-xl font-bold">{{ $t('classic.streaks.title') }}</h3>
      <div class="flex items-center">
        <p class="text-lg font-bold mr-2">{{ streaks }}</p>
        <img class="w-8" src="/images/fire.png" alt="Fire Icon" />
      </div>
    </div>
  </div>
</template>