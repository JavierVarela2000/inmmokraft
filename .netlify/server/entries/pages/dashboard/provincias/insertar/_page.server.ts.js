const actions = {
  insertar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("provincia");
    const errors = [];
    const provincia = JSON.parse(data);
    console.log(provincia);
    const { error } = await locals.supabase.from("Provincias").insert([provincia]);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
