<script lang="ts" setup>
import { getAllAnime, getRandomAnime } from "@/composables/requests";
import AskClassicIcon from "@/components/icons/AskClassicIcon.vue";
import AppSelectAnime from "@/components/game/AppSelectAnime.vue";
import AppClassicHeader from "@/components/game/AppClassicHeader.vue";
import AppTextBox from "@/components/game/AppTextBox.vue";
import AppWinBox from "@/components/game/AppWinBox.vue";
import AppClassicAnswerItem from "@/components/game/AppClassicAnswerItem.vue";
import TheColorIndicator from "@/components/game/TheColorIndicator.vue";
import AppStreaks from "@/components/game/AppStreaks.vue";
import { type Anime } from "@/types/Anime";
import { onBeforeMount, ref } from "vue";
import { compareAnime } from "@/composables/classic/compareAnime";
import { reactive } from "vue";
import type { AnimeResponse } from "@/types/AnimeResponse";
import { useI18n } from 'vue-i18n'
import AppLivesBox from "@/components/game/AppLivesBox.vue";
import AppLooseBox from "@/components/game/AppLooseBox.vue";
const { t } = useI18n()
let allAnime: Anime[] = reactive([]);
let animeToFind: Anime;
let isLoading = ref(false);
let isAnimeSelected = ref(false);
let isWin = ref(false);
let isLoose = ref(false);
let answers = reactive([] as AnimeResponse[]);
let nbTry = ref(0);
let streaks = ref(0);

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
    nbTry.value++;
    if (choice.id === animeToFind.id) {
      isWin.value = true;
      streaks.value++;
    } else if (nbTry.value === 8) {
      isLoose.value = true;
    }
		isAnimeSelected.value = true;
		isLoading.value = false;
	}
}

async function replay() {
  isLoading.value = true;
  isWin.value = false;
  if (isLoose.value) {
    streaks.value = 0;
    isLoose.value = false;
  }
  isAnimeSelected.value = false;
  nbTry.value = 0;
  answers = [];
  animeToFind = await getRandomAnime();
  allAnime = await getAllAnime();
  isLoading.value = false;
}
</script>

<template>
	<div v-if="isLoading">
		<p>Loading...</p>
	</div>
	<main class="flex flex-col justify-center items-center" v-else>
		<AskClassicIcon />
		<div class="w-2/5 flex justify-center items-center flex-col">
			<AppTextBox :title="t('classic.text.title')" :text="t('classic.text.text')" />
			<div class="w-full flex justify-center items-center" v-if="!isWin && !isLoose">
				<AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
			</div>
      <div class="flex flex-row">
        <AppLivesBox :nbTry="nbTry" :key="nbTry"/>
        <AppStreaks :streaks="streaks" />
      </div>
		</div>
		<div class="game flex flex-col justify-between items-center w-full mt-3">
			<AppClassicHeader />
			<div v-for="answer in answers" class="classic-answers-container w-full" v-if="isAnimeSelected">
				<AppClassicAnswerItem :anime-selected="answer" />
			</div>
		</div>
		<TheColorIndicator :selected="isAnimeSelected" v-if="!isWin" />
    <div class="w-2/5 flex justify-center items-center flex-col" v-if="isWin">
      <AppWinBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="`/emoji`" :name-next-mode="t('home.mods.mod2.name')" :description-next-mode="t('home.mods.mod2.description')" :img-next-mode="t('home.mods.mod2.imgPath')" />
    </div>
    <div class="w-2/5 flex justify-center items-center flex-col" v-if="isLoose">
      <AppLooseBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="`/classic`" :name-next-mode="t('home.mods.mod1.name')" :description-next-mode="t('home.mods.mod1.description')" :img-next-mode="t('home.mods.mod1.imgPath')" :win="'loose'"/>
    </div>
	</main>
</template>
