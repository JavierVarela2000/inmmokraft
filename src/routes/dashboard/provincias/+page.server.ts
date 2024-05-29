// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions } from './$types';
export const actions = {
	eliminar: async ({ locals, request }) => {
		const form = await request.formData();
		const id = form.get('id');
		console.log(id);
		const { error } = await locals.supabase.from('Provincias').delete().eq('id', id);
		return { error: error };
	}
} satisfies Actions;
