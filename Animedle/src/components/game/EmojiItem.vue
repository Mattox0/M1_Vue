<script lang="ts" setup>
import emojiArray from 'emoji-datasource-apple/emoji.json';
import image from "emoji-datasource-apple/img/apple/sheets-256/64.png";
import {onBeforeMount, ref} from "vue";
import {type Emoji} from "@/types/Emoji";

let emoji: Emoji = ref(null);
let x: number;
let y: number;
let props = defineProps({
  emojiData: Object as any
})

onBeforeMount(async () => {
  emoji = emojiArray.find((emoji) => emoji.name === props.emojiData.name) as Emoji;
  x = (emoji.sheet_x * (64 + 2)) + 1;
  y = (emoji.sheet_y * (64 + 2)) + 1;
});
</script>

<template>
    <div class="emoji-img mx-2" :style="{ backgroundPosition: `-${x}px -${y}px`, backgroundImage: `url(${image})` }" v-if="emojiData.display"/>
    <div class="emoji-img mx-2" :style="{ backgroundPosition: `-3961px -2113px`, backgroundImage: `url(${image})` }" v-else />
</template>