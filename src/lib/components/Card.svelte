<script>
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	//@ts-nocheck
	export let propiedad = {
		id: '',
		titulo: '',
		referencias: '',
		cuartos: 0,
		banios: 0,
		garage: 0,
		area: 0,
		precio_renta: null,
		precio_venta: null,
		imagenes: []
	};
	export let Class = '';
</script>

<a
	data-sveltekit-preload-data="hover"
	data-sveltekit-preload-code="hover"
	href="/propiedad/{propiedad.id}"
	class="relative w-80 overflow-hidden shadow-sm bg-white border border-solid mx-auto border-gray-200 hover:shadow-md {Class}"
>
	<div class=" h-48">
		<div class="relative h-full">
			<div class="absolute top-0 w-full h-full bg-blue-dark/20 z-10" />
			{#if propiedad.imagenes.length > 0}
				<img
					src={propiedad.imagenes[0]?.src}
					alt={propiedad.imagenes[0]?.fileName}
					class=" object-cover w-full h-full block"
				/>
			{:else}
				<ImagePlaceholder />
			{/if}
		</div>
	</div>
	{#if propiedad.precio_renta}
		<div
			class="absolute text-xs block top-3 right-5 bg-blue-dark font-medium text-white py-1.5 px-3 z-30"
		>
			En Renta
		</div>
	{/if}

	{#if propiedad.precio_venta}
		<div
			class="absolute text-xs block top-3 left-5 bg-blue-light font-medium text-white py-1.5 px-3 z-30"
		>
			En Venta
		</div>
	{/if}

	<div class="outline outline-1 outline-gray-300 p-3 h-full text-start">
		<h4
			class=" font-semibold text-blue-dark py-1 capitalize whitespace-nowrap overflow-x-hidden text-ellipsis"
		>
			{propiedad.titulo}
		</h4>
		<h5
			class="text-gray-400 text-sm pb-4 font-normal whitespace-nowrap overflow-x-hidden text-ellipsis"
		>
			{propiedad.referencias}
		</h5>
		<div class="flex justify-between mb-3">
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/iconos/bed.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{propiedad.cuartos} Cuartos</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/iconos/bath.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{propiedad.banios} baños</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/iconos/car.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{propiedad.garage} Garage</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/iconos/ruler.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{propiedad.area} m<sup>2</sup></span>
			</div>
		</div>
		<hr class="bg-gray-300" />
		<div class="flex justify-between text-blue-dark gap-3 py-3 text-base">
			{#if propiedad.precio_venta}
				<span class="">{propiedad.precio_venta}</span>
			{/if}

			{#if propiedad.precio_renta}
				<span class="">{propiedad.precio_renta}/mes</span>
			{/if}
		</div>
	</div>
</a>
