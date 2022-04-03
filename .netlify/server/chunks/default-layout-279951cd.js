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
  D: () => Default_layout,
  R: () => Reading_time
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1b49292 = require("./index-e1b49292.js");
var import_estimated_read_time = require("estimated-read-time");
var __defProp2 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const subscriber_queue = [];
function writable(value, start = import_index_e1b49292.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_e1b49292.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_e1b49292.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_e1b49292.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const browser = false;
const _Theme = class {
  constructor(name) {
    this.name = name;
  }
};
let Theme = _Theme;
__publicField(Theme, "Dark", new _Theme("Dark"));
__publicField(Theme, "Light", new _Theme("Light"));
const darkMode = writable(browser);
darkMode.subscribe((val) => {
});
const Reading_time = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const LogoGithub24 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "LogoGithub24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "24" },
    { height: "24" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path fill-rule="${"evenodd"}" d="${"M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var LogoGithub24$1 = LogoGithub24;
const LogoTwitter24 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "LogoTwitter24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "24" },
    { height: "24" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var LogoTwitter24$1 = LogoTwitter24;
const Link24 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Link24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "24" },
    { height: "24" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"}"></path><path d="${"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var Link24$1 = Link24;
const Header = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  let { author } = $$props;
  let { date } = $$props;
  let { github } = $$props;
  let { twitter } = $$props;
  let { website } = $$props;
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  return `<div class="${"flex w-full space-x-12 mb-12 justify-between items-center font-mono"}"><div class="${"flex flex-col space-y-2"}">
    <div class="${"leading-none font-semibold text-default"}">${(0, import_index_e1b49292.e)(author)}</div>
    
    <div class="${"leading-none"}">${(0, import_index_e1b49292.e)(date)} \xB7 ${(0, import_index_e1b49292.v)(Reading_time, "ReadingTime").$$render($$result, {}, {}, {})}</div></div>
  
  <div class="${"flex space-x-1"}">${github ? `<a${(0, import_index_e1b49292.g)("href", github, 0)} class="${"p-1 cursor-pointer"}">${(0, import_index_e1b49292.v)(LogoGithub24$1, "LogoGithub24").$$render($$result, {}, {}, {})}</a>` : ``}
    ${twitter ? `<a${(0, import_index_e1b49292.g)("href", twitter, 0)} class="${"p-1 cursor-pointer"}">${(0, import_index_e1b49292.v)(LogoTwitter24$1, "LogoTwitter24").$$render($$result, {}, {}, {})}</a>` : ``}
    ${website ? `<a${(0, import_index_e1b49292.g)("href", website, 0)} class="${"p-1 cursor-pointer"}">${(0, import_index_e1b49292.v)(Link24$1, "Link24").$$render($$result, {}, {}, {})}</a>` : ``}</div></div>`;
});
const Moon24 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Moon24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "24" },
    { height: "24" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var Moon24$1 = Moon24;
const Sun24 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Sun24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "24" },
    { height: "24" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"}" transform="${"translate(0 .005)"}"></path><path d="${"M6.854 5.375H8.854V10.333H6.854z"}" transform="${"rotate(-45 7.86 7.856)"}"></path><path d="${"M2 15.005H7V17.005000000000003H2z"}"></path><path d="${"M5.375 23.147H10.333V25.147H5.375z"}" transform="${"rotate(-45 7.86 24.149)"}"></path><path d="${"M15 25.005H17V30.005H15z"}"></path><path d="${"M23.147 21.668H25.147V26.625999999999998H23.147z"}" transform="${"rotate(-45 24.152 24.149)"}"></path><path d="${"M25 15.005H30V17.005000000000003H25z"}"></path><path d="${"M21.668 6.854H26.625999999999998V8.854H21.668z"}" transform="${"rotate(-45 24.152 7.856)"}"></path><path d="${"M15 2.005H17V7.005H15z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var Sun24$1 = Sun24;
const Dark_mode_button = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_e1b49292.h)(darkMode, (value) => $darkMode = value);
  $$unsubscribe_darkMode();
  return `${$darkMode && $darkMode === Theme.Dark.name ? `<button class="${"mst"}">${(0, import_index_e1b49292.v)(Moon24$1, "Moon24").$$render($$result, {}, {}, {})}</button>` : `${$darkMode && $darkMode === Theme.Light.name ? `<button class="${"mst"}">${(0, import_index_e1b49292.v)(Sun24$1, "Sun24").$$render($$result, {}, {}, {})}</button>` : `<button class="${"mst"}">${(0, import_index_e1b49292.v)(Moon24$1, "Moon24").$$render($$result, {}, {}, {})}</button>`}`}`;
});
const getStores = () => {
  const stores = (0, import_index_e1b49292.i)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const openRoutes = writable({});
class CssBuilder {
  constructor() {
    this.css = "";
  }
  addClass(c, conditional = true) {
    if (conditional) {
      this.css += c + " ";
    }
    return this;
  }
  build() {
    return this.css;
  }
}
const ChevronDown20 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "ChevronDown20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var ChevronDown20$1 = ChevronDown20;
const ChevronUp20 = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "ChevronUp20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: (0, import_index_e1b49292.b)(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: (0, import_index_e1b49292.b)(style) },
    { id: (0, import_index_e1b49292.b)(id) },
    (0, import_index_e1b49292.d)(attributes)
  ], {})}><path d="${"M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${(0, import_index_e1b49292.e)(title)}</title>` : ``}
  `}</svg>`;
});
var ChevronUp20$1 = ChevronUp20;
const Navigation_link = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  let css;
  let $$slots = (0, import_index_e1b49292.j)(slots);
  let $page, $$unsubscribe_page;
  let $openRoutes, $$unsubscribe_openRoutes;
  $$unsubscribe_page = (0, import_index_e1b49292.h)(page, (value) => $page = value);
  $$unsubscribe_openRoutes = (0, import_index_e1b49292.h)(openRoutes, (value) => $openRoutes = value);
  let { link } = $$props;
  let { title } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  css = () => {
    var _a;
    return new CssBuilder().addClass("flex-auto p-2 rounded leading-none whitespace-nowrap hover:raise-5").addClass("underline decoration-2 decoration-primary-600 underline-offset-1", link === ((_a = $page == null ? void 0 : $page.url) == null ? void 0 : _a.pathname)).build();
  };
  $$unsubscribe_page();
  $$unsubscribe_openRoutes();
  return `${$$slots.subroutes ? `<div class="${"flex w-full"}"><button class="${"pl-1"}">${$openRoutes[link] ? `${(0, import_index_e1b49292.v)(ChevronUp20$1, "ChevronUp20").$$render($$result, {}, {}, {})}` : `${(0, import_index_e1b49292.v)(ChevronDown20$1, "ChevronDown20").$$render($$result, {}, {}, {})}`}</button>
		<a${(0, import_index_e1b49292.g)("href", link, 0)}${(0, import_index_e1b49292.g)("class", css(), 0)}>${(0, import_index_e1b49292.e)(title)}</a></div>
	<div class="${"flex flex-col pl-6"}">${$openRoutes[link] ? `${slots.subroutes ? slots.subroutes({}) : ``}` : ``}</div>` : `<a${(0, import_index_e1b49292.g)("href", link, 0)}${(0, import_index_e1b49292.g)("class", css(), 0)}>${(0, import_index_e1b49292.e)(title)}</a>`}`;
});
const Navigation = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e1b49292.v)(Navigation_link, "NavigationLink").$$render($$result, { title: "Home", link: "/" }, {}, {})}
${(0, import_index_e1b49292.v)(Navigation_link, "NavigationLink").$$render($$result, { title: "Components", link: "/components" }, {}, {
    subroutes: () => {
      return `${(0, import_index_e1b49292.v)(Navigation_link, "NavigationLink").$$render($$result, {
        slot: "subroutes",
        title: "Reading Time",
        link: "/components/reading-time"
      }, {}, {})}`;
    }
  })}`;
});
const Default_layout = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_e1b49292.h)(darkMode, (value) => $darkMode = value);
  let { title } = $$props;
  let { author } = $$props;
  let { date } = $$props;
  let { github } = $$props;
  let { twitter } = $$props;
  let { website } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  $$unsubscribe_darkMode();
  return `<div${(0, import_index_e1b49292.g)("class", $darkMode === Theme.Dark.name ? "dark" : $darkMode === Theme.Light.name ? "" : "dark", 0)}><div class="${"flex w-screen h-screen max-w-screen max-h-screen space-x-16 justify-center text-default bg-core-100 dark:bg-core-900 mst"}"><div class="${"pt-8 pl-4"}"><div class="${"mb-2 pl-2"}">${(0, import_index_e1b49292.v)(Dark_mode_button, "DarkModeButton").$$render($$result, {}, {}, {})}</div>
			<div class="${"flex flex-col min-w-[10rem] space-y-1"}">${(0, import_index_e1b49292.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}</div></div>
	
		<div class="${"aspect-[1/1.4142] pt-8 pr-4 pb-12 overflow-y-auto scrollbar scrollbar-thumb-core-400 hover:scrollbar-thumb-core-500 scrollbar-track-core-200 dark:scrollbar-thumb-core-600 dark:hover:scrollbar-thumb-core-500 dark:scrollbar-track-core-800 mst"}"><article id="${"zine"}" class="${"prose prose-neutral dark:prose-invert font-sans mst prose-h1:font-semibold prose-h1:text-[4.25rem] prose-h1:leading-[5.75rem] prose-h1:text-focus prose-h2:font-semibold prose-h2:text-[2.5rem] prose-h2:leading-[3.25rem] prose-h2:text-focus prose-h3:font-semibold prose-h3:text-[1.75rem] prose-h3:leading-[2.25rem] prose-h3:text-focus prose-h4:font-semibold prose-h4:text-[1.25rem] prose-h4:leading-[1.75rem] prose-h4:text-focus prose-h5:text-[1.125rem] prose-h5:leading-[1.5rem] prose-h5:text-focus prose-h6:font-semibold prose-h6:text-[1rem] prose-h6:leading-[1.5rem] prose-h6:text-focus prose-a:decoration-primary-600 prose-a:underline-offset-1 hover:prose-a:decoration-2 prose-code:not-prose prose-pre:not-prose"}">${(0, import_index_e1b49292.v)(Header, "Header").$$render($$result, { author, date, github, twitter, website }, {}, {})}
				
				${title ? `<h1>${(0, import_index_e1b49292.e)(title)}</h1>` : ``}
				
				${slots.default ? slots.default({}) : `
					
				`}</article></div></div></div>`;
});
