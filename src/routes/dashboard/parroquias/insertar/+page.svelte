<script lang="ts">
	//@ts-nocheck
	//$lib
	import { deserialize } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Button, Modal, Spinner, Input, Label, Select } from 'flowbite-svelte';
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import type { Canton } from '$lib/interfaces';
	import { onMount } from 'svelte';
	let succes = false;
	let enviando = false;
	let errors = [];
	let parroquia = {};
	let provincias = [];
	let cantones = [];
	let id_provincia = 19;
	export let data;

	const { supabase } = data;

	const getId = async () => {
		const { data } = await supabase
			.from('Parroquias')
			.select('id')
			.order('id', { ascending: false })
			.range(0, 0);
		parroquia.id = data[0].id + 1;
	};

	const getProvincias = async () => {
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
		parroquia.id_canton = data[0].id;

		cantones = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
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
		getId();
		await getProvincias();
		await getCantones();
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
<Modal title="Enviando" bind:open={enviando}>
	<Spinner />
</Modal>
<main class="pt-10">
	<form
		on:submit|preventDefault={handleSubmit}
		class=" m-auto container px-5 md:p-10"
		method="post"
		action="?/editar"
	>
		<FormLayout class="mx-auto">
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
				Cantones
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
		</FormLayout>
	</form>
</main>
