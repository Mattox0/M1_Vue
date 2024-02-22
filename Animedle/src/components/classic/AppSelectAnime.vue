<script lang="ts" setup>
import {ref} from 'vue';
import { ModelSelect } from 'vue-search-select';
import "vue-search-select/dist/VueSearchSelect.css"
const props = defineProps({
	anime: Array
})
let selectedAnime = ref<any>(null);
let options: { value: any, text: string }[] | undefined = [];
// onBeforeMount(() => {
//   options = props.anime?.map((anime: any) => {
//     return {
//       value: anime.id,
//       text: anime.title
//     }
//   })
//   console.log(options)
// })
options = [
  { value: 1, text: "Naruto" },
  { value: 2, text: "One Piece" },
  { value: 3, text: "Bleach" },
  { value: 4, text: "Dragon Ball" },
  { value: 5, text: "Death Note" },
  { value: 6, text: "Naruto Shippuden" },
  { value: 7, text: "One Punch"}
]
console.log(options)

function updateModelValue(value: any) {
  selectedAnime.value = value;
}
</script>

<template>
  {{ options }}
  <div class="w-2/4">
    <ModelSelect :options="options" :name="'select-anime'" placeholder="Choississez un animé" @update:modelValue="updateModelValue" />
  </div>
  <p>{{ selectedAnime }}</p>
</template>