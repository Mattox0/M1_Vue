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
        <p>{{ $t('help.classic.how.1') }}</p>
        <p>{{ $t('help.classic.how.2') }}</p>
        <p>
          <span class="modal-good">{{ $t('help.classic.how.3') }}</span>
          <span>{{ $t('help.classic.how.4') }}</span>
        </p>
        <p>
          <span class="modal-partial">{{ $t('help.classic.how.5') }}</span>
          <span>{{ $t('help.classic.how.6') }}</span>
        </p>
        <p>
          <span class="modal-wrong">{{ $t('help.classic.how.7') }}</span>
          <span>{{ $t('help.classic.how.8') }}</span>
        </p>
        <p>{{ $t('help.classic.how.9') }}</p>
      </div>
      <h3 class="help-modal-title">{{ $t('help.title2')}}</h3>
      <div class="help-modal-text">
        <p>{{ $t('help.classic.props.1') }}</p>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.2') }}</span><br>
          <span>{{ $t('help.classic.props.15')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.4') }}</span>
        </div>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.5') }}</span><br>
          <span>{{ $t('help.classic.props.16')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.6') }}</span>
        </div>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.7') }}</span><br>
          <span>{{ $t('help.classic.props.17')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.8') }}</span>
        </div>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.9') }}</span><br>
          <span>{{ $t('help.classic.props.18')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.10') }}</span>
        </div>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.11') }}</span><br>
          <span>{{ $t('help.classic.props.19')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.12') }}</span>
        </div>
        <div class="help-modal-category">
          <span class="modal-subtitle">{{ $t('help.classic.props.13') }}</span><br>
          <span>{{ $t('help.classic.props.20')}}</span><br>
          <span class="modal-info">{{ $t('help.classic.props.3') }}</span>
          <span>{{ $t('help.classic.props.14') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>