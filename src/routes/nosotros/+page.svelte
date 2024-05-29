<script lang="ts">
	import { onMount } from 'svelte';
	let mision: string;
	let vision: string;
	onMount(async () => {
		const response = await fetch(`/appData.json`);
		const data = await response.json();
		mision = data.mision;
		vision = data.vision;
	});
</script>

<main class="py-5">
	<section class="">
		<article class="items-center justify-center flex flex-col xl:flex-row xl:pt-10">
			<img class="max-w-[700px]" src="/images/mision.svg" alt="" />
			<div class="p-5 max-w-[500px]">
				<h1 class="text-xl font-semibold">Misión</h1>
				<p class="text-gray-700">{mision}</p>
			</div>
		</article>
	</section>
	<section class="">
		<article class="items-center justify-center flex flex-col xl:flex-row-reverse xl:pb-10">
			<img class="max-w-[700px]" src="/images/vision.svg" alt="" />
			<div class="p-5 max-w-[500px]">
				<h1 class="text-xl font-semibold">Visión</h1>
				<p class="text-gray-700">{vision}</p>
			</div>
		</article>
	</section>
</main>
