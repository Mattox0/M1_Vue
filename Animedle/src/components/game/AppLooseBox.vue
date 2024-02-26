<script lang="ts" setup>
import {onMounted, type Ref, ref} from 'vue'
import AppModsItem from "@/components/home/AppModsItem.vue";

const sectionWin = ref<HTMLElement | null>(null)
defineProps({
  anime: Object as any,
  nbTry: Number,
  linkNextMode: String,
  nameNextMode: String,
  descriptionNextMode: String,
  imgNextMode: String,
  win: String
})
onMounted(() => {
  scrollTo(sectionWin)
})
function scrollTo(view: Ref<HTMLElement | null>) {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div class="win-box w-full h-full flex flex-col items-center justify-center mt-10" :class="win" v-if="anime" ref="sectionWin">
    <h3 class="text-2xl text-center m-5 w-2/5">{{ $t('blur.loose.title') }}</h3>
    <div class="w-6/12 flex flex-row items-center justify-center">
      <img :src="anime.imgPath" alt="guess" class="h-20" />
      <div class="flex flex-col items-start justify-start m-5">
        <p class="text-center">{{ $t('blur.loose.guess') }}</p>
        <p class="text-center mt-3 text-xl font-bold">{{ anime.title }}</p>
      </div>
    </div>
    <div class="text-lg">{{ $t('classic.win.try') }} : <span>{{ nbTry }}</span></div>
    <hr class="separator" />
    <div class="w-full flex flex-col items-center justify-center">
      <h3 class="text-2xl text-center m-5 w-2/5">{{ $t('classic.win.next') }} :</h3>
      <a v-bind:href="linkNextMode" class=""><AppModsItem :name="nameNextMode" :description="descriptionNextMode" :img="imgNextMode" /></a>
    </div>
    <hr class="separator" />
    <button class="mt-5 px-2 btn text-lg" @click="$emit('replay')">{{ $t('classic.win.replay') }}</button>
    <p class="my-5 w-3/5 text-center text-lg">{{ $t('classic.win.thanks') }}</p>
  </div>
</template>