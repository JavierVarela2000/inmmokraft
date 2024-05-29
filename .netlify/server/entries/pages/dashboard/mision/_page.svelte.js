import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { F as FormLayout } from "../../../../chunks/FormLayout.js";
import { B as Button } from "../../../../chunks/Button.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mision;
  return `<form class="m-auto container px-5 md:p-10" method="post" action="?/editar">${validate_component(FormLayout, "FormLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="text-xl font-semibold text-blue-dark" data-svelte-h="svelte-6v2a8y">Misión</span> ${validate_component(Textarea, "Textarea").$$render(
        $$result,
        {
          value: mision,
          name: "mision",
          class: "rounded-none min-h-80 md:min-h-52"
        },
        {},
        {}
      )} ${validate_component(Button, "Button").$$render($$result, { class: "rounded-none", type: "submit" }, {}, {
        default: () => {
          return `Enviar`;
        }
      })}`;
    }
  })}</form>`;
});
export {
  Page as default
};
