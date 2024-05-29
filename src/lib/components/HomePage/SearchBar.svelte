<script>
	//@ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Select, Label } from 'flowbite-svelte';
	import Lupa from '../iconos/Lupa.svelte';
	let selectedTipo = 0;
	let selectedUbicacion = 0;
	let loading = true;

	let tipos;
	let ubicaciones;

	const { supabase } = $page.data;

	const tipo = Number($page.url.searchParams.get('tipo'));
	const ubicacion = Number($page.url.searchParams.get('ubicacion'));

	const getTipos = async () => {
		const { data, error } = await supabase.from('Tipos').select('*');
		tipos = [
			{ value: 0, name: 'Todos los tipos' },

			...data.map((item) => {
				return { value: item.id, name: item.nombre };
			})
		];
	};

	const getUbicaciones = async () => {
		const { data, error } = await supabase.from('Provincias').select('*');
		ubicaciones = [
			{ value: 0, name: 'Todas las ubicaciones' },

			...data.map((item) => {
				return { value: item.id, name: item.nombre };
			})
		];
	};

	onMount(async () => {
		await Promise.all([getTipos(), getUbicaciones()]);
		if (tipo) selectedTipo = tipo;
		if (ubicacion) selectedUbicacion = ubicacion;
		loading = false;
	});
</script>

<div class="m-auto min-h-52 w-11/12 max-w-xl">
	<div
		class="flex gap-6 flex-col min-h-28 bg-white py-5 px-6 mt-6 md:flex-row md:px-8 md:justify-center md:items-end"
	>
		{#if loading}
			<span class="text-black">Cargando ...</span>
		{:else}
			<Label>
				Tipos
				<Select
					color="primary"
					class="mt-2 rounded-none w-full md:w-40 hover:scale-[1.02] transition-transform cursor-pointer"
					items={tipos}
					bind:value={selectedTipo}
				/>
			</Label>
			<Label>
				Ubicaciones
				<Select
					color="primary"
					class="mt-2 rounded-none w-full md:w-40 hover:scale-[1.02] transition-transform cursor-pointer"
					items={ubicaciones}
					bind:value={selectedUbicacion}
				/>
			</Label>

			<a
				href={`/propiedades/1?tipo=${selectedTipo}&ubicacion=${selectedUbicacion}`}
				class="flex items-center justify-center gap-3 h-14 md:w-40 bg-blue-light rounded transition-transform duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-[3px]
			"
				><Lupa />
				<span class="text-white font-semibold text-sm">BUSCAR</span>
			</a>
		{/if}
	</div>
</div>
