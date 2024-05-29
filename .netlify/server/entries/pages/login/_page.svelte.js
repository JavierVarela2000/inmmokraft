import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `  <form class="pt-32" method="POST" action="?/login">${form?.missing ? `<p class="error" data-svelte-h="svelte-1tg4rl9">The email field is required</p>` : ``} ${form?.incorrect ? `<p class="error" data-svelte-h="svelte-opf7fj">Invalid credentials!</p>` : ``} <label>Email
		<input class="border" name="email" type="email"${add_attribute("value", form?.email ?? "", 0)}></label> <label data-svelte-h="svelte-l5vfy5">Password
		<input class="border" name="password" type="password"></label> <button data-svelte-h="svelte-113avtv">Log in</button></form>`;
});
export {
  Page as default
};
