<script lang="ts">
	import { page } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import Card from '$lib/components/Card.svelte';
	import { CardPlaceholder } from 'flowbite-svelte';
	const itemsPerPage = 12;
	let totalItems = 0;
	const { supabase } = $page.data;
	$: url = $page.url;
	$: tipo = Number(url.searchParams.get('tipo'));
	$: ubicacion = Number(url.searchParams.get('ubicacion'));

	const getData = async () => {
		const query = supabase
			.from('Propiedades')
			.select('*', { count: 'exact' })
			.order('id', { ascending: true });

		if (tipo > 0) query.eq('id_tipo', tipo);

		if (ubicacion > 0) query.eq('id_provincia', ubicacion);

		const { data, error, count } = await query.range(
			Number($page.params.page) * itemsPerPage - itemsPerPage,
			Number($page.params.page) * itemsPerPage - 1
		);
		totalItems = count;
		return data;
	};
</script>

<main>
	{#key url || tipo || ubicacion}
		{#await getData()}
			<div
				class="grid mt-10 grid-cols-1 content-center max-w-[675px] gap-4 mx-auto
		md:grid-cols-2 md:gap-10
		lg:grid-cols-3 lg:max-w-[1025px]
		xl:grid-cols-4 xl:max-w-[1375px]
		2xl:grid-cols-5 2xl:max-w-[1725px]"
			>
				{#each Array(itemsPerPage) as _}
					<CardPlaceholder divClass="w-80 border border-gray-200" />
				{/each}
			</div>
		{:then value}
			<div
				class="grid mt-10 grid-cols-1 content-center max-w-[675px] gap-4 mx-auto
			md:grid-cols-2 md:gap-10
			lg:grid-cols-3 lg:max-w-[1025px]
			xl:grid-cols-4 xl:max-w-[1375px]
			2xl:grid-cols-5 2xl:max-w-[1725px]"
			>
				{#each value as propiedad}
					<Card {propiedad} />
				{/each}
			</div>
			{#if value.length == 0}
				<div class="container mx-auto flex flex-col items-center justify-center px-4 py-20">
					<div class="bg-white shadow-md border-gray-100 border rounded-lg p-8 w-full">
						<h2 class="text-2xl font-bold text-center mb-4">Lo sentimos</h2>
						<p class="text-lg text-gray-700 text-center">
							No encontramos ninguna propiedad con las características que seleccionaste.
						</p>
						<div class="flex flex-col items-center justify-center mt-8">
							<a
								href="/propiedades/1?tipo=0&ubicacion=0&estado=0"
								class=" text-blue-light underline hover:scale-[1.01]"
							>
								Volver a la búsqueda
							</a>
							<p class="text-sm text-gray-500 mt-4">
								¿No encuentras lo que buscas? Contáctanos y te ayudaremos a encontrar la propiedad
								ideal.
							</p>
						</div>
					</div>
				</div>
			{/if}
		{/await}
	{/key}

	<Pagination {itemsPerPage} {totalItems} baseHref="/propiedades/" />
</main>
