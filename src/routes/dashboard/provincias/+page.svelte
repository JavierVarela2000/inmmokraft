<script lang="ts">
	//@ts-nocheck
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { ListPlaceholder } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Input
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	const supabase: SupabaseClient = $page.data.supabase;
	let provincias: any[] | null = [];
	const getData = async () => {
		const { data, error } = await supabase
			.from('Provincias')
			.select('*')
			.order('id', { ascending: true });
		provincias = data;
	};
</script>

<main class="py-10">
	<div class="w-[95%] max-w-1440px mx-auto">
		<a class=" bg-blue-dark text-white p-4" href="/dashboard/provincias/insertar"
			><span class="text-xl">+</span> Agregar Provincia</a
		>
	</div>
	{#await getData()}
		<ListPlaceholder divClass="w-full w-[95%] mx-auto mt-10" />
	{:then value}
		<Table class="w-[95%] max-w-1440px mx-auto shadow my-10" hoverable={true}>
			<TableHead class="bg-blue-dark text-white">
				<TableHeadCell>Id</TableHeadCell>
				<TableHeadCell>Nombre</TableHeadCell>
				<TableHeadCell>Latitud</TableHeadCell>
				<TableHeadCell>Longitud</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#each provincias as provincia}
					<TableBodyRow>
						<TableBodyCell>{provincia.id}</TableBodyCell>
						<TableBodyCell>{provincia.nombre}</TableBodyCell>
						<TableBodyCell>{provincia.latitud}</TableBodyCell>
						<TableBodyCell>{provincia.longitud}</TableBodyCell>
						<TableBodyCell tdClass="flex justify-center items-center gap-1">
							<a
								href="/dashboard/provincias/{provincia.id}"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a
							>
							<form method="post" action="?/eliminar">
								<Input type="hidden" value={provincia.id} name="id" />
								<Input
									class="hover:scale-105 cursor-pointer"
									type="submit"
									value="Eliminar"
									color="red"
								/>
							</form>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/await}
</main>
