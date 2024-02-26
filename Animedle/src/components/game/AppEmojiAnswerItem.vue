<script lang="ts" setup>
defineProps({
  answer: Object as any
})
</script>
<template>
    <div class="emoji-answer flex items-center justify-start w-2/6 p-2" :class="answer.color">
      <div class="square-img flex-shrink-0">
        <img v-if="answer.imgPath" :src="answer.imgPath" alt="anime image" />
      </div>
      <p class="text-lg font-bold ml-5">{{ answer.title }}</p>
    </div>
</template>