<script lang="ts" setup>
defineProps({
  nbTry: Number
})
</script>
<template>
  <div class="lives-box">
    <img src="@/assets/images/heart-full.png" alt="lives" class="lives" v-for="index in 6-nbTry" />
    <img src="@/assets/images/heart-empty.png" alt="lives empty" class="lives" v-for="index in nbTry">
  </div>
</template>