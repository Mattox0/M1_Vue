<script lang="ts" setup>
import {useI18n} from "vue-i18n";

const props = defineProps({
  closeModal: Function
})
import {messages} from "@/i18n";
import { ref} from "vue";
const { locale } = useI18n();
import i18n from "@/i18n";
const selectedLanguage = ref(locale.value);
const languages = ref(Object.keys(messages));
const setLocale = () => {
  i18n.global.locale.value = selectedLanguage.value as "fr" | "en";
  props?.closeModal();
};
</script>

<template>
  <div class="language-modal flex flex-col items-center custom-select">
    <h2 class="text-xl">{{ $t('language.title') }}</h2>
    <select v-model="selectedLanguage" @change="setLocale" class="w-4/5">
      <option disabled :value="$t('language.select')" selected>{{ $t('language.select')}}</option>
      <option v-for="lang in languages" :value="lang" :key="lang">{{ lang }}</option>
    </select>
  </div>
</template>