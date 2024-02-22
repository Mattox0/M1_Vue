<script lang="ts" setup>
import { onMounted } from 'vue';
import { ModelSelect } from 'vue-search-select'
import { type Anime } from "@/types/Anime";
const props = defineProps({
	anime: Array
})
let options: { value: any, text: string }[] | undefined = [];
onMounted(() => {

})

</script>

<template>
	<ModelSelect :options="options" label="title" />
</template>