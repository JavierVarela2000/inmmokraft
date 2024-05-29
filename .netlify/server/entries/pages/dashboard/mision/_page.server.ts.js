import fs from "fs";
const actions = {
  editar: async ({ request }) => {
    const formData = await request.formData();
    const mision = formData.get("mision");
    const data = JSON.parse(fs.readFileSync("static/appData.json", "utf8"));
    data.mision = mision;
    fs.writeFileSync("static/appData.json", JSON.stringify(data, null, 2), "utf8");
  }
};
export {
  actions
};
