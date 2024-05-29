const actions = {
  editar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("provincia");
    const errors = [];
    const provincia = JSON.parse(data);
    const { error } = await locals.supabase.from("Provincias").update(provincia).eq("id", provincia.id);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
