<script setup>
import Todolists from '../components/Todolists.vue';
import Navbar from '../components/Navbar.vue';

import {ref} from "vue";

const allTodolists = ref([
  {
    title: 'TP1',
    nbHours: 2,
    responsable: 'Moi',
  },
  {
    title: 'TP2',
    nbHours: 3,
    responsable: 'Moi',
  },
  {
    title: 'TP3',
    nbHours: 4,
    responsable: 'Moi',
  },
]);
</script>

<template>
  <Navbar v-bind:todolists="allTodolists"/>
  <Todolists v-bind:todolists="allTodolists"/>
</template>