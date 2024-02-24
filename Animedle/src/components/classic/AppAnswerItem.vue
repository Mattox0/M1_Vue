<script lang="ts" setup>
defineProps({
	animeSelected: Object
})
</script>

<template>
	<div class="flex flex-wrap justify-between w-full" v-if="animeSelected">
		<div class="square">
			<div class="square-img">
				<img v-if="animeSelected.imgPath" :src="animeSelected.imgPath" alt="anime image" />
				<span class="tooltip" v-if="animeSelected.title">{{ animeSelected.title }}</span>
			</div>
		</div>
		<div class="square" :class="animeSelected.genresColor">
			<div class="square-content genres">
				<div v-for="genre in animeSelected.genres" class="genre-container">
					<img v-if="genre" :src="'src/assets/images/genres/' + genre.name.replaceAll(' ', '-') + '.png'"
						alt="genre image" class="genre-img" :class="genre.color" />
					<span class="tooltip">{{ genre.name }}</span>
				</div>
			</div>
		</div>
		<div class="square" :class="animeSelected.yearColor">
			<div class="square-content" :class="animeSelected.yearLevel">
				<p>{{ animeSelected.year }}</p>
			</div>
		</div>
		<div class="square" :class="animeSelected.seasonColor">
			<div class="square-content" :class="animeSelected.seasonLevel">
				<p>{{ animeSelected.season }}</p>
			</div>
		</div>
		<div class="square" :class="animeSelected.typeColor">
			<div class="square-content">
				<p>{{ animeSelected.type }}</p>
			</div>
		</div>
		<div class="square" :class="animeSelected.studioColor">
			<div class="square-content studio">
				<p v-for="studio in animeSelected.studio">
					{{ studio }}
				</p>
			</div>
		</div>
		<div class="square" :class="animeSelected.statusColor">
			<div class="square-content">
				<p>{{ animeSelected.status }}</p>
			</div>
		</div>
	</div>
</template>