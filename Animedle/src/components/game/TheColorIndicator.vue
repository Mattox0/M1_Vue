<script lang="ts" setup>
defineProps({
	selected: Boolean
})
</script>

<template>
	<div class="indicator-color mt-5" v-if="selected">
		<h3 class="text-xl text-center mt-2">{{ $t('classic.color.title') }}</h3>
		<div class="flex flex-row items-center justify-center">
			<div class="color-box flex flex-col items-center">
				<div class="color-box-inner bg-red-500"></div>
				<p class="text-center text-sm mt-1 font-bold">{{ $t('classic.color.wrong') }}</p>
			</div>
			<div class="color-box flex flex-col items-center">
				<div class="color-box-inner bg-orange-500"></div>
				<p class="text-center text-sm mt-1 font-bold">{{ $t('classic.color.partial') }}</p>
			</div>
			<div class="color-box flex flex-col items-center">
				<div class="color-box-inner bg-green-500"></div>
				<p class="text-center text-sm mt-1 font-bold">{{ $t('classic.color.correct') }}</p>
			</div>
		</div>
	</div>
</template>