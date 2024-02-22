<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from "./components/navbar/TheNavbar.vue";
import TheFooter from "./components/footer/TheFooter.vue";
</script>


<template>
  <header>
    <TheNavbar />
  </header>
  <RouterView />
	<footer>
		<TheFooter />
	</footer>
</template>
