<script lang="ts">
	//@ts-nocheck
	import FormLayout from '../Layouts/FormLayout.svelte';
	import { Label, Input, Select, Textarea, Checkbox } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let precioRenta;
	export let precioVenta;
	export let idTipo;
	export let descripcion;
	export let titulo;
	let checkedRent = false;
	let checkedSale = false;
	let tipos = [];
	if (precioRenta) checkedRent = true;
	if (precioVenta) checkedSale = true;
	const getTipos = async () => {
		const { data, error } = await $page.data.supabase.from('Tipos').select('*');
		tipos = [
			...data.map((item) => {
				return { value: item.id, name: item.nombre };
			})
		];
	};
	onMount(() => {
		getTipos();
	});
</script>

<FormLayout>
	<span class=" text-xl font-semibold text-blue-dark">Información</span>
	<div class="w-full flex flex-col gap-5 lg:flex-row">
		<div class="w-full">
			<Label for="titulo" class="block mb-2">Titulo</Label>
			<Input
				required
				bind:value={titulo}
				class="rounded-none"
				name="titulo"
				id="titulo"
				placeholder="Titulo ..."
			/>
		</div>
		<div class="w-full">
			<Label>
				Tipos
				<Select
					required
					bind:value={idTipo}
					color="primary"
					class="mt-2 rounded-none w-full cursor-pointer"
					items={tipos}
				/>
			</Label>
		</div>
	</div>
	<Label>
		Descripcion
		<Textarea
			required
			bind:value={descripcion}
			class="mt-2 rounded-none h-32 font-normal"
			id="descripcion"
			name="descripcion"
			placeholder="Descripcion ..."
		/>
	</Label>
	<div class="flex flex-col gap-5 lg:flex-row">
		<div class="flex flex-col w-full gap-3">
			<Checkbox
				on:change={() => {
					if (!checkedRent) precioRenta = '';
				}}
				class="cursor-pointer"
				bind:checked={checkedSale}>En venta</Checkbox
			>
			<Input
				bind:value={precioVenta}
				disabled={!checkedSale}
				placeholder="Escribe el precio de venta..."
				class="rounded-none"
				type="number"
			/>
		</div>
		<div class="flex flex-col w-full gap-3">
			<Checkbox
				on:change={() => {
					if (!checkedRent) precioRenta = '';
				}}
				class="cursor-pointer"
				bind:checked={checkedRent}>En renta</Checkbox
			>
			<Input
				bind:value={precioRenta}
				disabled={!checkedRent}
				placeholder="Escribe el precio de renta..."
				class="rounded-none"
				type="number"
			/>
		</div>
	</div>
</FormLayout>
