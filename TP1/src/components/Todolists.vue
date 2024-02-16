<script setup>
defineProps({
  todolists: Array,
});
</script>

<template>
  <div class="container-cards">
    <div v-for="(item, index) in todolists" class="card">
      <div class="card-header">
        <h2>{{ item.title }}</h2>
      </div>
      <div class="card-hour">
        <p>{{ item.nbHours }} heures</p>
      </div>
      <div class="card-responsable">
        <p>{{ item.responsable }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/app.scss';
</script>
