<script lang="ts" setup>
import {ref} from "vue";

</script>

<template>
    <div class="flex w-full justify-center items-center p-5">
      <a v-bind:href="'/'"><h1 class="text-4xl">{{ $t('title') }}</h1></a>
    </div>
</template>