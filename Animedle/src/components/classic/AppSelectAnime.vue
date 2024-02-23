<script lang="ts" setup>
import {ref, onBeforeMount, onUpdated, reactive} from 'vue';
import { ModelSelect } from 'vue-search-select';
import "vue-search-select/dist/VueSearchSelect.css"
const props = defineProps({
	anime: Array
})
const emit = defineEmits(['select-anime'])
let options: { value: any, text: string }[] | undefined = reactive([]);
onBeforeMount(() => {
	options = props.anime?.map((anime: any) => {
		return {
			value: anime.id,
			text: anime.title
		}
	})
});
const selectAnime = (value: string) => {
  options = options?.filter((anime: any) => anime.value !== value);
  emit('select-anime', value);
}
</script>

<template>
	<div class="w-full">
		<ModelSelect :options="options" :name="'select-anime'" placeholder="Choississez un animé"
			@update:modelValue="(value: string) => selectAnime(value)" />
	</div>
</template>