// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
import type { Provincia } from '$lib/interfaces';
export const actions = {
	insertar: async ({ request, locals }) => {
		const form = await request.formData();
		const data = form.get('provincia');
		const errors = [];
		const provincia: Provincia = JSON.parse(data) as Provincia;
		console.log(provincia);
		const { error } = await locals.supabase.from('Provincias').insert([provincia]);

		if (error) {
			errors.push(error);
		}
		return { errors: errors };
	}
} satisfies Actions;
