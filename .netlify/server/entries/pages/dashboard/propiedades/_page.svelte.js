import { c as create_ssr_component, b as subscribe, l as is_promise, n as noop, v as validate_component, e as each, f as escape } from "../../../../chunks/ssr.js";
import { I as Input } from "../../../../chunks/Input.js";
import { L as ListPlaceholder } from "../../../../chunks/ListPlaceholder.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const supabase = $page.data.supabase;
  let propiedades = [];
  const getData = async () => {
    const { data, error } = await supabase.from("Propiedades").select(`*,
                Cantones(*),
                Provincias(*),
                Parroquias(*),
                Tipos(*)
            `).order("id", { ascending: true });
    propiedades = data;
  };
  $$unsubscribe_page();
  return `<main class="py-10"><div class="w-[95%] max-w-1440px mx-auto" data-svelte-h="svelte-m23fud"><a class="bg-blue-dark text-white p-4" href="/dashboard/propiedades/insertar"><span class="text-xl">+</span> Agregar propiedad</a></div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(ListPlaceholder, "ListPlaceholder").$$render($$result, { divClass: "w-full w-[95%] mx-auto mt-10" }, {}, {})} `;
    }
    return function(value) {
      return ` ${validate_component(Table, "Table").$$render(
        $$result,
        {
          class: "w-[95%] max-w-1440px mx-auto shadow my-10",
          hoverable: true
        },
        {},
        {
          default: () => {
            return `${validate_component(TableHead, "TableHead").$$render($$result, { class: "bg-blue-dark text-white" }, {}, {
              default: () => {
                return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Id`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Titulo`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Tipo`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Ubicacion`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `<span class="sr-only" data-svelte-h="svelte-1evs4en">Edit</span>`;
                  }
                })}`;
              }
            })} ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
              default: () => {
                return `${each(propiedades, (propiedad) => {
                  return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(propiedad.id)}`;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(propiedad.titulo)}`;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(propiedad.Tipos.nombre)}`;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(propiedad.Provincias.nombre)} | ${escape(propiedad.Cantones.nombre)} | ${escape(propiedad.Parroquias.nombre)}`;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                        $$result,
                        {
                          tdClass: "flex justify-center items-center gap-1"
                        },
                        {},
                        {
                          default: () => {
                            return `<a href="${"/dashboard/propiedades/" + escape(propiedad.id, true)}" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a> <form method="post" action="?/eliminar">${validate_component(Input, "Input").$$render(
                              $$result,
                              {
                                type: "hidden",
                                value: propiedad.id,
                                name: "id"
                              },
                              {},
                              {}
                            )} ${validate_component(Input, "Input").$$render(
                              $$result,
                              {
                                class: "hover:scale-105 cursor-pointer",
                                type: "submit",
                                value: "Eliminar",
                                color: "red"
                              },
                              {},
                              {}
                            )}</form> `;
                          }
                        }
                      )} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        }
      )} `;
    }();
  }(getData())}</main>`;
});
export {
  Page as default
};
