// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
export const actions = {
	insert: async ({ request, locals }) => {
		const errors = [];
		const data = await request.formData();
		const imagenes = data.getAll('imagenes');
		let propiedad = data.get('propiedad');
		const names = [];
		const imgObjs = [];
		propiedad = JSON.parse(propiedad);

		for (let index = 0; index < imagenes.length; index++) {
			const image = imagenes[index];
			const name = propiedad.titulo + '/' + index + Date.now();
			names.push(name);
			const { error } = await locals.supabase.storage.from('properties').upload(name, image);
			//primer punto de error
			if (error) errors.push(error);
		}

		propiedad.imagenes = imgObjs;

		for (let index = 0; index < names.length; index++) {
			const name = names[index];
			const url = locals.supabase.storage.from('properties').getPublicUrl(name);
			imgObjs.push({ src: url.data.publicUrl, fileName: name });
		}
		console.log(propiedad);
		const { error } = await locals.supabase.from('Propiedades').insert([propiedad]);
		if (error) errors.push(error);
		return { errors: [{ error: 201, message: 'error ptm' }] };
	}
} satisfies Actions;
