import { c as create_ssr_component, e as each, v as validate_component, f as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import "devalue";
import { B as Button } from "../../../../../chunks/Button.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { M as Modal, S as Spinner } from "../../../../../chunks/Spinner.js";
import { F as FormLayout } from "../../../../../chunks/FormLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let succes = false;
  let enviando = false;
  let errors = [];
  let provincia = {};
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(errors, (error) => {
      return `${validate_component(Modal, "Modal").$$render(
        $$result,
        {
          title: "¡Error!",
          open: true,
          autoclose: true
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
            return `<pre class="text-base leading-relaxed text-gray-500 dark:text-gray-400">			${escape(JSON.stringify(error, null, 2))}
		</pre> `;
          }
        }
      )}`;
    })} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "¡Éxito!",
        autoclose: true,
        outsideclose: true,
        open: succes
      },
      {
        open: ($$value) => {
          succes = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Ok`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-nzuvel">Propiedad guardada correctamente</p>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
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
    )} <main class="pt-10"><form class="m-auto container px-5 md:p-10" method="post" action="?/editar">${validate_component(FormLayout, "FormLayout").$$render($$result, { class: "mx-auto" }, {}, {
      default: () => {
        return `<div class="relative w-full my-3">${validate_component(Input, "Input").$$render(
          $$result,
          {
            required: true,
            id: "nombre",
            class: "rounded-none peer",
            placeholder: "Nombre de la provincia...",
            value: provincia.nombre
          },
          {
            value: ($$value) => {
              provincia.nombre = $$value;
              $$settled = false;
            }
          },
          {}
        )} <label for="nombre" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-17lnk7w">Nombre</label></div> <div class="relative w-full my-3">${validate_component(Input, "Input").$$render(
          $$result,
          {
            required: true,
            type: "number",
            min: "-100",
            step: "any",
            id: "latitud",
            class: "rounded-none peer",
            placeholder: "Latitud...",
            value: provincia.latitud
          },
          {
            value: ($$value) => {
              provincia.latitud = $$value;
              $$settled = false;
            }
          },
          {}
        )} <label for="latitud" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-1yj3wp8">Latitud</label></div> <div class="relative w-full my-3">${validate_component(Input, "Input").$$render(
          $$result,
          {
            required: true,
            type: "number",
            min: "-100",
            step: "any",
            id: "longitud",
            class: "rounded-none peer",
            placeholder: "Longitud...",
            value: provincia.longitud
          },
          {
            value: ($$value) => {
              provincia.longitud = $$value;
              $$settled = false;
            }
          },
          {}
        )} <label for="longitud" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-jmebei">Longitud</label></div> ${validate_component(Button, "Button").$$render($$result, { class: "rounded-none", type: "submit" }, {}, {
          default: () => {
            return `Enviar`;
          }
        })}`;
      }
    })}</form></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
