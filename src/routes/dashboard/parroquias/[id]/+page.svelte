<script lang="ts">
	//@ts-nocheck
	//$lib
	import { deserialize } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Button, Modal, Spinner, Input, Label, Select } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import { onMount } from 'svelte';

	let succes = false;
	let enviando = false;
	let errors = [];
	let parroquia = {};
	let provincias = [];
	let id_provincia;
	let cantones = [];
	let isLoading = true;
	export let data;

	const { supabase } = data;

	const getParroquia = async () => {
		const { data } = await supabase.from('Parroquias').select('*').eq('id', $page.params.id);
		console.log(data);
		parroquia = data[0];
	};

	const getProvincias = async () => {
		const { data: idProvincia } = await supabase
			.from('Cantones')
			.select('id_provincia')
			.eq('id', parroquia.id_canton);

		id_provincia = idProvincia[0].id_provincia;
		console.log(id_provincia);
		const { data, error } = await supabase.from('Provincias').select('*');

		provincias = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
	};

	const getCantones = async () => {
		cantones = [];
		const { data, error } = await supabase
			.from('Cantones')
			.select('*')
			.order('id')
			.eq('id_provincia', id_provincia);
		if (data?.length > 0) {
			id_provincia = data[0].id_provincia;
			cantones = data.map((item) => {
				return { value: item.id, name: item.nombre };
			});
		}
	};

	const handleSubmit = async () => {
		enviando = true;
		const formData = new FormData();
		formData.append('parroquia', JSON.stringify(parroquia));
		const response = await fetch('?/insertar', {
			method: 'POST',
			body: formData
		});
		enviando = false;
		const result: ActionResult = deserialize(await response.text());
		if (result.data.errors.length == 0) succes = true;
		else errors = result.data.errors;
	};
	onMount(async () => {
		isLoading = true;
		await getParroquia();
		await getProvincias();
		await getCantones();
		isLoading = false;
	});
</script>

{#each errors as error}
	<Modal title="¡Error!" open autoclose>
		<pre class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			{JSON.stringify(error, null, 2)}
		</pre>
		<svelte:fragment slot="footer">
			<Button>Ok</Button>
		</svelte:fragment>
	</Modal>
{/each}

<Modal title="¡Éxito!" bind:open={succes} autoclose outsideclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Parroquia guardada correctamente
	</p>
	<svelte:fragment slot="footer">
		<Button>Ok</Button>
	</svelte:fragment>
</Modal>

<main class="pt-10">
	<form
		on:submit|preventDefault={handleSubmit}
		class=" m-auto container px-5 md:p-10"
		method="post"
		action="?/editar"
	>
		<FormLayout class="mx-auto">
			{#if isLoading}
				<div class="flex w-full h-96 justify-center items-center">
					<Spinner />
				</div>
			{:else}
				<div class="relative w-full mt-3">
					<Input
						required
						bind:value={parroquia.nombre}
						id="nombre"
						class="rounded-none peer"
						placeholder="Nombre de la Parroquia"
					/>
					<label
						for="nombre"
						class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Nombre</label
					>
				</div>
				<Label>
					Provincia
					<Select
						required
						bind:value={id_provincia}
						class="rounded-none cursor-pointer font-normal mt-1"
						placeholder="Elige una provincia..."
						items={provincias}
						on:change={async () => await getCantones()}
					/>
				</Label>
				<Label>
					Canton
					<Select
						required
						bind:value={parroquia.id_canton}
						class="rounded-none cursor-pointer font-normal mt-1"
						placeholder="Elige una provincia..."
						items={cantones}
					/>
				</Label>
				<div class="relative w-full my-3">
					<Input
						required
						type="number"
						min="-100"
						step="any"
						bind:value={parroquia.latitud}
						id="latitud"
						class="rounded-none peer"
						placeholder="Latitud..."
					/>
					<label
						for="latitud"
						class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Latitud</label
					>
				</div>
				<div class="relative w-full my-3">
					<Input
						required
						type="number"
						min="-100"
						step="any"
						bind:value={parroquia.longitud}
						id="longitud"
						class="rounded-none peer"
						placeholder="Longitud..."
					/>
					<label
						for="longitud"
						class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Longitud</label
					>
				</div>
				<Button class="rounded-none" type="submit">Enviar</Button>
			{/if}
		</FormLayout>
	</form>
</main>
