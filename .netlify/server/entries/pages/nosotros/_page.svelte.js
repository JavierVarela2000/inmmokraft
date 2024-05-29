import { c as create_ssr_component, f as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mision;
  let vision;
  return `<main class="py-5"><section class=""><article class="items-center justify-center flex flex-col xl:flex-row xl:pt-10"><img class="max-w-[700px]" src="/images/mision.svg" alt=""> <div class="p-5 max-w-[500px]"><h1 class="text-xl font-semibold" data-svelte-h="svelte-1hd6s4n">Misión</h1> <p class="text-gray-700">${escape(mision)}</p></div></article></section> <section class=""><article class="items-center justify-center flex flex-col xl:flex-row-reverse xl:pb-10"><img class="max-w-[700px]" src="/images/vision.svg" alt=""> <div class="p-5 max-w-[500px]"><h1 class="text-xl font-semibold" data-svelte-h="svelte-1hxu1s0">Visión</h1> <p class="text-gray-700">${escape(vision)}</p></div></article></section></main>`;
});
export {
  Page as default
};
