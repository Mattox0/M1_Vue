<script lang="ts" setup>
import {onMounted, type Ref, ref} from 'vue'
import AppModsItem from "@/components/home/AppModsItem.vue";


const sectionWin = ref<HTMLElement | null>(null)
defineProps({
  anime: Object as any,
  nbTry: Number
})
onMounted(() => {
  scrollTo(sectionWin)

})
function scrollTo(view: Ref<HTMLElement | null>) {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div class="win-box w-full h-full flex flex-col items-center justify-center mt-10" v-if="anime" ref="sectionWin">
    <h3 class="text-2xl text-center m-5 w-2/5">{{ $t('classic.win.title') }}</h3>
    <div class="w-6/12 flex flex-row items-center justify-center">
      <img :src="anime.imgPath" alt="guess" class="w-20 h-20" />
      <div class="flex flex-col items-start justify-start m-5">
        <p class="text-center">{{ $t('classic.win.guess') }}</p>
        <p class="text-center mt-3 text-xl font-bold">{{ anime.title }}</p>
      </div>
    </div>
    <div class="text-lg">{{ $t('classic.win.try') }} : <span>{{ nbTry }}</span></div>
    <hr class="separator" />
    <div class="w-full flex flex-col items-center justify-center">
      <h3 class="text-2xl text-center m-5 w-2/5">{{ $t('classic.win.next') }} :</h3>
      <a v-bind:href="'/emoji'" class="w-3/5"><AppModsItem :name="$t('home.mods.mod2.name')" :description="$t('home.mods.mod2.description')" :img="$t('home.mods.mod2.imgPath')" /></a>
    </div>
    <hr class="separator" />
    <p class="my-5 w-3/5 text-center text-lg">{{ $t('classic.win.thanks') }}</p>
  </div>
</template>