import { c as create_ssr_component, d as add_attribute, b as subscribe, e as each, v as validate_component, l as is_promise, n as noop, f as escape } from "../../../../../chunks/ssr.js";
import { I as InformacionForm, C as CaracteristicasForm, a as InputImg, M as MapForm } from "../../../../../chunks/CaracteristicasForm.js";
import { p as page } from "../../../../../chunks/stores.js";
import "devalue";
import "../../../../../chunks/client.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { M as Modal, S as Spinner } from "../../../../../chunks/Spinner.js";
import { twMerge } from "tailwind-merge";
const TextPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outDivclass;
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    xxl: "max-w-2xl"
  };
  let { divClass = "space-y-2.5 animate-pulse" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  outDivclass = twMerge(sizes[size], divClass, $$props.class);
  return `<div role="status"${add_attribute("class", outDivclass, 0)}><div class="flex items-center space-x-2 rtl:space-x-reverse w-full" data-svelte-h="svelte-1f9rnui"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12" data-svelte-h="svelte-fhr9rh"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-9/12" data-svelte-h="svelte-zhoz82"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12" data-svelte-h="svelte-fhr9rh"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-10/12" data-svelte-h="svelte-14jklk4"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-8/12" data-svelte-h="svelte-1ps0jc7"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  let succes = false;
  let enviando = false;
  let errors = [];
  let imagenes = [];
  let imagenesToDelete = [];
  let propiedad = {};
  const { supabase } = $page.data;
  const id = $page.params.id;
  const getPropiedad = async () => {
    const { data, error } = await supabase.from("Propiedades").select("*").eq("id", id);
    propiedad = data[0];
  };
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
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
        return ` <div class="px-3 md:px-10 flex flex-col gap-10">${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "xxl", class: "mt-8" }, {}, {})} ${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "xxl", class: "mt-8" }, {}, {})} ${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "xxl", class: "mt-8" }, {}, {})} ${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "xxl", class: "mt-8" }, {}, {})}</div> `;
      }
      return function() {
        return ` <form class="px-3 md:px-10 flex flex-col items-end gap-10">${validate_component(InformacionForm, "InformacionForm").$$render(
          $$result,
          {
            precioRenta: propiedad.precio_renta,
            precioVenta: propiedad.precio_venta,
            titulo: propiedad.titulo,
            descripcion: propiedad.descripcion,
            idTipo: propiedad.id_tipo
          },
          {
            precioRenta: ($$value) => {
              propiedad.precio_renta = $$value;
              $$settled = false;
            },
            precioVenta: ($$value) => {
              propiedad.precio_venta = $$value;
              $$settled = false;
            },
            titulo: ($$value) => {
              propiedad.titulo = $$value;
              $$settled = false;
            },
            descripcion: ($$value) => {
              propiedad.descripcion = $$value;
              $$settled = false;
            },
            idTipo: ($$value) => {
              propiedad.id_tipo = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(CaracteristicasForm, "CaracteristicasForm").$$render(
          $$result,
          {
            cuartos: propiedad.cuartos,
            area: propiedad.area,
            garage: propiedad.garage,
            banios: propiedad.banios,
            caracteristicas: propiedad.caracteristicas
          },
          {
            cuartos: ($$value) => {
              propiedad.cuartos = $$value;
              $$settled = false;
            },
            area: ($$value) => {
              propiedad.area = $$value;
              $$settled = false;
            },
            garage: ($$value) => {
              propiedad.garage = $$value;
              $$settled = false;
            },
            banios: ($$value) => {
              propiedad.banios = $$value;
              $$settled = false;
            },
            caracteristicas: ($$value) => {
              propiedad.caracteristicas = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(InputImg, "InputImg").$$render(
          $$result,
          {
            imagenesToDelete,
            imagenes,
            imagenesPrev: propiedad.imagenes
          },
          {
            imagenesToDelete: ($$value) => {
              imagenesToDelete = $$value;
              $$settled = false;
            },
            imagenes: ($$value) => {
              imagenes = $$value;
              $$settled = false;
            },
            imagenesPrev: ($$value) => {
              propiedad.imagenes = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(MapForm, "MapForm").$$render(
          $$result,
          {
            id_provincia: propiedad.id_provincia,
            id_canton: propiedad.id_canton,
            id_parroquia: propiedad.id_parroquia,
            calles: propiedad.referencias,
            latitud: propiedad.latitud,
            longitud: propiedad.longitud
          },
          {
            id_provincia: ($$value) => {
              propiedad.id_provincia = $$value;
              $$settled = false;
            },
            id_canton: ($$value) => {
              propiedad.id_canton = $$value;
              $$settled = false;
            },
            id_parroquia: ($$value) => {
              propiedad.id_parroquia = $$value;
              $$settled = false;
            },
            calles: ($$value) => {
              propiedad.referencias = $$value;
              $$settled = false;
            },
            latitud: ($$value) => {
              propiedad.latitud = $$value;
              $$settled = false;
            },
            longitud: ($$value) => {
              propiedad.longitud = $$value;
              $$settled = false;
            }
          },
          {}
        )} <div class="w-full max-w-[1440px] mx-auto justify-end flex">${validate_component(Button, "Button").$$render($$result, { class: "rounded-none", type: "submit" }, {}, {
          default: () => {
            return `Enviar`;
          }
        })}</div></form> `;
      }();
    }(getPropiedad())}</main>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
