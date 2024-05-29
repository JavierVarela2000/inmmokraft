<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	let active = false;
	let scrollY: number;

	let routes = [
		{ name: 'INICIO', href: '/' },
		{ name: 'NOSOTROS', href: '/nosotros' },
		{ name: 'PROPIEDADES', href: '/propiedades/1' },
		{ name: 'CONTACTOS', href: '/#contactos' },
		{ name: 'REQUERIMIENTOS', href: '/requerimientos' }
	];

	const toggle = () => {
		active = !active;
	};

	$: session = $page.data.session;
	$: if ($page.data.session) {
		if (session) {
			if (!routes.find((route) => route.name === 'DASHBOARD'))
				routes = [...routes, { name: 'DASHBOARD', href: '/dashboard' }];
		} else {
			routes = routes.filter((i) => {
				i.name === 'DASHBOARD';
			});
		}
	}
</script>

<svelte:window bind:scrollY />

<nav
	class={` p-4 flex items-center justify-between fixed w-full  transition-padding  duration-500 z-[9999] ${scrollY > 10 || $page.url.pathname != '/' ? 'py-1 bg-blue-dark shadow-md' : ''}`}
>
	<Logo />

	<!--menu-->
	<button class="cursor-pointer w-8 lg:hidden" on:click={toggle}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
			><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
				d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
				fill="#ffffff"
			/></svg
		>
	</button>

	{#if active}
		<div
			transition:fly={{ x: 500, duration: 600 }}
			class="absolute w-full right-0 top-0 bg-black/50 h-screen flex justify-end lg:hidden"
		>
			<ul class=" bg-white py-4 w-2/3 max-w-96">
				<li class="flex justify-end pr-4">
					<button on:click={toggle}
						><img
							class="hover:scale-110 transition-transform duration-300 w-8 my-3"
							src="/iconos/close.svg"
							alt=""
						/></button
					>
				</li>
				{#each routes as { href, name }}
					<li class=" w-full">
						<a
							on:click={toggle}
							class="border-b border-gray-300 p-4 w-full inline-block transition-colors duration-300 hover:bg-gray-100"
							{href}>{name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<ul class="text-white hidden lg:flex">
		{#each routes as { href, name }}
			<li class="flex items-center">
				<a on:click={toggle} class=" inline-block p-2 hover:border-b text-sm" {href}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>
