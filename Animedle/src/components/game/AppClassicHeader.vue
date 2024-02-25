<script lang="ts" setup>

</script>

<template>
	<div class="game-header-container flex-row justify-between items-center w-full mb-2">
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name text-center">{{ $t('classic.game.name') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name text-center">{{ $t('classic.game.genres') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name">{{ $t('classic.game.year') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name">{{ $t('classic.game.season') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name">{{ $t('classic.game.type') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name">{{ $t('classic.game.studio') }}</span>
		</div>
		<div class="p-5 w-fit game-header-item">
			<span class="text-l font-bold game-name">{{ $t('classic.game.status') }}</span>
		</div>
	</div>
</template>