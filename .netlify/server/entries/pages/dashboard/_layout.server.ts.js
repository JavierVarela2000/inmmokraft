import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals: { getSession } }) => {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/login");
  }
};
export {
  load
};
