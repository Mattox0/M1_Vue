<script setup lang="ts">
import AppModsContainer from "@/components/home/AppModsContainer.vue";
</script>

<template>
  <main class="flex flex-col justify-center items-center">
    <h2 class="m-4">{{ $t('home.guess.anime') }}</h2>
    <AppModsContainer />
  </main>
</template>
