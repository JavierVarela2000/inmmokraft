<script lang="ts">
	//@ts-nocheck
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import FormLayout from '../Layouts/FormLayout.svelte';
	import 'leaflet/dist/leaflet.css';
	import { Input, Label, Hr, Select, Button } from 'flowbite-svelte';
	import getStreets from '$lib/getStreets';

	export let latitud = -1.831239;
	export let longitud = -78.183406;
	export let id_provincia;
	export let id_canton;
	export let id_parroquia;
	export let calles;
	let map;
	const { supabase } = $page.data;
	let provincias = [];
	let selectProvincias = [];

	let cantones;
	let selectCantones = [];

	let parroquias;
	let selectParroquias = [];

	const getProvincias = async () => {
		const { data, error } = await supabase.from('Provincias').select('*');
		provincias = data;
		selectProvincias = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
	};

	const getCantones = async () => {
		const { data, error } = await supabase
			.from('Cantones')
			.select('*')
			.eq('id_provincia', id_provincia);
		cantones = data;
		selectCantones = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
	};

	const getParroquias = async () => {
		const { data, error } = await supabase
			.from('Parroquias')
			.select('*')
			.eq('id_canton', id_canton);
		parroquias = data;
		selectParroquias = data.map((item) => {
			return { value: item.id, name: item.nombre };
		});
	};
	onMount(async () => {
		if (browser) {
			let zoom = 7;
			if (id_canton) {
				await getCantones();
				zoom = 10;
			}
			if (id_parroquia) {
				await getParroquias();
				zoom = 14;
			}
			const L = await import('leaflet');
			map = L.map('map').setView([latitud, longitud], zoom);
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}).addTo(map);

			map.on('moveend', () => {
				const center = map.getCenter();
				latitud = center.lat;
				longitud = center.lng;
			});
		}

		await getProvincias();
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<FormLayout>
	<div class="flex gap-10 flex-col-reverse lg:flex-row">
		<div class=" w-full h-full relative">
			<div id="map" class="h-96 lg:h-[550px] w-full z-10" />

			<img
				src="/iconos/pinMap.png"
				class="absolute w-14 h-14 z-20 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
				alt=""
			/>
		</div>

		<div class="flex flex-col gap-2 min-w-80">
			<Label class="block  w-full">
				Latitud
				<Input disabled bind:value={latitud} class="rounded-none font-normal mt-1" />
			</Label>
			<Label class="block w-full">
				Longitud
				<Input disabled bind:value={longitud} class="rounded-none font-normal mt-1" />
			</Label>
			<Hr hrClass="my-2" />
			<Label>
				Provincia
				<Select
					required
					on:change={() => {
						const handleProvincia = provincias.find((item) => item.id == id_provincia);
						map.flyTo([handleProvincia.latitud, handleProvincia.longitud], 9);
						getCantones();
					}}
					bind:value={id_provincia}
					class="rounded-none cursor-pointer font-normal mt-1"
					placeholder="Elige una provincia..."
					items={selectProvincias}
				/>
			</Label>
			<Label>
				Cantón
				<Select
					on:change={() => {
						const handleCanton = cantones.find((item) => item.id == id_canton);
						map.flyTo([handleCanton.latitud, handleCanton.longitud], 13);
						getParroquias();
					}}
					required
					disabled={id_provincia ? false : true}
					bind:value={id_canton}
					class="rounded-none cursor-pointer font-normal mt-1"
					placeholder="Elige un cantón..."
					items={selectCantones}
				/>
			</Label>
			<Label>
				Parroquia
				<Select
					required
					on:change={() => {
						const handleParroquia = parroquias.find((item) => item.id == id_parroquia);
						map.flyTo([handleParroquia.latitud, handleParroquia.longitud], 15);
					}}
					disabled={id_canton ? false : true}
					bind:value={id_parroquia}
					class="rounded-none cursor-pointer font-normal mt-1"
					placeholder="Elige una parroquia..."
					items={selectParroquias}
				/>
			</Label>
			<Hr hrClass="my-2" />
			<Label class="block  w-full">
				Calles
				<Input
					required
					placeholder="Escribe alguna referencia"
					bind:value={calles}
					class="rounded-none font-normal mt-1"
				/>
			</Label>
			<Button
				class="rounded-none"
				on:click={async () => {
					calles = 'Generando Calles ...';
					calles = await getStreets(latitud, longitud);
				}}>Generar Calles</Button
			>
		</div>
	</div>
</FormLayout>
