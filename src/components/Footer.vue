<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Flip Cards',
			author: 'Leonardo Navarro',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center m-8 sm:mb-0">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/leoNavarro95/game-cards"
				target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<div
				class="inline-block font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}
			</div>
		</div>
	</div>
</template>

