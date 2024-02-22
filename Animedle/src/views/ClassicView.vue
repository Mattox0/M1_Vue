<script lang="ts" setup>
import { getAllAnime, getRandomAnime } from "@/composables/requests";
import AskIcon from "@/components/icons/AskIcon.vue";
import { type Anime } from "@/types/Anime";
import { onMounted } from "vue";

let anime: Anime[] = [];
let selectAnime: Anime;

onMounted(async () => {
	anime = await getAllAnime();
	selectAnime = await getRandomAnime();
});

</script>

<template>
	<main class="flex flex-col justify-center items-center">
		<AskIcon />
		<AppSelectAnime :anime="anime" />
	</main>
</template>
