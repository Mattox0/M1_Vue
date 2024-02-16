<script setup>
import AddTodoModal from "./AddTodoModal.vue";
import {ref, toRefs} from "vue";
const props = defineProps({
  todolists: Array,
});
const { todolists } = toRefs(props);

function addTodolist(title, nbHours, responsable) {
  if (title === '' || nbHours === 0 || responsable === '') {
    return;
  }
  todolists.value.push({
    title: title,
    nbHours: nbHours,
    responsable: responsable,
  });
  isActive.value = false;
}

let isActive = ref(false);
function addTodo() {
  isActive.value = !isActive.value;
}

</script>

<template>
  <div class="container-button">
    <button class="button" v-on:click="addTodo">Ajouter une todolist</button>
    <AddTodoModal v-bind:isActive="isActive" v-bind:todolist="todolists" v-bind:addtodolist="addTodolist"/>
  </div>
</template>