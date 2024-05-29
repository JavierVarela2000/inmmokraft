import { c as create_ssr_component, g as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, d as add_attribute, k as compute_slots, b as subscribe, v as validate_component, e as each, f as escape } from "../../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { p as page } from "../../../chunks/stores.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass", "ariaLabel"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse" } = $$props;
  let { ariaLabel = "Breadcrumb" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0)
    $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<nav${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", twMerge(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav> `;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0)
    $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0)
    $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0)
    $$bindings.homeClass(homeClass);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(twMerge("inline-flex items-center", $$props.class))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${home ? `<a${add_attribute("class", twMerge(homeClass, $$props.classHome), 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`} ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`} ${href ? `<a${add_attribute("class", twMerge(linkClass, $$props.classLink), 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", twMerge(spanClass, $$props.classSpan), 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li> `;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let breadcrumbItems = [];
  {
    {
      const path = $page.url.pathname;
      const segments = path.split("/").filter((segment) => segment !== "");
      breadcrumbItems = [];
      let currentPath = "";
      for (let index = 0; index < segments.length; index++) {
        const segment = segments[index];
        currentPath += `/${segment}`;
        breadcrumbItems.push({ name: segment, path: currentPath });
      }
    }
  }
  $$unsubscribe_page();
  return `<div class="pt-14 bg-gray-100 relative min-h-[calc(100vh)] flex flex-col">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      navClass: "bg-white fixed w-full z-[99999] py-6 shadow pl-5 border-gray-200 border-b md:pl-10 uppercase ",
      "aria-label": "Default breadcrumb example"
    },
    {},
    {
      default: () => {
        return `${each(breadcrumbItems, ({ name, path }, index) => {
          return `${index == 0 ? `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
            $$result,
            {
              class: "hover:scale-[1.02]",
              href: path,
              home: true
            },
            {},
            {
              default: () => {
                return `${escape(name)}`;
              }
            }
          )}` : `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
            $$result,
            {
              linkClass: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-[1.02]",
              href: path
            },
            {},
            {
              default: () => {
                return `${escape(name)}`;
              }
            }
          )}`}`;
        })}`;
      }
    }
  )} <div class="h-20"></div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
