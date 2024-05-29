<script lang="ts">
	//@ts-nocheck
	import Swiper from 'swiper';
	import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';
	import 'swiper/css/thumbs';
	import { onMount } from 'svelte';
	let swiper;
	let swiper2;
	export let imagenes: any[];

	onMount(() => {
		new Swiper(swiper, {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 3,
			breakpoints: {
				1024: {
					slidesPerView: 5
				},
				1280: {
					slidesPerView: 6
				},
				1440: {
					slidesPerView: 8
				}
			},
			freeMode: true,
			modules: [Thumbs, FreeMode, Navigation]
		});
		new Swiper(swiper2, {
			loop: true,
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: swiper
			},
			modules: [Thumbs, FreeMode, Navigation]
		});
	});
</script>

<div
	bind:this={swiper2}
	style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
	class="swiper mySwiper2"
>
	<div class="swiper-wrapper">
		{#each imagenes as { src, fileName }}
			<div class="swiper-slide">
				<img {src} alt={fileName} />
			</div>
		{/each}
	</div>
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>
</div>
<div bind:this={swiper} thumbsSlider="" class="swiper mySwiper h-1/5">
	<div class="swiper-wrapper">
		{#each imagenes as { src, fileName }}
			<div class="swiper-slide bg-blue-dark">
				<img class="transition-opacity" {src} alt={fileName} />
			</div>
		{/each}
	</div>
</div>

<style>
	/* Generic styles for all Swiper instances */
	.swiper {
		width: 100%;
		margin: 0 auto; /* Center the swiper horizontally */
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Styles for specific Swiper instance (mySwiper) */
	.mySwiper {
		height: 20%;
		box-sizing: border-box;
		padding: 10px 0;
	}

	.mySwiper img {
		opacity: 0.4;
	}

	.mySwiper .swiper-slide-thumb-active img {
		opacity: 1; /* Combine hover and active state styles */
	}
	.mySwiper .swiper-slide:hover:not(.swiper-slide-thumb-active) img {
		opacity: 0.8; /* Combine hover and active state styles */
	}

	.mySwiper .swiper-slide:hover:not(.swiper-slide-thumb-active) {
		cursor: pointer;
	}

	/* Override default height for another Swiper instance (mySwiper2) */
	.mySwiper2 {
		height: 80%;
		cursor: grab;
	}
</style>
