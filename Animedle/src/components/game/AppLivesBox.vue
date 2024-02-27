<script lang="ts" setup>
const props = defineProps<{
  nbTry: number,
  health: number
}>()
</script>
<template>
  <div class="lives-box">
    <img src="/images/heart-full.png" alt="lives" class="lives" v-for="index in (props.health-props.nbTry)" />
    <img src="/images/heart-empty.png" alt="lives" class="lives" :class="`${index.toString() === '1' ? 'empty' : ''}`" v-for="(index, elem) in nbTry">
  </div>
</template>