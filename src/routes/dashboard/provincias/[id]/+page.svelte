<script lang="ts">
	//@ts-nocheck
	//$lib

	import { page } from '$app/stores';
	import { deserialize } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Button, Modal, Spinner, Input } from 'flowbite-svelte';
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import type { ActionData } from './$types';
	import type { Provincia } from '$lib/interfaces';
	let succes = false;
	let enviando = false;
	let errors = [];
	let provincia: Provincia;
	const { supabase } = $page.data;
	const id = $page.params.id;

	const getProvincia = async () => {
		const { data, error } = await supabase.from('Provincias').select('*').eq('id', id);
		provincia = data[0];
	};

	const handleSubmit = async () => {
		enviando = true;
		console.log(provincia);
		const formData = new FormData();
		formData.append('provincia', JSON.stringify(provincia));
		const response = await fetch('?/editar', {
			method: 'POST',
			body: formData
		});
		enviando = false;
		const result: ActionResult = deserialize(await response.text());
		if (result.data.errors.length == 0) succes = true;
		else errors = result.data.errors;
	};
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
		Propiedad guardada correctamente
	</p>
	<svelte:fragment slot="footer">
		<Button>Ok</Button>
	</svelte:fragment>
</Modal>
<Modal title="Enviando" bind:open={enviando}>
	<Spinner />
</Modal>
<main class="pt-10">
	{#await getProvincia()}
		<div class=" m-auto container px-5 md:p-10">
			<FormLayout class="mx-auto">
				<div class="relative w-full my-3 flex justify-center"><Spinner /></div>
			</FormLayout>
		</div>
	{:then value}
		<form
			on:submit|preventDefault={handleSubmit}
			class=" m-auto container px-5 md:p-10"
			method="post"
			action="?/editar"
		>
			<FormLayout class="mx-auto">
				<div class="relative w-full my-3">
					<Input
						required
						bind:value={provincia.nombre}
						id="nombre"
						class="rounded-none peer"
						placeholder="Nombre de la provincia..."
					/>
					<label
						for="nombre"
						class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Nombre</label
					>
				</div>
				<div class="relative w-full my-3">
					<Input
						required
						type="number"
						min="-100"
						step="any"
						bind:value={provincia.latitud}
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
						bind:value={provincia.longitud}
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
	{/await}
</main>
