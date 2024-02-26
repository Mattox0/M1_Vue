<script lang="ts" setup>
import {onBeforeMount} from "vue";

defineProps({
  answer: Object as any,
  last: String
})

onBeforeMount(() => {

})
</script>
<template>
    <div class="emoji-answer flex items-center justify-start w-2/6 p-2" :class="`${answer.color} ${last === answer.id ? 'animated' : ''}`">
      <div class="square-img flex-shrink-0">
        <img v-if="answer.imgPath" :src="answer.imgPath" alt="anime image" />
      </div>
      <p class="text-lg font-bold ml-5">{{ answer.title }}</p>
    </div>
</template>