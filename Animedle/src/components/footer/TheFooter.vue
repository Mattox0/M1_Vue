<script lang="ts" setup>

</script>

<template>
	<footer class="flex flex-col items-center justify-center text-xs mt-12 text-gray-400">
		<p>{{ $t('footer.made') }} <a v-bind:href="'https://github.com/Mattox0'">Mattox</a></p>
		<p class="flex flex-row mt-2">
			{{ $t('footer.powered') }}
			<a class="flex flex-row ml-1 text-sky-600" v-bind:href="'https://vuejs.org/'">
				<img v-bind:src="'/src/assets/images/vue.svg'" alt="mod image" class="size-4 mr-1" />
				Vue.js
			</a>
		</p>
	</footer>
</template>