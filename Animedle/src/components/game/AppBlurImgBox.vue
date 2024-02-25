<script lang="ts" setup>
defineProps({
  img: String
})
</script>

<template>
  <div class="blur-img-box">
    <img :src="img" alt="anime" class="blur-img" />
  </div>
</template>