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
import {checkEmoji} from "@/composables/emoji/checkEmoji";
import {revealEmoji} from "@/composables/emoji/revealEmoji";
import type {Emoji} from "@/types/Emoji";
const { t } = useI18n()
let allAnime: Anime[] = reactive([]);
let answers = reactive([] as Anime[]);
let animeToFind: Anime;
let isLoading = ref(false);
let isWin = ref(false);
let nbTry = ref(0);

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
    answers.unshift(choice);
    if (choice.id === animeToFind.id) {
      isWin.value = true;
      isAnimeSelected.value = true;
    } else {
      allAnime = allAnime.filter((anime) => anime.id !== choice.id);
      nbTry.value++;
      isAnimeSelected.value = true;
    }
  }
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
      <AppBlurImgBox :img="animeToFind.imgPath"/>
      <AppLivesBox :nbTry="nbTry" />
      <div class="w-full flex justify-center items-center mt-5" v-if="!isWin">
        <AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
      </div>
    </div>
    <div v-for="answer in answers" class="emoji-answers-container w-full" v-if="isAnimeSelected">
      <div class="flex flex-row flex-wrap items-center justify-center w-full" v-if="answer">
        <AppEmojiAnswerItem :answer="answer" />
      </div>
    </div>
  </main>
</template>
