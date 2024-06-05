<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center py-40">
	<a
		data-sveltekit-preload-code="hover"
		href="/dashboard/propiedades"
		class="bg-white rounded-lg min-w-60 shadow-md p-6 flex items-center justify-center hover:bg-blue-dark/5 transition-colors duration-300"
	>
		<div class="flex-shrink-0 pr-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 text-gray-500"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 2a1 1 0 0 1 .707.293l6 6a1 1 0 0 1 .293.707V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.414a1 1 0 0 1 .293-.707l6-6A1 1 0 0 1 10 2zm1 3.414V15h2V6.414L10 3.414zM7 15v-3a1 1 0 1 1 2 0v3h1a1 1 0 0 1 1 1v1H6v-1a1 1 0 0 1 1-1h1z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Propiedades</h3>
		</div>
	</a>
	<a
		data-sveltekit-preload-code="hover"
		href="/dashboard/provincias"
		class="bg-white rounded-lg min-w-60 shadow-md p-6 flex items-center justify-center hover:bg-blue-dark/5 transition-colors duration-300"
	>
		<div class="flex-shrink-0 mr-1">
			<img class="block object-cover h-8" src="/iconos/ubicaciones.png" alt="provincias" />
		</div>
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Provincias</h3>
		</div>
	</a>
	<a
		data-sveltekit-preload-code="hover"
		href="/dashboard/cantones"
		class="bg-white rounded-lg min-w-60 shadow-md p-6 flex items-center justify-center hover:bg-blue-dark/5 transition-colors duration-300"
	>
		<div class="flex-shrink-0 mr-1">
			<img class="block object-cover h-8" src="/iconos/ubicaciones.png" alt="parroquias" />
		</div>
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Cantones</h3>
		</div>
	</a>
	<a
		data-sveltekit-preload-code="hover"
		href="/dashboard/parroquias"
		class="bg-white rounded-lg min-w-60 shadow-md p-6 flex items-center justify-center hover:bg-blue-dark/5 transition-colors duration-300"
	>
		<div class="flex-shrink-0 mr-1">
			<img class="block object-cover h-8" src="/iconos/ubicaciones.png" alt="ubicaciones" />
		</div>
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Parroquias</h3>
		</div>
	</a>
	<form class=" w-full flex justify-center pt-10" method="post" action="?/signout">
		<div>
			<Button type="submit" color="red">Cerrar Sesion</Button>
		</div>
	</form>
</div>
