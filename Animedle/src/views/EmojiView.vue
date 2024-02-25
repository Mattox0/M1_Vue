<script lang="ts" setup>
import emoji from 'emoji-datasource-apple/emoji.json';
import image from 'emoji-datasource-apple/img/apple/sheets-256/64.png';
import {onBeforeMount, reactive, ref} from "vue";
import AskIcon from "@/components/icons/AskIcon.vue";
import AppSelectAnime from "@/components/game/AppSelectAnime.vue";
import AppEmojiBox from "@/components/game/AppEmojiBox.vue";
import type {Anime} from "@/types/Anime";
import {getAllAnime, getRandomAnime} from "@/composables/requests";
console.log(emoji[emoji.length - 1]);
const x = (emoji[emoji.length - 1].sheet_x * (64 + 2)) + 1;
const y = (emoji[emoji.length - 1].sheet_y * (64 + 2)) + 1;
console.log(image)
console.log(x, y);

const isLoading = ref(false);
const isAnimeSelected = ref(false);
const isWin = ref(false);
const nbTry = ref(0);
let animeToFind: Anime;
let allAnime: Anime[] = [];
let answers = reactive([] as Anime[]);

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
    } else {
      allAnime = allAnime.filter((anime) => anime.id !== choice.id);
      nbTry.value++;
      isAnimeSelected.value = true;
      isLoading.value = false;
    }
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
      <AppEmojiBox :emoji="animeToFind.emoji"/>
      <div class="w-full flex justify-center items-center" v-if="!isWin">
        <AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
      </div>
    </div>
  </main>
  <div class="emoji-container" :style="{ backgroundPosition: `-${x}px -${y}px`, backgroundImage: `url(${image})` }"></div>
</template>