import { r as redirect, f as fail } from "../../../chunks/index.js";
const load = async ({ url, locals: { getSession } }) => {
  const session = await getSession();
  if (session) {
    throw redirect(303, "/account");
  }
  return { url: url.origin };
};
const actions = {
  login: async ({ request, locals: { supabase } }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
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
      throw redirect(303, "/account");
    }
    return { success: false };
  }
  // register: async (event) => {
  // 	// TODO register the user
  // }
};
export {
  actions,
  load
};
