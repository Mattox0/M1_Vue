<script lang="ts" setup>
import {onBeforeMount, reactive, ref} from "vue";
import AskEmojiIcon from "@/components/icons/AskEmojiIcon.vue";
import AppSelectAnime from "@/components/game/AppSelectAnime.vue";
import AppEmojiAnswerItem from "@/components/game/AppEmojiAnswerItem.vue";
import AppEmojiBox from "@/components/game/AppEmojiBox.vue";
import type {Anime} from "@/types/Anime";
import {getAllAnime, getRandomAnime} from "@/composables/requests";
import {checkEmoji} from "@/composables/emoji/checkEmoji";
import AppWinBox from "@/components/game/AppWinBox.vue";
import {hideEmoji} from "@/composables/emoji/hideEmoji";
import {revealAllEmoji, revealEmoji} from "@/composables/emoji/revealEmoji";
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
  emojiUpdated.value = false;
  const choice: Anime = allAnime.find((anime) => anime.id === value) as Anime;
  if (choice) {
    answers.unshift(checkEmoji(choice, animeToFind));
    if (choice.id === animeToFind.id) {
      isWin.value = true;
      emoji = revealAllEmoji(emoji as Emoji[]);
    } else {
      allAnime = allAnime.filter((anime) => anime.id !== choice.id);
      emoji = revealEmoji(emoji as Emoji[]);
    }
    componentKey++;
    nbTry.value++;
    isAnimeSelected.value = true;
    emojiUpdated.value = true;
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
    <AskEmojiIcon />
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
      <AppWinBox :anime="animeToFind" :nb-try="nbTry" @replay="replay" :link-next-mode="$t('home.mods.mod3.link')" :name-next-mode="$t('home.mods.mod3.name')" :description-next-mode="$t('home.mods.mod3.description')" :img-next-mode="$t('home.mods.mod3.imgPath')" :win="'win'"/>
    </div>
  </main>
</template>