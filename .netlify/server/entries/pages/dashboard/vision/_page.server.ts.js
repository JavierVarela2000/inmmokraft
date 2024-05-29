import fs from "fs";
const actions = {
  editar: async ({ request }) => {
    try {
      const formData = await request.formData();
      const vision = formData.get("vision");
      const data = JSON.parse(fs.readFileSync("static/appData.json", "utf8"));
      data.vision = vision;
      fs.writeFileSync("static/appData.json", JSON.stringify(data, null, 2), "utf8");
      return { succes: true };
    } catch (error) {
      return { succes: false };
    }
  }
};
export {
  actions
};
