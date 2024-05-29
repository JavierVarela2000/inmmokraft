const actions = {
  insert: async ({ request, locals }) => {
    const data = await request.formData();
    const imagenes = data.getAll("imagenes");
    let propiedad = data.get("propiedad");
    const names = [];
    const imgObjs = [];
    propiedad = JSON.parse(propiedad);
    for (let index = 0; index < imagenes.length; index++) {
      const image = imagenes[index];
      const name = propiedad.titulo + "/" + index + Date.now();
      names.push(name);
      await locals.supabase.storage.from("properties").upload(name, image);
    }
    propiedad.imagenes = imgObjs;
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      const url = locals.supabase.storage.from("properties").getPublicUrl(name);
      imgObjs.push({ src: url.data.publicUrl, fileName: name });
    }
    console.log(propiedad);
    await locals.supabase.from("Propiedades").insert([propiedad]);
    return { errors: [{ error: 201, message: "error ptm" }] };
  }
};
export {
  actions
};
