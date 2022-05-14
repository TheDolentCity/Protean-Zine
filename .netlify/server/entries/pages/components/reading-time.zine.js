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
  default: () => Reading_time,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1b49292 = require("../../../chunks/index-e1b49292.js");
var import_default_layout_279951cd = require("../../../chunks/default-layout-279951cd.js");
var import_estimated_read_time = require("estimated-read-time");
var prismCodeTheme = "";
const metadata = {
  "title": "Reading Time",
  "author": "Dante Nardo",
  "date": "Apr 2nd",
  "github": "https://github.com/TheDolentCity/Protean-Zine",
  "twitter": "https://twitter.com/nardogamedev",
  "website": "https://svelte.dev/"
};
const Reading_time = (0, import_index_e1b49292.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e1b49292.v)(import_default_layout_279951cd.D, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>This component renders the number of minutes to read the current page. This number is dynamically computed on every page load.</p>
<h2>Example</h2>
${(0, import_index_e1b49292.v)(import_default_layout_279951cd.R, "ReadingTime").$$render($$result, {}, {}, {})}
<h2>When to Use</h2>
<p>This component is used in the default header for every page. This is a quick way to give users a heads up about how long an individual page might take to consume. This is useful for blog posts, articles, or anything that has the potential to be longform content.</p>
<h2>How to Use</h2>
<p>Add the following to a zine\u2019s script section:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> ReadingTime <span class="token keyword">from</span> <span class="token string">'$lib/widgets/reading-time.svelte'</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Place the component anywhere in the document:</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReadingTime</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token title important"><span class="token punctuation">#</span> Estimated Reading Time: &lt;ReadingTime /></span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
