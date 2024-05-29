import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { F as FormLayout } from "../../../../chunks/FormLayout.js";
import { B as Button } from "../../../../chunks/Button.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
import { M as Modal, S as Spinner } from "../../../../chunks/Spinner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vision;
  let enviando = false;
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${form?.succes == true ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "¡Éxito!",
        open: true,
        autoclose: true,
        outsideclose: true
      },
      {},
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Ok`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-npqot7">Propiedad guardada correctamente</p>`;
        }
      }
    )}` : `${form?.succes == false ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "¡Error!",
        open: true,
        autoclose: true,
        outsideclose: true
      },
      {},
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Ok`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-vtlkgk">Algo salió mal, intentalo mas tarde</p>`;
        }
      }
    )}` : ``}`} ${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Enviando", open: enviando },
      {
        open: ($$value) => {
          enviando = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`;
        }
      }
    )} <form class="m-auto container px-5 md:p-10" method="post" action="?/editar">${validate_component(FormLayout, "FormLayout").$$render($$result, {}, {}, {
      default: () => {
        return `<span class="text-xl font-semibold text-blue-dark" data-svelte-h="svelte-1jvtqsx">Visión</span> ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            value: vision,
            name: "vision",
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
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
