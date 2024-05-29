const actions = {
  insertar: async ({ request, locals }) => {
    const form = await request.formData();
    const data = form.get("parroquia");
    const errors = [];
    const parroquia = JSON.parse(data);
    console.log(parroquia);
    const { error } = await locals.supabase.from("Parroquias").insert([parroquia]);
    if (error) {
      errors.push(error);
    }
    return { errors };
  }
};
export {
  actions
};
