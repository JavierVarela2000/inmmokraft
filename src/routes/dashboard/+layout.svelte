<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { page } from '$app/stores';

	let breadcrumbItems: any[] = [];

	$: {
		const path = $page.url.pathname;
		const segments = path.split('/').filter((segment) => segment !== '');

		// Limpiar breadcrumbItems antes de llenarlo con nuevos elementos
		breadcrumbItems = [];

		let currentPath = '';
		for (let index = 0; index < segments.length; index++) {
			const segment = segments[index];
			currentPath += `/${segment}`;
			breadcrumbItems.push({
				name: segment,
				path: currentPath
			});
		}
	}
</script>

<div class="pt-14 bg-gray-100 relative min-h-[calc(100vh)] flex flex-col">
	<Breadcrumb
		navClass="bg-white fixed w-full z-[99999] py-6 shadow pl-5 border-gray-200 border-b md:pl-10 uppercase "
		aria-label="Default breadcrumb example"
	>
		{#each breadcrumbItems as { name, path }, index}
			{#if index == 0}
				<BreadcrumbItem class="hover:scale-[1.02]" href={path} home>{name}</BreadcrumbItem>
			{:else}
				<BreadcrumbItem
					linkClass="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-[1.02]"
					href={path}>{name}</BreadcrumbItem
				>
			{/if}
		{/each}
	</Breadcrumb>
	<div class="h-20" />
	<slot />
</div>
