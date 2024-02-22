<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from "./components/navbar/TheNavbar.vue";
import TheFooter from "./components/footer/TheFooter.vue";
</script>


<template>
  <div class="page">
    <header>
      <TheNavbar />
    </header>
    <RouterView />
  </div>
	<footer>
		<TheFooter />
	</footer>
</template>
