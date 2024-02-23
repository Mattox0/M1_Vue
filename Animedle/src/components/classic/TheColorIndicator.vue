<script lang="ts" setup>
defineProps({
	selected: Boolean
})
</script>

<template>
	<div class="indicator-color" v-if="selected">
		<h3 class="text-2xl text-center">{{ $t('classic.color.title') }}</h3>
		<div class="flex flex-row items-center justify-center">
			<div class="color-box">
				<div class="color-box-inner bg-red-500"></div>
				<p class="text-center text-sm">{{ $t('classic.color.wrong') }}</p>
			</div>
			<div class="color-box">
				<div class="color-box-inner bg-orange-500"></div>
				<p class="text-center text-sm">{{ $t('classic.color.partial') }}</p>
			</div>
			<div class="color-box">
				<div class="color-box-inner bg-green-500"></div>
				<p class="text-center text-sm">{{ $t('classic.color.correct') }}</p>
			</div>
		</div>
	</div>
</template>