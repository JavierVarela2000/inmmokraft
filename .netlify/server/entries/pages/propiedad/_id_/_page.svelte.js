import { c as create_ssr_component, d as add_attribute, e as each, p as onDestroy, f as escape, b as subscribe, l as is_promise, n as noop, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as SwiperProperties } from "../../../../chunks/SwiperProperties.js";
import "swiper";
import "swiper/modules";
/* empty css                         */
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
import { twMerge } from "tailwind-merge";
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outDivclass;
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    xxl: "max-w-2xl"
  };
  let { divClass = "animate-pulse" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  outDivclass = twMerge(sizes[size], divClass, $$props.class);
  return `<div role="status"${add_attribute("class", outDivclass, 0)}><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const css = {
  code: ".swiper.svelte-1nmb8xo.svelte-1nmb8xo.svelte-1nmb8xo{width:100%;margin:0 auto}.swiper-slide.svelte-1nmb8xo img.svelte-1nmb8xo.svelte-1nmb8xo{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.mySwiper.svelte-1nmb8xo.svelte-1nmb8xo.svelte-1nmb8xo{height:20%;box-sizing:border-box;padding:10px 0}.mySwiper.svelte-1nmb8xo img.svelte-1nmb8xo.svelte-1nmb8xo{opacity:0.4}.mySwiper.svelte-1nmb8xo .swiper-slide-thumb-active img.svelte-1nmb8xo.svelte-1nmb8xo{opacity:1}.mySwiper.svelte-1nmb8xo .swiper-slide.svelte-1nmb8xo:hover:not(.swiper-slide-thumb-active) img.svelte-1nmb8xo{opacity:0.8}.mySwiper.svelte-1nmb8xo .swiper-slide.svelte-1nmb8xo.svelte-1nmb8xo:hover:not(.swiper-slide-thumb-active){cursor:pointer}.mySwiper2.svelte-1nmb8xo.svelte-1nmb8xo.svelte-1nmb8xo{height:80%;cursor:grab}",
  map: null
};
const SwiperThumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let swiper;
  let swiper2;
  let { imagenes } = $$props;
  if ($$props.imagenes === void 0 && $$bindings.imagenes && imagenes !== void 0)
    $$bindings.imagenes(imagenes);
  $$result.css.add(css);
  return `<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2 svelte-1nmb8xo"${add_attribute("this", swiper2, 0)}><div class="swiper-wrapper">${each(imagenes, ({ src, fileName }) => {
    return `<div class="swiper-slide svelte-1nmb8xo"><img${add_attribute("src", src, 0)}${add_attribute("alt", fileName, 0)} class="svelte-1nmb8xo"> </div>`;
  })}</div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div></div> <div thumbsslider="" class="swiper mySwiper h-1/5 svelte-1nmb8xo"${add_attribute("this", swiper, 0)}><div class="swiper-wrapper">${each(imagenes, ({ src, fileName }) => {
    return `<div class="swiper-slide bg-blue-dark svelte-1nmb8xo"><img class="transition-opacity svelte-1nmb8xo"${add_attribute("src", src, 0)}${add_attribute("alt", fileName, 0)}> </div>`;
  })}</div> </div>`;
});
const MapProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  let { latitud } = $$props;
  let { longitud } = $$props;
  let { zoom = 10 } = $$props;
  let { referencias } = $$props;
  onDestroy(async () => {
  });
  if ($$props.latitud === void 0 && $$bindings.latitud && latitud !== void 0)
    $$bindings.latitud(latitud);
  if ($$props.longitud === void 0 && $$bindings.longitud && longitud !== void 0)
    $$bindings.longitud(longitud);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.referencias === void 0 && $$bindings.referencias && referencias !== void 0)
    $$bindings.referencias(referencias);
  return `<div class="w-full h-72 mt-5 z-0 sm:h-96 xl:h-[450px] 2xl:h-[500px]"${add_attribute("this", mapElement, 0)}></div> ${referencias ? `<span class="text-gray-500 mt-3">${escape(referencias)}</span>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const getData = async () => {
    const { data, error } = await $page.data.supabase.from("Propiedades").select(`*,
                Cantones(*),
                Provincias(*),
                Parroquias(*)
            `).eq("id", id);
    return data[0];
  };
  id = $page.params.id;
  $$unsubscribe_page();
  return `<main class="px-[5%] py-24 xl:mx-auto xl:w-11/12">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="h-96 md:h-[500px] lg:h-[600px]">${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, {}, {}, {})}</div> ${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "my-8 max-w-none" }, {}, {})} ${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "my-8 max-w-none" }, {}, {})} ${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "my-8 max-w-none" }, {}, {})} ${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "my-8 max-w-none" }, {}, {})} `;
    }
    return function(propiedad) {
      return ` ${propiedad ? ` <section class="h-96 md:h-[500px] lg:h-[600px] xl:h-[75vh]">${propiedad?.imagenes.length > 0 ? `${validate_component(SwiperThumbs, "SwiperThumbs").$$render($$result, { imagenes: propiedad?.imagenes }, {}, {})}` : `${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, {}, {}, {})}`} </section> <section class="mt-5 flex flex-col"><h3 class="font-semibold text-blue-dark capitalize text-2xl">${escape(propiedad?.titulo)}</h3> <div class="flex flex-col gap-5 mt-1"><h6 class="capitalize text-gray-500 text-sm" data-svelte-h="svelte-1k5rmak">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h6> <div class="text-white flex items-start gap-2">${propiedad.precio_venta ? `<div class="bg-blue-light px-3 py-1 rounded text-[10px] font-semibold flex gap-2 hover:scale-110" data-svelte-h="svelte-8ckj0q">EN VENTA</div>` : ``} ${propiedad.precio_renta ? `<div class="bg-blue-dark px-3 py-1 rounded text-[10px] font-semibold flex gap-2 hover:scale-110" data-svelte-h="svelte-3adqhu">EN RENTA</div>` : ``}</div></div> <div class="text-gray-500 flex gap-7 mt-5 flex-wrap"><div class="flex gap-2 text-sm"><img src="/iconos/bed-grey.svg" alt=""> <span>${escape(propiedad?.cuartos)} Cuartos</span></div> <div class="flex gap-2 text-sm"><img src="/iconos/bath-grey.svg" alt=""> <span>${escape(propiedad.banios)} Baños</span></div> <div class="flex gap-2 text-sm"><img src="/iconos/garage-grey.svg" alt=""> <span>${escape(propiedad.garage)} Garage</span></div> <div class="flex gap-2 text-sm"><img src="/iconos/area-grey.svg" alt=""> <span>${escape(propiedad.area)} m<sup data-svelte-h="svelte-1nsjm82">2</sup></span></div></div> <div class="flex gap-2 mt-5 flex-wrap text-white">${each(propiedad.caracteristicas, (caracteristica) => {
        return `<span class="bg-green-700 px-3 py-1 rounded-full text-[10px] font-semibold flex gap-2 uppercase hover:scale-110">${escape(caracteristica)} </span>`;
      })}</div> <div class="flex flex-col gap-1 mt-5 text-blue-dark font-semibold"><span class="">${propiedad.precio_venta ? `${escape(propiedad.precio_venta)}` : ``}</span> <span class="">${propiedad.precio_renta ? `${escape(propiedad.precio_renta)}/mes` : ``}</span></div> <article><h5 class="text-lg font-semibold text-blue-dark mt-5" data-svelte-h="svelte-1sf3qus">Descripción</h5> <p class="text-gray-500 mt-3">${escape(propiedad.descripcion)}</p></article></section> <hr class="my-5"> <section class="flex flex-col items-start"><span class="text-lg font-semibold text-blue-dark mb-3" data-svelte-h="svelte-1br3aka">Ubicación</span> <div class="flex gap-3 text-sm"><div class="flex flex-col gap-1" data-svelte-h="svelte-17kdv6v"><span class="font-semibold text-blue-dark">Provincia:</span> <span class="font-semibold text-blue-dark">Canton:</span> <span class="font-semibold text-blue-dark">Parroquia:</span></div> <div class="flex flex-col gap-1 text-gray-500"><span>${escape(propiedad.Provincias.nombre)}</span> <span>${escape(propiedad.Cantones.nombre)}</span> <span>${escape(propiedad.Parroquias.nombre)}</span></div></div> ${validate_component(MapProperty, "MapProperty").$$render(
        $$result,
        {
          referencias: propiedad.referencias,
          latitud: propiedad.latitud,
          longitud: propiedad.longitud,
          zoom: 14
        },
        {},
        {}
      )}</section>` : ``} `;
    }(__value);
  }(getData())}</main> <section class="bg-gray-100 py-16"><span class="font-semibold text-3xl block text-center py-3" data-svelte-h="svelte-lgtn3h">Más Propiedades</span> <span class="font'semibold block text-center text-gray-600" data-svelte-h="svelte-1tlnkos">Busca Más Propiedades Similares En Nuestro Catálogo</span> ${validate_component(SwiperProperties, "SwiperProperties").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
