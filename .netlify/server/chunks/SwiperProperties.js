import { c as create_ssr_component, b as subscribe, e as each, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import "swiper";
import "swiper/modules";
import { C as CardPlaceholder } from "./CardPlaceholder.js";
const css = {
  code: ".swiper-slide.svelte-1ns7yzy{font-size:18px;display:flex;justify-content:center;align-items:center}",
  map: null
};
const SwiperProperties = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.data.supabase;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="w-full"><div class="swiper mySwiper max-w-[1440px]"><div class="swiper-wrapper pt-5 pb-14">${`${each(Array(5), (_) => {
    return `${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { divClass: " mx-4 shadow-md px-4 w-80" }, {}, {})}`;
  })}`}</div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div> <div class="swiper-pagination"></div></div> </div>`;
});
export {
  SwiperProperties as S
};
