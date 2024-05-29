<!-- src/routes/+page.svelte -->
<script lang="ts">
	import SwiperProperties from '$lib/components/SwiperProperties.svelte';
	import Header from '$lib/components/HomePage/Header.svelte';
	import CardBody from '$lib/components/HomePage/CardBody.svelte';
	import { Input, Textarea } from 'flowbite-svelte';
</script>

<Header />
<main>
	<section class="flex flex-col items-center">
		<div class="py-5">
			<h1 class="text-3xl mt-9 font-semibold text-center text-blue-dark md:text-4xl">
				Propiedades en Venta
			</h1>
			<h2 class="text-center text-lg mt-8 text-gray-500 md:text-xl">
				Te ayudamos a comprar <br />
				y <br /> vender tu propiedad
			</h2>
		</div>

		<SwiperProperties />
		<a href="/propiedades" class="bg-blue-light text-white my-12 px-8 py-3 rounded-sm inline"
			>Ver Más</a
		>
	</section>
	<section class="  py-7 bg-slate-100">
		<h2 class="text-3xl mt-9 font-semibold text-center text-blue-dark xl:text-4xl">
			¿Quieres Comprar <br class="md:hidden" /> Una Casa?
		</h2>

		<h3 class="text-center text-lg mt-8 text-gray-500">Te ayudamos a encontrar tu casa ideal</h3>
		<div
			class="my-8 px-5 max-w-4xl mx-auto flex flex-wrap gap-6 items-center justify-center 2xl:max-w-[1550px]"
		>
			<CardBody src="iconos/home.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="iconos/family.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="iconos/key-house.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="iconos/search-home.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
		</div>
	</section>
	<section
		id="nosotros"
		class="w-full py-14 md:pt-24 xl:flex xl:gap-10 2xl:gap-44 xl:items-center xl:justify-center xl:py-36"
	>
		<div class="relative flex justify-center">
			<img class="block w-5/6 max-w-xl xl:w-[470px] shadow-xl" src="/iconos/logo.png" alt="" />
		</div>
		<div class="flex flex-col my-12 items-center">
			<span class="block text-center text-3xl text-blue-dark font-semibold mb-12"
				>Acerca De Nosotros</span
			>

			<p class=" px-9 text-center text-gray-500 max-w-lg xl:text-start xl:px-0">
				Arcu mattis ante sed est eget nibh velit praesent. Turpis at pharetra est quam volutpat sed
				eget convallis. In morbi turpis tortor nisl vel purus. Nisl massa scelerisque quisque quam
				nulla nec risus duis vitae.
				<br /> <br />
				Morbi ut egestas commodo enim in leo hendrerit euismod. Praesent pellentesque congue sit nunc
				eget. Convallis facilisi ut condimentum ac lorem phasellus amet.
			</p>
			<div
				class="bg-blue-light text-white font-semibold px-8 py-3 rounded-sm mx-auto inline mt-12 2xl:mx-0"
			>
				Saber Más
			</div>
		</div>
	</section>
	<section
		id="contactos"
		class="bg-slate-700 mb-96 2xl:mb-0 h-[700px] bg-[url('/images/img_header.jpg')] bg-center bg-no-repeat bg-cover relative md:h-[600px] 2xl:h-[750px]"
	>
		<div
			class="w-full h-full text-white bg-blue-dark/50 relative py-10 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-28"
		>
			<div>
				<h2 class="text-3xl mt-9 text-center text-white px-7 md:text-4xl 2xl:px-0">
					¿Quieres Comprar o Vender una Propiedad?
				</h2>
				<span class="block text-center text-2xl mt-8 text-white md:text-3xl 2xl:text-start">
					Nosotros te Asesoramos
				</span>
				<p class="text-center p-8 max-w-lg mx-auto 2xl:px-0 2xl:text-start 2xl:mx-0">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
					consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
				</p>
			</div>

			<form
				on:submit|preventDefault
				class="absolute max-w-lg border-solid border border-gray-300 bg-white rounded-sm w-11/12 left-0 right-0 mx-auto h-[530px] bottom-0 translate-y-1/2 py-6 px-3 md:px-9 2xl:relative 2xl:translate-y-0 2xl:mx-0"
			>
				<div class="relative w-full my-7">
					<Input id="nombre" class="rounded-none peer" placeholder="Escribe tu Nombre..." />
					<label
						for="nombre"
						class="absolute left-0 -top-6 text-blue-light font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>NOMBRE</label
					>
				</div>
				<div class="relative w-full my-12">
					<Input id="telefono" class="rounded-none peer" placeholder="Escribe tu telefono..." />
					<label
						for="telefono"
						class="absolute left-0 -top-6 text-blue-light font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>TELEFONO</label
					>
				</div>
				<div class="relative w-full my-12">
					<Input id="email" class="rounded-none peer" placeholder="Escribe tu correo..." />
					<label
						for="email"
						class="absolute left-0 -top-6 text-blue-light font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>EMAIL</label
					>
				</div>
				<div class="relative w-full">
					<Textarea
						id="descripcion"
						class="rounded-none peer h-full"
						placeholder="Escribe tu mensaje..."
					/>
					<label
						for="descripcion"
						class="absolute left-0 -top-6 text-blue-light font-semibold cursor-text peer-focus:-top-8 transition-all text-sm"
						>MENSAJE</label
					>
				</div>

				<input
					class=" inline-block mt-7 text-white bg-orange-500 w-full h-12 rounded-sm"
					type="submit"
					value="ENVIAR MENSAJE"
				/>
			</form>
		</div>
	</section>
</main>
