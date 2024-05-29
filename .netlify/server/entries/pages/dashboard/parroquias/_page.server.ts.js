const actions = {
  eliminar: async ({ locals, request }) => {
    const form = await request.formData();
    const id = form.get("id");
    const { error } = await locals.supabase.from("Parroquias").delete().eq("id", id);
    return { error };
  }
};
export {
  actions
};
