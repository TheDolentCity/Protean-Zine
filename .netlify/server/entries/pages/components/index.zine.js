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
  default: () => Components,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1b49292 = require("../../../chunks/index-e1b49292.js");
var import_default_layout_279951cd = require("../../../chunks/default-layout-279951cd.js");
var import_estimated_read_time = require("estimated-read-time");
const metadata = {
  "title": "Components",
  "author": "Dante Nardo",
  "date": "Apr 2nd",
  "github": "https://github.com/TheDolentCity/Protean-Zine",
  "twitter": "https://twitter.com/nardogamedev",
  "website": "https://svelte.dev/"
};
const Components = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e1b49292.v)(import_default_layout_279951cd.D, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>TODO</p>`;
    }
  })}`;
});
