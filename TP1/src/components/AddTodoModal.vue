<script setup>
import {ref} from "vue";

defineProps({
  isActive: Boolean,
  todolists: Array,
  addtodolist: Function,
});
const title = ref('');
const nbHours = ref(1);
const responsable = ref('');

function clear() {
  title.value = '';
  nbHours.value = 0;
  responsable.value = '';
}
</script>

<template>
  <div class="modal" v-show="isActive">
    <h2 class="modal-title">Ajouter une todolist</h2>
    <div class="modal-error" v-if="title === '' || nbHours === 0 || responsable === ''">Veuillez remplir tous les champs</div>
    <input v-model="title" placeholder="Titre">
    <input v-model.number="nbHours" type="number" placeholder="Nombre d'heures">
    <input v-model="responsable" placeholder="Responsable">
    <button class="button" v-on:click="addtodolist(title, nbHours, responsable);clear">Ajouter la todolist</button>
  </div>
</template>