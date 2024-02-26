<script lang="ts" setup>
import { getAllAnime, getRandomAnime } from "@/composables/requests";
import { type Anime } from "@/types/Anime";
import { onBeforeMount, ref } from "vue";
import { reactive } from "vue";
import { useI18n } from 'vue-i18n'
import AskIcon from "@/components/icons/AskIcon.vue";
import AppSelectAnime from "@/components/game/AppSelectAnime.vue";
import AppLivesBox from "@/components/game/AppLivesBox.vue";
import AppBlurImgBox from "@/components/game/AppBlurImgBox.vue";
import AppEmojiAnswerItem from "@/components/game/AppEmojiAnswerItem.vue";
import AppLooseBox from "@/components/game/AppLooseBox.vue";
import {checkEmoji} from "@/composables/emoji/checkEmoji";
import AppWinBox from "@/components/game/AppWinBox.vue";
const { t } = useI18n()
let allAnime: Anime[] = reactive([]);
let answers = reactive([] as Anime[]);
let animeToFind: Anime;
let isLoading = ref(false);
let isWin = ref(false);
let isLoose = ref(false);
let nbTry = ref(0);
let isAnimeSelected = ref(false);

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
    answers.unshift(checkEmoji(choice, animeToFind));
    if (choice.id === animeToFind.id) {
      isWin.value = true;
      isAnimeSelected.value = true;
    } else if (nbTry.value === 5)  {
      nbTry.value++;
      isAnimeSelected.value = true;
      isLoose.value = true;
    } else {
      allAnime = allAnime.filter((anime) => anime.id !== choice.id);
      nbTry.value++;
      isAnimeSelected.value = true;
    }
  }
  isLoading.value = false;
}

async function replay() {
  isLoading.value = true;
  isWin.value = false;
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
  <main class="blur-effect flex flex-col justify-center items-center" v-else>
    <AskIcon />
    <div class="w-2/5 flex justify-center items-center flex-col">
      <AppBlurImgBox :img="animeToFind.imgPath" :nb-try="nbTry" :key="nbTry"/>
      <AppLivesBox :nbTry="nbTry" :key="nbTry"/>
      <div class="w-full flex justify-center items-center mt-5" v-if="!isWin && !isLoose">
        <AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
      </div>
    </div>
    <div v-for="answer in answers" class="blur-answers-container w-full" v-if="isAnimeSelected">
      <div class="flex flex-row flex-wrap items-center justify-center w-full" v-if="answer">
        <AppEmojiAnswerItem :answer="answer" />
      </div>
    </div>
    <div class="w-2/5 flex justify-center items-center flex-col" v-if="isWin">
      <AppWinBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="`/classic`" :name-next-mode="t('home.mods.mod1.name')" :description-next-mode="t('home.mods.mod1.description')" :img-next-mode="t('home.mods.mod1.imgPath')" :win="'win'"/>
    </div>
    <div class="w-2/5 flex justify-center items-center flex-col" v-if="isLoose">
      <AppLooseBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="`/classic`" :name-next-mode="t('home.mods.mod1.name')" :description-next-mode="t('home.mods.mod1.description')" :img-next-mode="t('home.mods.mod1.imgPath')" :win="'loose'"/>
    </div>
  </main>
</template>
