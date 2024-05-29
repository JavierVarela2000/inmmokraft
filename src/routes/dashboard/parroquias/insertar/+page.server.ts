// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
import type { Parroquia } from '$lib/interfaces';
export const actions = {
	insertar: async ({ request, locals }) => {
		const form = await request.formData();
		const data = form.get('parroquia');
		const errors = [];
		const parroquia: Parroquia = JSON.parse(data);
		console.log(parroquia);
		const { error } = await locals.supabase.from('Parroquias').insert([parroquia]);

		if (error) {
			errors.push(error);
		}
		return { errors: errors };
	}
} satisfies Actions;
