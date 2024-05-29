<script lang="ts">
	//@ts-nocheck
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { Input, ListPlaceholder } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	const supabase: SupabaseClient = $page.data.supabase;
	let propiedades: any[] | null = [];
	const getData = async () => {
		const { data, error } = await supabase
			.from('Propiedades')
			.select(
				`*,
                Cantones(*),
                Provincias(*),
                Parroquias(*),
                Tipos(*)
            `
			)
			.order('id', { ascending: true });
		propiedades = data;
	};
</script>

<main class="py-10">
	<div class="w-[95%] max-w-1440px mx-auto">
		<a class=" bg-blue-dark text-white p-4" href="/dashboard/propiedades/insertar"
			><span class="text-xl">+</span> Agregar propiedad</a
		>
	</div>
	{#await getData()}
		<ListPlaceholder divClass="w-full w-[95%] mx-auto mt-10" />
	{:then value}
		<Table class="w-[95%] max-w-1440px mx-auto shadow my-10" hoverable={true}>
			<TableHead class="bg-blue-dark text-white">
				<TableHeadCell>Id</TableHeadCell>
				<TableHeadCell>Titulo</TableHeadCell>
				<TableHeadCell>Tipo</TableHeadCell>
				<TableHeadCell>Ubicacion</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#each propiedades as propiedad}
					<TableBodyRow>
						<TableBodyCell>{propiedad.id}</TableBodyCell>
						<TableBodyCell>{propiedad.titulo}</TableBodyCell>
						<TableBodyCell>{propiedad.Tipos.nombre}</TableBodyCell>
						<TableBodyCell
							>{propiedad.Provincias.nombre} | {propiedad.Cantones.nombre} | {propiedad.Parroquias
								.nombre}</TableBodyCell
						>
						<TableBodyCell tdClass="flex justify-center items-center gap-1">
							<a
								href="/dashboard/propiedades/{propiedad.id}"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a
							>
							<form method="post" action="?/eliminar">
								<Input type="hidden" value={propiedad.id} name="id" />
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
