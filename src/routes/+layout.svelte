<!-- src/routes/+layout.svelte -->
<script lang="ts">
	//@ts-nocheck
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Layouts/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>INMMOKRAFT</title>
</svelte:head>
<Nav />
<slot />
<Footer />
