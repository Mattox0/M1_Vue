<script lang="ts" setup>
import {ref} from "vue";

let isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
}
</script>

<template>
  <div class="mb-5 cursor-pointer" @click="toggleModal">
    <img src="/images/ask.svg" alt="Ask Icon" />
  </div>
  <div class="help-modal" v-if="isModalOpen">
    <div class="relative help-sub">
      <div class="help-modal-close" @click="toggleModal">
        <img src="/images/annuler.png" alt="Close Icon" />
      </div>
      <h3 class="help-modal-title">{{ $t('help.title1') }}</h3>
      <div class="help-modal-text">
        <p>{{ $t('help.image.how.1') }}</p>
        <p>{{ $t('help.image.how.2') }}</p>
        <p>{{ $t('help.image.how.3') }}</p>
      </div>
      <span class="help-footer">{{ $t('help.emoji.footer')}}</span>
    </div>
  </div>
</template>