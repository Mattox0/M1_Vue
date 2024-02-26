<script lang="ts" setup>
defineProps({
  nbTry: Number,
  health: Number
})
</script>
<template>
  <div class="lives-box">
    <img src="@/assets/images/heart-full.png" alt="lives" class="lives" v-for="index in health-nbTry" />
    <img src="@/assets/images/heart-empty.png" alt="lives" class="lives" :class="`${index.toString() === '1' ? 'empty' : ''}`" v-for="(index, elem) in nbTry">
  </div>
</template>