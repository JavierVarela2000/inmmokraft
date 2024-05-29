const actions = {
  editar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("canton");
    const errors = [];
    const canton = JSON.parse(data);
    const { error } = await locals.supabase.from("Cantones").update([canton]).eq("id", canton.id);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
