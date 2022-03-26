import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: {
    light: "./src/protean-layouts/light.svelte",
    dark: "./src/protean-layouts/dark.svelte",
    paper: "./src/protean-layouts/paper.svelte",
    _: "./src/protean-layouts/light.svelte",
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
