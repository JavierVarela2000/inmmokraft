<script lang="ts">
	//@ts-nocheck
	import { Label, Input, Hr, Button } from 'flowbite-svelte';
	import FormLayout from '../Layouts/FormLayout.svelte';
	export let caracteristicas = [];
	export let banios;
	export let area;
	export let garage;
	export let cuartos;
</script>

<FormLayout>
	<span class=" text-xl font-semibold text-blue-dark">Características</span>
	<div class="flex flex-col gap-5">
		<Label class="space-y-2">
			<span>Baños</span>
			<Input
				required
				bind:value={banios}
				type="number"
				class="rounded-none"
				placeholder="Numero de Baños"
			>
				<img slot="left" class="w-5 h-5" src="/iconos/bath.svg" alt="" />
			</Input>
		</Label>
		<Label class="space-y-2">
			<span>Cuartos</span>
			<Input
				required
				bind:value={cuartos}
				type="number"
				class="rounded-none"
				placeholder="Número de Cuartos"
			>
				<img slot="left" class="w-5 h-5" src="/iconos/bed.svg" alt="" />
			</Input>
		</Label>
		<Label class="space-y-2">
			<span>Area</span>
			<Input required bind:value={area} type="number" class="rounded-none" placeholder="Area en m²">
				<img slot="left" class="w-5 h-5" src="/iconos/ruler.svg" alt="" />
			</Input>
		</Label>
		<Label class="space-y-2">
			<span>Garage</span>
			<Input required bind:value={garage} type="number" class="rounded-none" placeholder="Baños">
				<img slot="left" class="w-5 h-5" src="/iconos/car.svg" alt="" />
			</Input>
		</Label>
	</div>
	<Hr hrClass="my-1" />
	<span class=" text-xl font-semibold text-blue-dark inline-block">Más Características</span>
	<div>
		<Button on:click={() => (caracteristicas = [...caracteristicas, ''])} class="rounded-none mb-5"
			>Agregar caracteristica</Button
		>
		<div class=" list-decimal flex flex-col gap-5">
			{#each caracteristicas as item, index}
				<div class="flex">
					<Input
						required
						bind:value={item}
						type="text"
						class="rounded-none"
						placeholder="Escribe una caracteristica..."
					>
						<span slot="left">{index + 1}</span>
					</Input>
					<Button
						color="red"
						on:click={() => {
							caracteristicas.splice(index, 1);
							caracteristicas = caracteristicas;
						}}>X</Button
					>
				</div>
			{/each}
			<div />
		</div>
	</div>
</FormLayout>
