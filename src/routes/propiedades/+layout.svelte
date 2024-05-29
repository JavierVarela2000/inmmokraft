<script>
	import SearchBar from '$lib/components/HomePage/SearchBar.svelte';
</script>

<header class="bg-[url('/images/img_header.jpg')] w-full bg-center pt-14">
	<div class="w-full h-full bg-blue-dark/50 flex items-center justify-center md:pt-5 pb-6 md:pb-0">
		<SearchBar />
	</div>
</header>
<slot />
