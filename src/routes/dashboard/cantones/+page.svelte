<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { Button, Label, ListPlaceholder, Modal, Select, Spinner } from 'flowbite-svelte';
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
	import type { Canton, Provincia } from '$lib/interfaces';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	let showDeleteAlert = false;
	const supabase: SupabaseClient = $page.data.supabase;
	let cantones: Canton[] = [];
	let eliminando = false;
	let provincias: any[] = [];
	let handleCantones: Canton[] = [];
	let succesDelete = false;
	let id_provincia = 1;
	let waiting = false;
	let id: number;
	const getData = async () => {
		const { data, error } = await supabase
			.from('Cantones')
			.select(`*,Provincias(*)`)
			.order('id', { ascending: true });
		cantones = data as Canton[];
		handleCantones = cantones.filter((canton) => canton.Provincias.id == id_provincia);
	};
	const getProvincias = async () => {
		const { data, error } = await supabase.from('Provincias').select('*').order('id');
		provincias = data as Provincia[];
		provincias = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
	};
	onMount(async () => {
		waiting = true;
		await getProvincias();
		await getData();
		waiting = false;
	});
</script>

<Modal title="Eliminando!" bind:open={eliminando} autoclose>
	<Spinner />
</Modal>
<Modal title="¡Éxito!" bind:open={succesDelete} autoclose outsideclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Cantón eliminado correctamente
	</p>
	<svelte:fragment slot="footer">
		<Button>Ok</Button>
	</svelte:fragment>
</Modal>
<Modal title="¡Alerta!" bind:open={showDeleteAlert} autoclose outsideclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Estas por eliminar un cantón
	</p>
	<svelte:fragment slot="footer">
		<form
			use:enhance={() => {
				showDeleteAlert = false;
				eliminando = true;
				return async ({ result }) => {
					eliminando = false;
					// `result` is an `ActionResult` object
					if (result.type == 'success') {
						succesDelete = true;
						waiting = true;
						await getData();
						waiting = false;
					} else {
					}
				};
			}}
			method="post"
			action="?/eliminar"
		>
			<Input type="hidden" value={id} name="id" />
			<Input class="hover:scale-105 cursor-pointer" type="submit" value="Eliminar" color="red" />
		</form>
		<Button>Cancelar</Button>
	</svelte:fragment>
</Modal>

<main class="py-10">
	<div class="w-[95%] max-w-1440px mx-auto flex justify-between">
		<a class=" bg-blue-dark text-white p-4" href="/dashboard/cantones/insertar"
			><span class="text-xl">+</span> Agregar Cantón</a
		>
		<Label>
			Provincia
			<Select
				on:change={async () => {
					waiting = true;
					await getData();
					waiting = false;
				}}
				required
				bind:value={id_provincia}
				class="rounded-none cursor-pointer font-normal mt-1"
				placeholder="Elige una provincia..."
				items={provincias}
			/>
		</Label>
	</div>
	{#if waiting}
		<ListPlaceholder divClass="w-full w-[95%] mx-auto mt-10" />
	{:else}
		<Table class="w-[95%] max-w-1440px mx-auto shadow my-10" hoverable={true}>
			<TableHead class="bg-blue-dark text-white">
				<TableHeadCell>Id</TableHeadCell>
				<TableHeadCell>Nombre</TableHeadCell>
				<TableHeadCell>Provincia</TableHeadCell>
				<TableHeadCell>Latitud</TableHeadCell>
				<TableHeadCell>Longitud</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#each handleCantones as canton}
					<TableBodyRow>
						<TableBodyCell>{canton.id}</TableBodyCell>
						<TableBodyCell>{canton.nombre}</TableBodyCell>
						<TableBodyCell>{canton.Provincias.nombre}</TableBodyCell>
						<TableBodyCell>{canton.latitud}</TableBodyCell>
						<TableBodyCell>{canton.longitud}</TableBodyCell>
						<TableBodyCell tdClass="flex justify-center items-center gap-1">
							<Button href="/dashboard/cantones/{canton.id}" class="font-medium  hover:underline "
								>Edit</Button
							>
							<Button
								color="red"
								on:click={() => {
									id = canton.id;
									showDeleteAlert = true;
								}}>Eliminar</Button
							>
						</TableBodyCell>
					</TableBodyRow>
				{:else}
					No hay cantones
				{/each}
			</TableBody>
		</Table>
	{/if}
</main>
