const actions = {
  eliminar: async ({ locals, request }) => {
    const form = await request.formData();
    const id = form.get("id");
    const { error } = await locals.supabase.from("Cantones").delete().eq("id", id);
    return { error };
  }
};
export {
  actions
};
