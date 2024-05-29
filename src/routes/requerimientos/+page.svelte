<script lang="ts">
	//@ts-nocheck
	import { Input, Textarea, Button } from 'flowbite-svelte';
	import FormLayout from '$lib/components/Layouts/FormLayout.svelte';
	import { onMount } from 'svelte';
	export let requerimientos = {
		nombre: '',
		correo: '',
		telefono: '',
		presupuesto: '',
		habitaciones: '',
		mascotas: '',
		numeroMascotas: ''
	};
	let mascotas;
	$: mascotas = !requerimientos.mascotas;

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append('requerimientos', JSON.stringify(requerimientos));
		const response = await fetch('?/enviar', {
			method: 'POST',
			body: formData
		});
	};
</script>

<div class="pt-24 min-h-screen bg-gray-100 pb-10">
	<div class="w-11/12 mx-auto flex flex-col gap-3 mb-10">
		<h1 class="font-semibold text-3xl text-blue-dark capitalize">Formulario de requerimientos</h1>
		<h5 class=" text-gray-500 capitalize">
			Hola un gusto saludarte, te presentamos el siguiente formulario que nos ayudara a encontrar tu
			vivienda ideal, por favor ayúdanos llenando en su totalidad.
		</h5>
	</div>
	<form on:submit|preventDefault={handleSubmit} class="w-11/12 mx-auto">
		<FormLayout>
			<div class="grid xl:grid-cols-2 gap-10 pb-9 bg-white">
				<div class=" font-semibold text-blue-dark text-2xl pb-6 xl:col-span-2">
					Datos De Contacto
				</div>
				<div class="relative w-full">
					<Input id="nombre" class="rounded-none peer" placeholder="Escribe tu Nombre..." />
					<label
						for="nombre"
						class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Nombre y Apellidos</label
					>
				</div>
				<div class="relative w-full">
					<Input
						type="email"
						id="email"
						class="rounded-none peer"
						placeholder="Escribe tu email..."
					/>
					<label
						for="email"
						class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Email</label
					>
				</div>
				<div class="relative w-full">
					<Input id="phone" class="rounded-none peer" placeholder="Escribe tu email..." />
					<label
						for="phone"
						class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>Teléfono</label
					>
				</div>
			</div>
		</FormLayout>
		<div class="grid xl:grid-cols-2 gap-12 pb-9 bg-white p-10 shadow mt-10">
			<div class=" font-semibold text-blue-dark text-2xl pb-6 xl:col-span-2">
				Datos De Tu Propiedad Ideal
			</div>

			<div class="relative w-full">
				<Input id="pres" class="rounded-none peer" placeholder="Escribe tu presupuesto..." />
				<label
					for="pres"
					class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
					>Presupuesto</label
				>
			</div>

			<select
				bind:value={requerimientos.habitaciones}
				name=""
				id=""
				class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"
				><option value="" selected disabled
					>Número de habitaciones (especificas para dormitorios)
				</option>
				{#each [1, 2, 3, 4, '+5'] as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
			<select
				bind:value={requerimientos.mascotas}
				name=""
				id=""
				class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"
				><option value="" selected disabled>¿Tienes Mascotas? </option>

				<option value={true}>Si</option>
				<option value={false}>No</option>
			</select>
			<div class="relative w-full">
				<Input
					class="rounded-none peer"
					required={requerimientos.mascotas}
					bind:disabled={mascotas}
					bind:value={requerimientos.numeroMascotas}
					label="¿cuantas mascotas tienes?"
				/>
				<label
					for="pres"
					class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
					>Tamaño de tu mascota</label
				>
			</div>
			<div class="relative w-full">
				<Input
					bind:value={requerimientos.sector}
					id="sector"
					class="rounded-none peer"
					placeholder="Define en norte, sur o centro con un bario o sector..."
				/>
				<label
					for="sector"
					class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
					>Sector Ideal</label
				>
			</div>
			<select
				bind:value={requerimientos.garage}
				name="garage"
				id="garage"
				class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"
				><option value="" selected disabled>¿Requieres Garage? </option>

				<option value={true}>Si</option>
				<option value={false}>No</option>
			</select>
			<div class="relative w-full xl:col-span-2">
				<Textarea
					bind:value={requerimientos.descripcion}
					id="descripcion"
					class="rounded-none peer h-32"
					placeholder="Describenos brevemente tu propiedad ideal..."
				/>
				<label
					for="descripcion"
					class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
					>Descripcion</label
				>
			</div>
		</div>
		<div class="w-full max-w-[1440px] mx-auto justify-end flex">
			<Button class="rounded-none" type="submit">Enviar</Button>
		</div>
	</form>
</div>
