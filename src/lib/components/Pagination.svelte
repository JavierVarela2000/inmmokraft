<script>
	//@ts-nocheck
	import { page } from '$app/stores';
	export let totalItems = 0;
	export let itemsPerPage = 16;
	export let baseHref = '';
	$: pages = Array(Math.ceil(totalItems / itemsPerPage));
</script>

<div class="flex gap-3 items-center justify-center my-4 md:my-10">
	{#each pages as _, i}
		<a
			data-sveltekit-preload-data="hover"
			data-sveltekit-preload-code="hover"
			href="{baseHref}{i + 1}{$page.url.search}"
			class=" w-10 h-10 shadow transition-colors duration-300 rounded-full inline-flex justify-center items-center hover:bg-blue-light hover:text-white
			 		{Number($page.params.page) === i + 1 ? 'bg-blue-dark text-white' : 'bg-white'}"
		>
			{i + 1}
		</a>
	{/each}
</div>
