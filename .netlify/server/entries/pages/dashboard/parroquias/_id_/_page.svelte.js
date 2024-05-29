import { c as create_ssr_component, b as subscribe, e as each, v as validate_component, f as escape } from "../../../../../chunks/ssr.js";
import "devalue";
import "../../../../../chunks/client.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { M as Modal, S as Spinner } from "../../../../../chunks/Spinner.js";
import { p as page } from "../../../../../chunks/stores.js";
import { F as FormLayout } from "../../../../../chunks/FormLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let succes = false;
  let errors = [];
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
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1t1dm8x">Parroquia guardada correctamente</p>`;
        }
      }
    )} <main class="pt-10"><form class="m-auto container px-5 md:p-10" method="post" action="?/editar">${validate_component(FormLayout, "FormLayout").$$render($$result, { class: "mx-auto" }, {}, {
      default: () => {
        return `${`<div class="flex w-full h-96 justify-center items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
      }
    })}</form></main>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
