const actions = {
  eliminar: async ({ locals, request }) => {
    const form = await request.formData();
    const id = form.get("id");
    console.log(id);
    const { error } = await locals.supabase.from("Provincias").delete().eq("id", id);
    return { error };
  }
};
export {
  actions
};
