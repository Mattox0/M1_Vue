<script lang="ts" setup>
defineProps({
	animeSelected: Object,
  last: String
})
</script>

<template>
	<div class="flex flex-wrap justify-between w-full" v-if="animeSelected">
		<div class="square" :class="animeSelected.title === last ? 'animated a1' : ''">
			<div class="square-img">
				<img v-if="animeSelected.imgPath" :src="animeSelected.imgPath" alt="anime image" />
				<span class="tooltip" v-if="animeSelected.title">{{ animeSelected.title }}</span>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.genresColor} ${animeSelected.title === last ? 'animated a2' : ''}`">
			<div class="square-content genres">
				<div v-for="genre in animeSelected.genres" class="genre-container">
					<img v-if="genre" :src="'/images/genres/' + genre.name.replaceAll(' ', '-') + '.png'"
						alt="genre image" class="genre-img" :class="genre.color" />
					<span class="tooltip">{{ genre.name }}</span>
				</div>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.yearColor} ${animeSelected.title === last ? 'animated a3' : ''}`">
			<div class="square-content" :class="animeSelected.yearLevel">
				<p>{{ animeSelected.year }}</p>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.seasonColor} ${animeSelected.title === last ? 'animated a4' : ''}`">
			<div class="square-content" :class="animeSelected.seasonLevel">
				<p v-if="animeSelected.season !== 0">{{ animeSelected.season }}</p>
        <p v-else>Film</p>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.typeColor} ${animeSelected.title === last ? 'animated a5' : ''}`">
			<div class="square-content">
				<p>{{ animeSelected.type }}</p>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.studioColor} ${animeSelected.title === last ? 'animated a6' : ''}`">
			<div class="square-content studio">
				<p v-for="studio in animeSelected.studio">
					{{ studio }}
				</p>
			</div>
		</div>
		<div class="square" :class="`${animeSelected.statusColor} ${animeSelected.title === last ? 'animated a7' : ''}`">
			<div class="square-content">
				<p>{{ animeSelected.status }}</p>
			</div>
		</div>
	</div>
</template>