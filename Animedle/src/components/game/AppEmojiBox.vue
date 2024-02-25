<script lang="ts" setup>
import EmojiItem from "@/components/game/EmojiItem.vue";
defineProps({
  emojis: Array
})
</script>

<template>
  <div class="flex flex-col items-center justify-center classic-box mb-5 w-fit">
    <h2 class="text-center m-3 mb-2 text-lg">{{ $t('emoji.box.title') }}</h2>
    <div class="emoji-container flex flex-row items-center justify-center">
      <div v-for="emoji in emojis">
        <EmojiItem :emoji-data="emoji"/>
      </div>
    </div>
    <p class="text-center m-2 mt-1 text-sm text-slate-400 italic">{{ $t('emoji.box.footer') }}</p>
  </div>
</template>