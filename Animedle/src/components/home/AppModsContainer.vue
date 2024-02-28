<script lang="ts" setup>
import AppModsItem from "@/components/home/AppModsItem.vue";
import { useI18n } from 'vue-i18n';
const { t, te } = useI18n();
import { computed } from "vue";

const modsArray = computed(() => {
	let i = 1;
	const modsArray = [];
	while (true) {
		if (te(`home.mods.mod${i}.name`)) {
			modsArray.push({ name: getProperty(`home.mods.mod${i}.name`), description: getProperty(`home.mods.mod${i}.description`), imgPath: getProperty(`home.mods.mod${i}.imgPath`), link: getProperty(`home.mods.mod${i}.link`) });
		} else {
			break;
		}
		i++;
	}
	return modsArray;
});

function getProperty(propertyName: string) {
	return computed(() => t(propertyName)).value;
}

</script>

<template>
	<div class="mods-container flex w-full flex-col justify-center items-center p-5">
		<div v-for="(item, index) in modsArray" class="w-6/12 justify-start mod-box">
			<a v-bind:href="item.link" v-if="item.description !== ''"><AppModsItem :name="item.name" :description=item.description :img="item.imgPath" :disabled="false" /></a>
      <AppModsItem :name="item.name" :description=item.description :img="item.imgPath" :disabled="true" v-else/>
		</div>
	</div>
</template>