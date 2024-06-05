import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
export const actions = {
	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/login');
		}
	}
} satisfies Actions;
