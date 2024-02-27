<script lang="ts" setup>

</script>

<template>
	<div class="flex flex-col items-center justify-center text-xs pt-5 text-gray-400">
		<p>{{ $t('footer.made') }} <a v-bind:href="'https://github.com/Mattox0'">Mattox</a></p>
		<p class="flex flex-row mt-2">
			{{ $t('footer.powered') }}
			<a class="flex flex-row ml-1 text-sky-600" v-bind:href="'https://vuejs.org/'">
				<img v-bind:src="'/images/vue.svg'" alt="mod image" class="size-4 mr-1" />
				Vue.js
			</a>
		</p>
	</div>
</template>