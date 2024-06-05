// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();

	// if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/dashboard');
	}

	return { url: url.origin };
};

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		if (!email || !password) {
			return fail(400, { email, missing: true });
		}

		if (!password) {
			return fail(400, { email, incorrect: true });
		}

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (!error) {
			throw redirect(303, '/dashboard');
		}

		return { success: false };
	}
	// register: async (event) => {
	// 	// TODO register the user
	// }
};
