<script lang="ts" setup>
defineProps({
  img: String,
  nbTry: Number,
})
</script>

<template>
  <div class="blur-img-box">
    <img :src="img" alt="anime" class="blur-img" :class="`blur-${nbTry}`" />
  </div>
</template>