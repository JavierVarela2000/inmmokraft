// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
export const actions = {
	eliminar: async ({ locals, request }) => {
		const form = await request.formData();
		const id = form.get('id');
		const { data } = await locals.supabase.from('Propiedades').select('imagenes').eq('id', id);
		const imagenes = data[0].imagenes;
		const imagenesToDelete = [];
		for (let index = 0; index < imagenes.length; index++) {
			const element = imagenes[index];
			imagenesToDelete.push(element.fileName);
		}
		const { error } = await locals.supabase.from('Propiedades').delete().eq('id', id);
		return { error: error };
	}
} satisfies Actions;
