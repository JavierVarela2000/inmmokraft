<script lang="ts">
	//@ts-nocheck
	import FormLayout from '../Layouts/FormLayout.svelte';
	export let imagenes: Array<File> = [];
	export let imagenesPrev: any[] = [];
	export let imagenesToDelete: any[] = [];
	const addImages = (e: Event) => {
		imagenes = [...e.target.files];
	};

	const removeImage = (indexToRemove: number) => {
		imagenes = imagenes.filter((_, index) => index !== indexToRemove);
	};
</script>

<FormLayout>
	<label
		class="flex relative justify-center w-44 h-44 px-4 transition duration-400 bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer text-gray-600 hover:text-gray-500 hover:border-slate-600 hover:bg-blue-dark/20 focus:outline-none"
	>
		<span class="flex flex-col justify-center gap-3 items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-14 h-14"
				><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					class=" fill-slate-500"
					d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
				/></svg
			>
			<span class="font-medium"> Subir Imágenes </span>
		</span>
		<input
			accept=".apng,.jpeg,.pjpeg,.pjpeg,.png,.webp,.jpg"
			type="file"
			multiple
			on:change={addImages}
			class="  absolute w-full h-full opacity-0 cursor-pointer"
		/>
	</label>
	<div class="flex flex-wrap justify-center">
		{#each imagenesPrev as img, index}
			<div class="relative">
				<img class="block w-44 h-44 object-cover" src={img.src} alt={img.fileName} />

				<button
					on:click|preventDefault={() => {
						imagenesPrev = imagenesPrev.filter((_, i) => i !== index);
						imagenesToDelete.push(img.fileName);
					}}
					class="absolute top-0 right-0 w-10 h-10 p-3 bg-red-700 rounded-full flex flex-col gap-3 items-center justify-center translate-x-1/2 z-10 -translate-y-1/2"
				>
					<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							class="fill-slate-300"
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/>
					</svg>
				</button>
			</div>
		{/each}
		{#each imagenes as img, index}
			<div class="relative">
				<img class="block w-44 h-44 object-cover" src={URL.createObjectURL(img)} alt="Imagen" />

				<button
					on:click|preventDefault={() => removeImage(index)}
					class="absolute top-0 right-0 w-10 h-10 p-3 bg-red-700 rounded-full flex flex-col gap-3 items-center justify-center translate-x-1/2 z-10 -translate-y-1/2"
				>
					<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							class="fill-slate-300"
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/>
					</svg>
				</button>
			</div>
		{/each}
	</div>
</FormLayout>
