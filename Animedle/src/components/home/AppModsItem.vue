<script lang="ts" setup>
defineProps({
	name: String,
	description: String,
	img: String
})

</script>

<template>
	<div class="flex flex-row items-center justify-start mod-container pr-3">
		<img v-bind:src="`/images/${img}`" alt="mod image" class="p-3" />
		<div>
			<h1 class="text-2xl">{{ name }}</h1>
			<p class="text-sm">{{ description }}</p>
		</div>
	</div>
</template>