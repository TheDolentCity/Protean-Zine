var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1b49292 = require("../../chunks/index-e1b49292.js");
var import_default_layout_279951cd = require("../../chunks/default-layout-279951cd.js");
var import_estimated_read_time = require("estimated-read-time");
const DocumentAttachment32 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { class: className = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  ariaLabel = $$props["aria-label"];
  ariaLabelledBy = $$props["aria-labelledby"];
  labelled = ariaLabel || ariaLabelledBy || title;
  attributes = {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: tabindex === "0" ? true : focusable,
    tabindex
  };
  return `
<svg${(0, import_index_e1b49292.a)([
    {
      "data-carbon-icon": "DocumentAttachment32"
    },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "32" },
    { height: "32" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M26,30H11a2.0023,2.0023,0,0,1-2-2V22h2v6H26V6H17V4h9a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30Z"}"></path><path d="${"M17 10H24V12H17zM16 15H24V17H16zM15 20H24V22H15zM9 19a5.0055 5.0055 0 01-5-5V3H6V14a3 3 0 006 0V5a1 1 0 00-2 0V15H8V5a3 3 0 016 0v9A5.0055 5.0055 0 019 19z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var DocumentAttachment32$1 = DocumentAttachment32;
const metadata = {
  "author": "Dante Nardo",
  "date": "Mar 27",
  "github": "https://github.com/TheDolentCity/Protean-Zine",
  "twitter": "https://twitter.com/nardogamedev",
  "website": "https://svelte.dev/"
};
const Routes = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e1b49292.v)(import_default_layout_279951cd.D, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<div class="${"not-prose flex flex-col pt-12 justify-center text-center"}"><div class="${"flex flex-col items-center"}">${(0, import_index_e1b49292.v)(DocumentAttachment32$1, "DocumentAttachment32").$$render($$result, {
        class: "w-24 h-24 mb-4 text-center text-primary-600"
      }, {}, {})}
    <h1 class="${"font-semibold text-[2.5rem] leading-none text-focus mb-4 mst"}">Protean Zine</h1>
    <h2 class="${"font-light text-[1.5rem] leading-none text-focus mst"}">Rich Markdown Sites for RPGs</h2></div>
  <div class="${"flex mt-8 space-x-4 justify-center"}"><a href="${"/content/getting-started"}" class="${"btn-large btn-primary"}">Getting Started
    </a>
    <a href="${"/content/learn-more"}" class="${"btn-large btn-secondary"}">Learn More
    </a></div>
  <hr class="${"my-24 border-core-900 dark:border-core-100 opacity-25"}">
  <div class="${"grid grid-cols-2 gap-12"}"><div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">Rich Markdown</h3>
      <p>Zines are Markdown + Components. You can import elements like a reading time calculator (<span class="${"chip"}">${(0, import_index_e1b49292.v)(import_default_layout_279951cd.R, "ReadingTime").$$render($$result, {}, {}, {})}</span>) in Markdown files like this one to provide dynamic information.</p>
      <a href="${"/content/components"}" class="${"focus-link mt-1"}">See components \u27F6</a></div>
    <div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">RPG Focused</h3>
      <p>The zines support any Svelte-based components, but most of the existing components focus on mimicking PDF and VTT functionality. Updating your rules is now as simple as <code class="${"chip"}">git commit</code>!</p>
      <a href="${"/content/beginners"}" class="${"focus-link mt-1"}">Check out the RPG features \u27F6</a></div>
    <div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">Beginner Friendly</h3>
      <p>The goal of this project is to allow someone with 0 programming experience to setup and deploy an RPG website with all the features they need.</p>
      <a href="${"/content/beginners"}" class="${"focus-link mt-1"}">Setup for beginners \u27F6</a></div>
    <div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">Dev Friendly</h3>
      <p>The Protean Zine framework is open-source and built on top of popular technologies like SvelteKit and TailwindCss. Deploy the site almost anywhere with SvelteKit adapters.</p>
      <a href="${"/content/extending-zines"}" class="${"focus-link mt-1"}">Take me to the docs \u27F6</a></div>
    <div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">Customizable</h3>
      <p>Zines support light mode, dark mode, and paper modes by default. You can create your own layout and apply its styling to all of your zines.</p>
      <a href="${"/content/customization"}" class="${"focus-link mt-1"}">Customize your zines \u27F6</a></div>
    <div class="${"flex flex-col text-left"}"><h3 class="${"text-lg font-semibold"}">Extensible</h3>
      <p>Zines can utilize frontmatter just like most blogging frameworks. Developers can even utilize remark and rehype plugins to extend their Markdown.</p>
      <a href="${"/content/extending-zines"}" class="${"focus-link mt-1"}">Extend your zines \u27F6</a></div></div></div>`;
    }
  })}`;
});
