<script lang="ts">
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import { Textarea, Button, Modal, Spinner } from 'flowbite-svelte';
	import { onMount, tick } from 'svelte';
	import type { ActionData } from './$types';
	let vision: string;
	let enviando = false;
	export let form: ActionData;
	onMount(async () => {
		const response = await fetch(`/appData.json`);
		const data = await response.json();
		vision = data.vision;
	});
</script>

{#if form?.succes == true}
	<Modal title="¡Éxito!" open autoclose outsideclose>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			Propiedad guardada correctamente
		</p>
		<svelte:fragment slot="footer">
			<Button>Ok</Button>
		</svelte:fragment>
	</Modal>
{:else if form?.succes == false}
	<Modal title="¡Error!" open autoclose outsideclose>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			Algo salió mal, intentalo mas tarde
		</p>
		<svelte:fragment slot="footer">
			<Button>Ok</Button>
		</svelte:fragment>
	</Modal>
{/if}
<Modal title="Enviando" bind:open={enviando}>
	<Spinner />
</Modal>
<form
	on:submit={async () => {
		enviando = true;
	}}
	class=" m-auto container px-5 md:p-10"
	method="post"
	action="?/editar"
>
	<FormLayout>
		<span class=" text-xl font-semibold text-blue-dark">Visión</span>
		<Textarea value={vision} name="vision" class="rounded-none min-h-80 md:min-h-52" />
		<Button class="rounded-none" type="submit">Enviar</Button>
	</FormLayout>
</form>
