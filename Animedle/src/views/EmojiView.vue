<script lang="ts" setup>
import {onBeforeMount, reactive, ref} from "vue";
import AskIcon from "@/components/icons/AskIcon.vue";
import AppSelectAnime from "@/components/game/AppSelectAnime.vue";
import AppEmojiAnswerItem from "@/components/game/AppEmojiAnswerItem.vue";
import AppEmojiBox from "@/components/game/AppEmojiBox.vue";
import type {Anime} from "@/types/Anime";
import {getAllAnime, getRandomAnime} from "@/composables/requests";
import {checkEmoji} from "@/composables/emoji/checkEmoji";
import AppWinBox from "@/components/game/AppWinBox.vue";
import {hideEmoji} from "@/composables/emoji/hideEmoji";
import {revealEmoji} from "@/composables/emoji/revealEmoji";
import type {Emoji} from "@/types/Emoji";

const isLoading = ref(false);
const isAnimeSelected = ref(false);
const emojiUpdated = ref(true);
const isWin = ref(false);
const nbTry = ref(0);
let componentKey = 0;
let animeToFind: Anime = reactive({} as Anime);
let emoji: Emoji[] = reactive([]);
let allAnime: Anime[] = [];
let answers = reactive([] as Anime[]);

onBeforeMount(async () => {
  isLoading.value = true;
  allAnime = await getAllAnime();
  animeToFind = await getRandomAnime();
  emoji = hideEmoji(animeToFind.emoji as string[]);
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
    } else {
      emojiUpdated.value = false;
      allAnime = allAnime.filter((anime) => anime.id !== choice.id);
      emoji = revealEmoji(emoji as Emoji[]);
      emojiUpdated.value = true;
      componentKey++;
    }
    nbTry.value++;
    isAnimeSelected.value = true;
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
  emoji = hideEmoji(animeToFind.emoji as string[]);
  isLoading.value = false;
}

</script>
<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <main class="emoji flex flex-col justify-center items-center" v-else>
    <AskIcon />
    <div class="w-2/5 flex justify-center items-center flex-col">
      <div v-if="emojiUpdated">
        <AppEmojiBox :emojis="emoji" :key="componentKey"/>
      </div>
      <div class="w-full flex justify-center items-center" v-if="!isWin">
        <AppSelectAnime :anime="allAnime" @select-anime="selectAnime" />
      </div>
    </div>
    <div v-for="answer in answers" class="emoji-answers-container w-full" v-if="isAnimeSelected">
      <div class="flex flex-row flex-wrap items-center justify-center w-full" v-if="answer">
        <AppEmojiAnswerItem :answer="answer" />
      </div>
    </div>
    <div class="w-2/5 flex justify-center items-center flex-col" v-if="isWin">
      <AppWinBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="'/classic'" :name-next-mode="$t('home.mods.mod1.name')" :description-next-mode="$t('home.mods.mod1.description')" :img-next-mode="$t('home.mods.mod1.imgPath')"/>
    </div>
  </main>
</template>