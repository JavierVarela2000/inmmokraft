// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
export const actions = {
	editar: async ({ request, locals }) => {
		const data = await request.formData();
		const imagenes = data.getAll('imagenes');
		let propiedad = data.get('propiedad');
		const imagenesToDelete: string = data.get('imagenesToDelete');
		const names = [];
		const imgObjs = [];
		const errors = [];
		propiedad = JSON.parse(propiedad);

		const { error: errorRemoveStorange } = await locals.supabase.storage
			.from('properties')
			.remove(imagenesToDelete.split(','));

		//primer punto de error
		if (errorRemoveStorange) {
			errors.push(errorRemoveStorange);
		}

		for (let index = 0; index < imagenes.length; index++) {
			const image = imagenes[index];
			const name = propiedad.titulo + '/' + index + Date.now();
			names.push(name);
			const { error } = await locals.supabase.storage.from('properties').upload(name, image);
			if (error) errors.push(error);
		}

		for (let index = 0; index < names.length; index++) {
			const name = names[index];
			const url = locals.supabase.storage.from('properties').getPublicUrl(name);
			imgObjs.push({ src: url.data.publicUrl, fileName: name });
		}

		if (imgObjs.length > 0) propiedad.imagenes = [...propiedad.imagenes, ...imgObjs];

		const { error } = await locals.supabase
			.from('Propiedades')
			.update(propiedad)
			.eq('id', propiedad.id);

		//tercer punto de error
		if (error) {
			errors.push(error);
		}
		return { errors: errors };
	}
} satisfies Actions;
