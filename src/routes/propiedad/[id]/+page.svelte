<script lang="ts">
	//@ts-nocheck
	import { page } from '$app/stores';
	import SwiperProperties from '$lib/components/SwiperProperties.svelte';
	import SwiperThumbs from '$lib/components/SwiperThumbs.svelte';
	import MapProperty from '$lib/components/MapProperty.svelte';
	import ImagePlaceholder from '$lib/components/ImagePlaceholder.svelte';
	import { Skeleton } from 'flowbite-svelte';
	$: id = $page.params.id;

	const getData = async () => {
		const { data, error } = await $page.data.supabase
			.from('Propiedades')
			.select(
				`*,
                Cantones(*),
                Provincias(*),
                Parroquias(*)
            `
			)
			.eq('id', id);
		return data[0];
	};
</script>

<main class="px-[5%] py-24 xl:mx-auto xl:w-11/12">
	{#key id}
		{#await getData()}
			<div class="h-96 md:h-[500px] lg:h-[600px]"><ImagePlaceholder /></div>
			<Skeleton class="my-8 max-w-none" />
			<Skeleton class="my-8 max-w-none" />
			<Skeleton class="my-8 max-w-none" />
			<Skeleton class="my-8 max-w-none" />
		{:then propiedad}
			{#if propiedad}
				<!-- content here -->

				<section class=" h-96 md:h-[500px] lg:h-[600px] xl:h-[75vh]">
					{#if propiedad?.imagenes.length > 0}
						<SwiperThumbs imagenes={propiedad?.imagenes} />
					{:else}
						<ImagePlaceholder />
					{/if}

					<!-- <SlideProperty images={data.property.imagenes} /> -->
				</section>

				<section class="  mt-5 flex flex-col">
					<h3 class="font-semibold text-blue-dark capitalize text-2xl">{propiedad?.titulo}</h3>
					<div class="flex flex-col gap-5 mt-1">
						<h6 class="capitalize text-gray-500 text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</h6>
						<div class="text-white flex items-start gap-2">
							{#if propiedad.precio_venta}
								<div
									class="bg-blue-light px-3 py-1 rounded text-[10px] font-semibold flex gap-2 hover:scale-110"
								>
									EN VENTA
								</div>
							{/if}
							{#if propiedad.precio_renta}
								<div
									class="bg-blue-dark px-3 py-1 rounded text-[10px] font-semibold flex gap-2 hover:scale-110"
								>
									EN RENTA
								</div>
							{/if}
						</div>
					</div>
					<div class="text-gray-500 flex gap-7 mt-5 flex-wrap">
						<div class="flex gap-2 text-sm">
							<img src="/iconos/bed-grey.svg" alt="" /> <span>{propiedad?.cuartos} Cuartos</span>
						</div>
						<div class="flex gap-2 text-sm">
							<img src="/iconos/bath-grey.svg" alt="" /> <span>{propiedad.banios} Baños</span>
						</div>
						<div class="flex gap-2 text-sm">
							<img src="/iconos/garage-grey.svg" alt="" /> <span>{propiedad.garage} Garage</span>
						</div>
						<div class="flex gap-2 text-sm">
							<img src="/iconos/area-grey.svg" alt="" /> <span>{propiedad.area} m<sup>2</sup></span>
						</div>
					</div>

					<div class="flex gap-2 mt-5 flex-wrap text-white">
						{#each propiedad.caracteristicas as caracteristica}
							<span
								class="bg-green-700 px-3 py-1 rounded-full text-[10px] font-semibold flex gap-2 uppercase hover:scale-110"
							>
								{caracteristica}
							</span>
						{/each}
					</div>

					<div class="flex flex-col gap-1 mt-5 text-blue-dark font-semibold">
						<span class="">
							{#if propiedad.precio_venta}
								{propiedad.precio_venta}
							{/if}
						</span>
						<span class="">
							{#if propiedad.precio_renta}
								{propiedad.precio_renta}/mes
							{/if}
						</span>
					</div>

					<article>
						<h5 class="text-lg font-semibold text-blue-dark mt-5">Descripción</h5>
						<p class="text-gray-500 mt-3">{propiedad.descripcion}</p>
					</article>
				</section>
				<hr class=" my-5" />
				<section class=" flex flex-col items-start">
					<span class="text-lg font-semibold text-blue-dark mb-3">Ubicación</span>

					<div class="flex gap-3 text-sm">
						<div class="flex flex-col gap-1">
							<span class="font-semibold text-blue-dark">Provincia:</span>
							<span class="font-semibold text-blue-dark">Canton:</span>
							<span class="font-semibold text-blue-dark">Parroquia:</span>
						</div>
						<div class="flex flex-col gap-1 text-gray-500">
							<span>{propiedad.Provincias.nombre}</span>
							<span>{propiedad.Cantones.nombre}</span>
							<span>{propiedad.Parroquias.nombre}</span>
						</div>
					</div>

					<MapProperty
						referencias={propiedad.referencias}
						latitud={propiedad.latitud}
						longitud={propiedad.longitud}
						zoom={14}
					/>
				</section>
			{/if}
		{/await}
	{/key}
</main>
<section class=" bg-gray-100 py-16">
	<span class=" font-semibold text-3xl block text-center py-3">Más Propiedades</span>
	<span class=" font'semibold block text-center text-gray-600"
		>Busca Más Propiedades Similares En Nuestro Catálogo</span
	>
	<SwiperProperties />
</section>
