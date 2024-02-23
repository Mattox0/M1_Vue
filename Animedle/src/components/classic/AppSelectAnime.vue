<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { ModelSelect } from 'vue-search-select';
import "vue-search-select/dist/VueSearchSelect.css"
const props = defineProps({
	anime: Array
})
let selectedAnime = ref<any>(null);
let options: { value: any, text: string }[] | undefined = [];
onBeforeMount(() => {
	options = props.anime?.map((anime: any) => {
		return {
			value: anime.id,
			text: anime.title
		}
	})
})
</script>

<template>
	<div class="w-full">
		<ModelSelect :options="options" :name="'select-anime'" placeholder="Choississez un animé"
			@update:modelValue="(value: string) => $emit('selectAnime', value)" />
	</div>
</template>