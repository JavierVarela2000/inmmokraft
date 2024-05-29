import { c as create_ssr_component } from "./ssr.js";
const FormLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-white w-full p-5 md:p-10 mx-auto gap-5 flex flex-col shadow border-gray-200 border">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  FormLayout as F
};
