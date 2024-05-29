import { c as create_ssr_component, b as subscribe, e as each, v as validate_component, l as is_promise, n as noop, f as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import "devalue";
import "../../../../../chunks/client.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { M as Modal, S as Spinner } from "../../../../../chunks/Spinner.js";
import { F as FormLayout } from "../../../../../chunks/FormLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let succes = false;
  let enviando = false;
  let errors = [];
  let provincia;
  const { supabase } = $page.data;
  const id = $page.params.id;
  const getProvincia = async () => {
    const { data, error } = await supabase.from("Provincias").select("*").eq("id", id);
    provincia = data[0];
  };
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
    )} <main class="pt-10">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="m-auto container px-5 md:p-10">${validate_component(FormLayout, "FormLayout").$$render($$result, { class: "mx-auto" }, {}, {
          default: () => {
            return `<div class="relative w-full my-3 flex justify-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`;
          }
        })}</div> `;
      }
      return function(value) {
        return ` <form class="m-auto container px-5 md:p-10" method="post" action="?/editar">${validate_component(FormLayout, "FormLayout").$$render($$result, { class: "mx-auto" }, {}, {
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
            )} <label for="nombre" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-8antii">Nombre</label></div> <div class="relative w-full my-3">${validate_component(Input, "Input").$$render(
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
            )} <label for="latitud" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-urv8wu">Latitud</label></div> <div class="relative w-full my-3">${validate_component(Input, "Input").$$render(
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
            )} <label for="longitud" class="absolute left-0 -top-6 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-15pscpg">Longitud</label></div> ${validate_component(Button, "Button").$$render($$result, { class: "rounded-none", type: "submit" }, {}, {
              default: () => {
                return `Enviar`;
              }
            })}`;
          }
        })}</form> `;
      }();
    }(getProvincia())}</main>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
