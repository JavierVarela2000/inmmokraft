import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SearchBar } from "../../../chunks/SearchBar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-[url('/images/img_header.jpg')] w-full bg-center pt-14"><div class="w-full h-full bg-blue-dark/50 flex items-center justify-center md:pt-5 pb-6 md:pb-0">${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}</div></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
