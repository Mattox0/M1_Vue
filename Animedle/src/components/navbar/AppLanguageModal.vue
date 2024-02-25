<script lang="ts" setup>
defineProps({
  closeModal: Function
})
import {messages} from "@/i18n";
import {ref} from "vue";
const languages = ref(Object.keys(messages));

</script>

<template>
  <div class="language-modal flex flex-col items-center custom-select">
    <h2 class="text-xl">{{ $t('language.title') }}</h2>
    <select v-model="$i18n.locale" @change="closeModal()" class="w-4/5">
      <option disabled :value="$t('language.select')" selected>{{ $t('language.select')}}</option>
      <option v-for="lang in languages" :value="lang" :key="lang">{{ lang }}</option>
    </select>
  </div>
</template>