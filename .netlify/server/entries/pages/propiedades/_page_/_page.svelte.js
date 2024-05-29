import { c as create_ssr_component, f as escape, d as add_attribute, v as validate_component, b as subscribe, e as each, l as is_promise, n as noop } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
import { C as CardPlaceholder } from "../../../../chunks/CardPlaceholder.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { propiedad = {
    id: "",
    titulo: "",
    referencias: "",
    cuartos: 0,
    banios: 0,
    garage: 0,
    area: 0,
    precio_renta: null,
    precio_venta: null,
    imagenes: []
  } } = $$props;
  let { Class = "" } = $$props;
  if ($$props.propiedad === void 0 && $$bindings.propiedad && propiedad !== void 0)
    $$bindings.propiedad(propiedad);
  if ($$props.Class === void 0 && $$bindings.Class && Class !== void 0)
    $$bindings.Class(Class);
  return `<a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover" href="${"/propiedad/" + escape(propiedad.id, true)}" class="${"relative w-80 overflow-hidden shadow-sm bg-white border border-solid mx-auto border-gray-200 hover:shadow-md " + escape(Class, true)}"><div class="h-48"><div class="relative h-full"><div class="absolute top-0 w-full h-full bg-blue-dark/20 z-10"></div> ${propiedad.imagenes.length > 0 ? `<img${add_attribute("src", propiedad.imagenes[0]?.src, 0)}${add_attribute("alt", propiedad.imagenes[0]?.fileName, 0)} class="object-cover w-full h-full block">` : `${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, {}, {}, {})}`}</div></div> ${propiedad.precio_renta ? `<div class="absolute text-xs block top-3 right-5 bg-blue-dark font-medium text-white py-1.5 px-3 z-30" data-svelte-h="svelte-iwmomt">En Renta</div>` : ``} ${propiedad.precio_venta ? `<div class="absolute text-xs block top-3 left-5 bg-blue-light font-medium text-white py-1.5 px-3 z-30" data-svelte-h="svelte-192pigw">En Venta</div>` : ``} <div class="outline outline-1 outline-gray-300 p-3 h-full text-start"><h4 class="font-semibold text-blue-dark py-1 capitalize whitespace-nowrap overflow-x-hidden text-ellipsis">${escape(propiedad.titulo)}</h4> <h5 class="text-gray-400 text-sm pb-4 font-normal whitespace-nowrap overflow-x-hidden text-ellipsis">${escape(propiedad.referencias)}</h5> <div class="flex justify-between mb-3"><div class="flex flex-col items-center gap-1"><img class="w-5 h-5" src="/iconos/bed.svg" alt=""> <span class="text-sm text-gray-400 text-center">${escape(propiedad.cuartos)} Cuartos</span></div> <div class="flex flex-col items-center gap-1"><img class="w-5 h-5" src="/iconos/bath.svg" alt=""> <span class="text-sm text-gray-400 text-center">${escape(propiedad.banios)} baños</span></div> <div class="flex flex-col items-center gap-1"><img class="w-5 h-5" src="/iconos/car.svg" alt=""> <span class="text-sm text-gray-400 text-center">${escape(propiedad.garage)} Garage</span></div> <div class="flex flex-col items-center gap-1"><img class="w-5 h-5" src="/iconos/ruler.svg" alt=""> <span class="text-sm text-gray-400 text-center">${escape(propiedad.area)} m<sup data-svelte-h="svelte-1nsjm82">2</sup></span></div></div> <hr class="bg-gray-300"> <div class="flex justify-between text-blue-dark gap-3 py-3 text-base">${propiedad.precio_venta ? `<span class="">${escape(propiedad.precio_venta)}</span>` : ``} ${propiedad.precio_renta ? `<span class="">${escape(propiedad.precio_renta)}/mes</span>` : ``}</div></div></a>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pages;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { totalItems = 0 } = $$props;
  let { itemsPerPage: itemsPerPage2 = 16 } = $$props;
  let { baseHref = "" } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.itemsPerPage === void 0 && $$bindings.itemsPerPage && itemsPerPage2 !== void 0)
    $$bindings.itemsPerPage(itemsPerPage2);
  if ($$props.baseHref === void 0 && $$bindings.baseHref && baseHref !== void 0)
    $$bindings.baseHref(baseHref);
  pages = Array(Math.ceil(totalItems / itemsPerPage2));
  $$unsubscribe_page();
  return `<div class="flex gap-3 items-center justify-center my-4 md:my-10">${each(pages, (_, i) => {
    return `<a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover" href="${escape(baseHref, true) + escape(i + 1, true) + escape($page.url.search, true)}" class="${"w-10 h-10 shadow transition-colors duration-300 rounded-full inline-flex justify-center items-center hover:bg-blue-light hover:text-white " + escape(
      Number($page.params.page) === i + 1 ? "bg-blue-dark text-white" : "bg-white",
      true
    )}">${escape(i + 1)} </a>`;
  })}</div>`;
});
const itemsPerPage = 12;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let tipo;
  let ubicacion;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let totalItems = 0;
  const { supabase } = $page.data;
  const getData = async () => {
    const query = supabase.from("Propiedades").select("*", { count: "exact" }).order("id", { ascending: true });
    if (tipo > 0)
      query.eq("id_tipo", tipo);
    if (ubicacion > 0)
      query.eq("id_provincia", ubicacion);
    const { data, error, count } = await query.range(Number($page.params.page) * itemsPerPage - itemsPerPage, Number($page.params.page) * itemsPerPage - 1);
    totalItems = count;
    return data;
  };
  url = $page.url;
  tipo = Number(url.searchParams.get("tipo"));
  ubicacion = Number(url.searchParams.get("ubicacion"));
  $$unsubscribe_page();
  return `<main>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="grid mt-10 grid-cols-1 content-center max-w-[675px] gap-4 mx-auto md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:max-w-[1025px] xl:grid-cols-4 xl:max-w-[1375px] 2xl:grid-cols-5 2xl:max-w-[1725px]">${each(Array(itemsPerPage), (_) => {
        return `${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { divClass: "w-80 border border-gray-200" }, {}, {})}`;
      })}</div> `;
    }
    return function(value) {
      return ` <div class="grid mt-10 grid-cols-1 content-center max-w-[675px] gap-4 mx-auto md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:max-w-[1025px] xl:grid-cols-4 xl:max-w-[1375px] 2xl:grid-cols-5 2xl:max-w-[1725px]">${each(value, (propiedad) => {
        return `${validate_component(Card, "Card").$$render($$result, { propiedad }, {}, {})}`;
      })}</div> ${value.length == 0 ? `<div class="container mx-auto flex flex-col items-center justify-center px-4 py-20" data-svelte-h="svelte-1athouc"><div class="bg-white shadow-md border-gray-100 border rounded-lg p-8 w-full"><h2 class="text-2xl font-bold text-center mb-4">Lo sentimos</h2> <p class="text-lg text-gray-700 text-center">No encontramos ninguna propiedad con las características que seleccionaste.</p> <div class="flex flex-col items-center justify-center mt-8"><a href="/propiedades/1?tipo=0&ubicacion=0&estado=0" class="text-blue-light underline hover:scale-[1.01]">Volver a la búsqueda</a> <p class="text-sm text-gray-500 mt-4">¿No encuentras lo que buscas? Contáctanos y te ayudaremos a encontrar la propiedad
								ideal.</p></div></div></div>` : ``} `;
    }(__value);
  }(getData())} ${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      itemsPerPage,
      totalItems,
      baseHref: "/propiedades/"
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
