const actions = {
  insertar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("parroquia");
    const errors = [];
    const parroquia = JSON.parse(data);
    const { error } = await locals.supabase.from("Parroquias").update([parroquia]).eq("id", parroquia.id);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
