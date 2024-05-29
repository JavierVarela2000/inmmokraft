<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { CardPlaceholder } from 'flowbite-svelte';
	import Card from './Card.svelte';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let supabase: SupabaseClient = $page.data.supabase;
	let swiper;
	let items: any;
	let waiting = true;
	onMount(async () => {
		waiting = true;
		const { data: result } = await supabase
			.from('Propiedades')
			.select(
				`*,
				Cantones(*),
				Provincias(*),
				Parroquias(*)`
			)
			.range(0, 9)
			.order('created_at', { ascending: false });

		items = result;
		waiting = false;
		await tick();
		swiper = new Swiper('.mySwiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			modules: [Navigation, Pagination],
			breakpoints: {
				767: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
				1280: { slidesPerView: 4 }
			}
		});
	});
</script>

<div class=" w-full">
	<div class="swiper mySwiper max-w-[1440px]">
		<div class="swiper-wrapper pt-5 pb-14">
			{#if waiting}
				{#each Array(5) as _}
					<CardPlaceholder divClass=" mx-4 shadow-md px-4 w-80" />
				{/each}
			{:else}
				{#each items as propiedad}
					<div class="swiper-slide">
						<Card Class="" {propiedad} />
					</div>
				{/each}
			{/if}
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-pagination"></div>
	</div>
</div>

<style>
	.swiper-slide {
		font-size: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
