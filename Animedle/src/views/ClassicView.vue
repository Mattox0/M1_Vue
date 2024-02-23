<script lang="ts" setup>
import { getAllAnime, getRandomAnime } from "@/composables/requests";
import AskIcon from "@/components/icons/AskIcon.vue";
import AppSelectAnime from "@/components/classic/AppSelectAnime.vue";
import AppGameHeader from "@/components/classic/AppGameHeader.vue";
import AppTextBox from "@/components/classic/AppTextBox.vue";
import AppAnswerItem from "@/components/classic/AppAnswerItem.vue";
import TheColorIndicator from "@/components/classic/TheColorIndicator.vue";
import { type Anime } from "@/types/Anime";
import { onBeforeMount, ref } from "vue";
import { compareAnime } from "@/composables/compareAnime";
import { reactive } from "vue";
import type { AnimeResponse } from "@/types/AnimeResponse";

let allAnime: Anime[] = reactive([]);
let animeToFind: Anime;
let isLoading = ref(false);
let isAnimeSelected = ref(false);
let answers = reactive([] as AnimeResponse[]);

onBeforeMount(async () => {
	isLoading.value = true;
	allAnime = await getAllAnime();
	animeToFind = await getRandomAnime();
	isLoading.value = false;
});

function selectAnime(value: any) {
	isAnimeSelected.value = false;
	isLoading.value = true;
	const choice: Anime = allAnime.find((anime) => anime.id === value) as Anime;
	if (choice) {
		answers.unshift(compareAnime(choice, animeToFind));
    allAnime = allAnime.filter((anime) => anime.id !== choice.id);
		isAnimeSelected.value = true;
		isLoading.value = false;
	}
}
</script>

<template>
	<div v-if="isLoading">
		<p>Loading...</p>
	</div>
	<main class="flex flex-col justify-center items-center" v-else>
		<AskIcon />
		<div class="w-2/5 flex justify-center items-center flex-col">
			<AppTextBox :title="$t('classic.text.title')" :text="$t('classic.text.text')" />
			<div class="w-full flex justify-center items-center">
				<AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
			</div>
		</div>
		<div class="game flex flex-col justify-between items-center w-full mt-3">
			<AppGameHeader />
			<div v-for="answer in answers" class="game-answers-container w-full" v-if="isAnimeSelected">
				<AppAnswerItem :anime-selected="answer" />
			</div>
		</div>
		<TheColorIndicator :selected="isAnimeSelected" />
	</main>
</template>
