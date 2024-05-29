import { c as create_ssr_component, b as subscribe } from "./ssr.js";
import { p as page } from "./stores.js";
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.data;
  Number($page.url.searchParams.get("tipo"));
  Number($page.url.searchParams.get("ubicacion"));
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="m-auto min-h-52 w-11/12 max-w-xl"><div class="flex gap-6 flex-col min-h-28 bg-white py-5 px-6 mt-6 md:flex-row md:px-8 md:justify-center md:items-end">${`<span class="text-black" data-svelte-h="svelte-jxybv7">Cargando ...</span>`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  SearchBar as S
};
