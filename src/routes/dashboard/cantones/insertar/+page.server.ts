// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
import type { Canton } from '$lib/interfaces';
export const actions = {
	insertar: async ({ request, locals }) => {
		const form = await request.formData();
		const data = form.get('canton');
		const errors = [];
		const canton: Canton = JSON.parse(data);
		console.log(canton);
		const { error } = await locals.supabase.from('Cantones').insert([canton]);

		if (error) {
			errors.push(error);
		}
		return { errors: errors };
	}
} satisfies Actions;
