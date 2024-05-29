import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from "../../../chunks/ssr.js";
import { I as Input } from "../../../chunks/Input.js";
import { T as Textarea } from "../../../chunks/Textarea.js";
import { F as FormLayout } from "../../../chunks/FormLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requerimientos = {
    nombre: "",
    correo: "",
    telefono: "",
    presupuesto: "",
    habitaciones: "",
    mascotas: "",
    numeroMascotas: ""
  } } = $$props;
  let mascotas;
  if ($$props.requerimientos === void 0 && $$bindings.requerimientos && requerimientos !== void 0)
    $$bindings.requerimientos(requerimientos);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    mascotas = !requerimientos.mascotas;
    $$rendered = `<div class="pt-24 min-h-screen bg-gray-100 pb-10"><div class="w-11/12 mx-auto flex flex-col gap-3 mb-10" data-svelte-h="svelte-v29d77"><h1 class="font-semibold text-3xl text-blue-dark capitalize">Formulario de requerimientos</h1> <h5 class="text-gray-500 capitalize">Hola un gusto saludarte, te presentamos el siguiente formulario que nos ayudara a encontrar tu
			vivienda ideal, por favor ayúdanos llenando en su totalidad.</h5></div> <form class="w-11/12 mx-auto">${validate_component(FormLayout, "FormLayout").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="grid xl:grid-cols-2 gap-10 pb-9 bg-white"><div class="font-semibold text-blue-dark text-2xl pb-6 xl:col-span-2" data-svelte-h="svelte-wz1gn6">Datos De Contacto</div> <div class="relative w-full">${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "nombre",
            class: "rounded-none peer",
            placeholder: "Escribe tu Nombre..."
          },
          {},
          {}
        )} <label for="nombre" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-17sl4z4">Nombre y Apellidos</label></div> <div class="relative w-full">${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "email",
            id: "email",
            class: "rounded-none peer",
            placeholder: "Escribe tu email..."
          },
          {},
          {}
        )} <label for="email" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-h1s35w">Email</label></div> <div class="relative w-full">${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "phone",
            class: "rounded-none peer",
            placeholder: "Escribe tu email..."
          },
          {},
          {}
        )} <label for="phone" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-1562lwm">Teléfono</label></div></div>`;
      }
    })} <div class="grid xl:grid-cols-2 gap-12 pb-9 bg-white p-10 shadow mt-10"><div class="font-semibold text-blue-dark text-2xl pb-6 xl:col-span-2" data-svelte-h="svelte-1rx8vwz">Datos De Tu Propiedad Ideal</div> <div class="relative w-full">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "pres",
        class: "rounded-none peer",
        placeholder: "Escribe tu presupuesto..."
      },
      {},
      {}
    )} <label for="pres" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-1ol74lz">Presupuesto</label></div> <select name="" id="" class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"><option value="" selected disabled data-svelte-h="svelte-yfnn87">Número de habitaciones (especificas para dormitorios)
				</option>${each([1, 2, 3, 4, "+5"], (item) => {
      return `<option${add_attribute("value", item, 0)}>${escape(item)}</option>`;
    })}</select> <select name="" id="" class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"><option value="" selected disabled data-svelte-h="svelte-xmy6ho">¿Tienes Mascotas? </option><option${add_attribute("value", true, 0)} data-svelte-h="svelte-icyf6a">Si</option><option${add_attribute("value", false, 0)} data-svelte-h="svelte-13pb1fa">No</option></select> <div class="relative w-full">${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "rounded-none peer",
        required: requerimientos.mascotas,
        label: "¿cuantas mascotas tienes?",
        disabled: mascotas,
        value: requerimientos.numeroMascotas
      },
      {
        disabled: ($$value) => {
          mascotas = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          requerimientos.numeroMascotas = $$value;
          $$settled = false;
        }
      },
      {}
    )} <label for="pres" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-9d7a8z">Tamaño de tu mascota</label></div> <div class="relative w-full">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "sector",
        class: "rounded-none peer",
        placeholder: "Define en norte, sur o centro con un bario o sector...",
        value: requerimientos.sector
      },
      {
        value: ($$value) => {
          requerimientos.sector = $$value;
          $$settled = false;
        }
      },
      {}
    )} <label for="sector" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-zk5bct">Sector Ideal</label></div> <select name="garage" id="garage" class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors focus:outline-none focus:placeholder:text-white"><option value="" selected disabled data-svelte-h="svelte-qdxv1v">¿Requieres Garage? </option><option${add_attribute("value", true, 0)} data-svelte-h="svelte-icyf6a">Si</option><option${add_attribute("value", false, 0)} data-svelte-h="svelte-13pb1fa">No</option></select> <div class="relative w-full xl:col-span-2">${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "descripcion",
        class: "rounded-none peer h-32",
        placeholder: "Describenos brevemente tu propiedad ideal...",
        value: requerimientos.descripcion
      },
      {
        value: ($$value) => {
          requerimientos.descripcion = $$value;
          $$settled = false;
        }
      },
      {}
    )} <label for="descripcion" class="absolute left-0 -top-7 text-gray-700 font-semibold cursor-text peer-focus:-top-8 transition-all text-sm" data-svelte-h="svelte-152mb4q">Descripcion</label></div></div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
