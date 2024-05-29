<script lang="ts">
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import { Textarea, Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	let mision: string;
	onMount(async () => {
		const response = await fetch(`/appData.json`);
		const data = await response.json();
		mision = data.mision;
	});
</script>

<form class=" m-auto container px-5 md:p-10" method="post" action="?/editar">
	<FormLayout>
		<span class=" text-xl font-semibold text-blue-dark">Misión</span>
		<Textarea value={mision} name="mision" class="rounded-none min-h-80 md:min-h-52" />
		<Button class="rounded-none" type="submit">Enviar</Button>
	</FormLayout>
</form>
