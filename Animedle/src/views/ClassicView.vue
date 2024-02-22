<script lang="ts" setup>
import { getAllAnime, getRandomAnime } from "@/composables/requests";
import AskIcon from "@/components/icons/AskIcon.vue";
import AppSelectAnime from "@/components/classic/AppSelectAnime.vue";
import { type Anime } from "@/types/Anime";
import {onBeforeMount} from "vue";

let anime: Anime[] = [];
let selectAnime: Anime;

onBeforeMount(async () => {
	anime = await getAllAnime();
	selectAnime = await getRandomAnime();
  console.log("getAllAnime")
});

</script>

<template>
	<main class="flex flex-col justify-center items-center">
		<AskIcon />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
		<AppSelectAnime :anime="anime" />
	</main>
</template>
