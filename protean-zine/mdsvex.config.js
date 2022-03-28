import { defineMDSveXConfig as defineConfig } from "mdsvex";
// import github from "remark-github";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    // paper: "./src/lib/protean-layouts/paper/paper-layout.svelte",
    _: "./src/lib/protean-layouts/default/default-layout.svelte",
  },
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
