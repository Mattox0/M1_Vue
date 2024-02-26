<script lang="ts" setup>
import {ref} from "vue";
import AppLanguageModal from "@/components/navbar/AppLanguageModal.vue";

let modal = ref(false);
const toggleLanguageModal = () => {
  modal.value = !modal.value;
};

</script>

<template>
    <div class="flex w-full justify-center items-center p-5">
      <div class="flex flex-row justify-center items-center mr-5">
        <img src="@/assets/images/user.png" alt="user" class="w-9 h-9" />
      </div>
      <a v-bind:href="'/'"><h1 class="text-4xl">{{ $t('title') }}</h1></a>
      <div class="flex flex-row justify-center items-center ml-5">
        <img src="@/assets/images/earth.png" alt="earth language" class="w-9 h-9 cursor-pointer" @click="toggleLanguageModal"/>
        <AppLanguageModal @languageChanged="$emit('langagueChanged')" :close-modal="toggleLanguageModal" v-if="modal"/>
      </div>
    </div>
</template>