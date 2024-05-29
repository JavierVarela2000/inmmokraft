import { c as create_ssr_component, b as subscribe, v as validate_component, e as each, f as escape } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { L as Label, S as Select } from "../../../../chunks/Select.js";
import { I as Input } from "../../../../chunks/Input.js";
import { M as Modal, S as Spinner } from "../../../../chunks/Spinner.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let showDeleteAlert = false;
  $page.data.supabase;
  let eliminando = false;
  let provincias = [];
  let handleCantones = [];
  let succesDelete = false;
  let id_provincia = 1;
  let id;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Eliminando!",
        autoclose: true,
        open: eliminando
      },
      {
        open: ($$value) => {
          eliminando = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "¡Éxito!",
        autoclose: true,
        outsideclose: true,
        open: succesDelete
      },
      {
        open: ($$value) => {
          succesDelete = $$value;
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
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-qdgf53">Cantón eliminado correctamente</p>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "¡Alerta!",
        autoclose: true,
        outsideclose: true,
        open: showDeleteAlert
      },
      {
        open: ($$value) => {
          showDeleteAlert = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<form method="post" action="?/eliminar">${validate_component(Input, "Input").$$render($$result, { type: "hidden", value: id, name: "id" }, {}, {})} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              class: "hover:scale-105 cursor-pointer",
              type: "submit",
              value: "Eliminar",
              color: "red"
            },
            {},
            {}
          )}</form> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Cancelar`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-vcvupq">Estas por eliminar un cantón</p>`;
        }
      }
    )} <main class="py-10"><div class="w-[95%] max-w-1440px mx-auto flex justify-between"><a class="bg-blue-dark text-white p-4" href="/dashboard/cantones/insertar" data-svelte-h="svelte-k08x24"><span class="text-xl">+</span> Agregar Cantón</a> ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Provincia
			${validate_component(Select, "Select").$$render(
          $$result,
          {
            required: true,
            class: "rounded-none cursor-pointer font-normal mt-1",
            placeholder: "Elige una provincia...",
            items: provincias,
            value: id_provincia
          },
          {
            value: ($$value) => {
              id_provincia = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> ${`${validate_component(Table, "Table").$$render(
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
                  return `Nombre`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Provincia`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Latitud`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Longitud`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `<span class="sr-only" data-svelte-h="svelte-1evs4en">Edit</span>`;
                }
              })}`;
            }
          })} ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
            default: () => {
              return `${handleCantones.length ? each(handleCantones, (canton) => {
                return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(canton.id)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(canton.nombre)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(canton.Provincias.nombre)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(canton.latitud)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(canton.longitud)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                      $$result,
                      {
                        tdClass: "flex justify-center items-center gap-1"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render(
                            $$result,
                            {
                              href: "/dashboard/cantones/" + canton.id,
                              class: "font-medium  hover:underline "
                            },
                            {},
                            {
                              default: () => {
                                return `Edit`;
                              }
                            }
                          )} ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
                            default: () => {
                              return `Eliminar`;
                            }
                          })} `;
                        }
                      }
                    )} `;
                  }
                })}`;
              }) : `No hay cantones`}`;
            }
          })}`;
        }
      }
    )}`}</main>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
