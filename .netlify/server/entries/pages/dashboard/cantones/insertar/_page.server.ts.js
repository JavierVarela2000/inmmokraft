const actions = {
  insertar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("canton");
    const errors = [];
    const canton = JSON.parse(data);
    console.log(canton);
    const { error } = await locals.supabase.from("Cantones").insert([canton]);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
