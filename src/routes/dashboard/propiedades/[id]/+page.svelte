<script lang="ts">
	//@ts-nocheck
	//$lib
	import InputImg from '$lib/components/forms/InputImg.svelte';
	import InformacionForm from '$lib/components/forms/InformacionForm.svelte';
	import MapForm from '$lib/components/forms/MapForm.svelte';
	import CaracteristicasForm from '$lib/components/forms/CaracteristicasForm.svelte';

	import { page } from '$app/stores';
	import { applyAction, deserialize } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Button, TextPlaceholder, Modal, Spinner, Label } from 'flowbite-svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	let succes = false;
	let enviando = false;
	let errors = [];
	let imagenes: Array<File> = [];
	let imagenesToDelete: Array<string> = [];
	let propiedad = {};
	const { supabase } = $page.data;
	const id = $page.params.id;

	const getPropiedad = async () => {
		const { data, error } = await supabase.from('Propiedades').select('*').eq('id', id);
		propiedad = data[0];
	};

	const handleSubmit = async () => {
		enviando = true;
		const formData = new FormData();
		for (let index = 0; index < imagenes.length; index++) {
			const imagen = imagenes[index];
			formData.append('imagenes', imagen);
		}
		formData.append('imagenesToDelete', imagenesToDelete);
		formData.append('propiedad', JSON.stringify(propiedad));
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
	{#await getPropiedad()}
		<div class="px-3 md:px-10 flex flex-col gap-10">
			<TextPlaceholder size="xxl" class="mt-8" />
			<TextPlaceholder size="xxl" class="mt-8" />
			<TextPlaceholder size="xxl" class="mt-8" />
			<TextPlaceholder size="xxl" class="mt-8" />
		</div>
	{:then}
		<form
			class="px-3 md:px-10 flex flex-col items-end gap-10"
			on:submit|preventDefault={handleSubmit}
		>
			<InformacionForm
				bind:precioRenta={propiedad.precio_renta}
				bind:precioVenta={propiedad.precio_venta}
				bind:titulo={propiedad.titulo}
				bind:descripcion={propiedad.descripcion}
				bind:idTipo={propiedad.id_tipo}
			/>
			<CaracteristicasForm
				bind:cuartos={propiedad.cuartos}
				bind:area={propiedad.area}
				bind:garage={propiedad.garage}
				bind:banios={propiedad.banios}
				bind:caracteristicas={propiedad.caracteristicas}
			/>

			<InputImg bind:imagenesToDelete bind:imagenes bind:imagenesPrev={propiedad.imagenes} />

			<MapForm
				bind:id_provincia={propiedad.id_provincia}
				bind:id_canton={propiedad.id_canton}
				bind:id_parroquia={propiedad.id_parroquia}
				bind:calles={propiedad.referencias}
				bind:latitud={propiedad.latitud}
				bind:longitud={propiedad.longitud}
			/>
			<div class="w-full max-w-[1440px] mx-auto justify-end flex">
				<Button class="rounded-none" type="submit">Enviar</Button>
			</div>
		</form>
	{/await}
</main>
