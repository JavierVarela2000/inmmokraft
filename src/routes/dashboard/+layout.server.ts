// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();

	// if the user is already logged in return them to the account page
	if (!session) {
		throw redirect(303, '/login');
	}
};
