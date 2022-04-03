import { defineMDSveXConfig as defineConfig } from "mdsvex";
import github from "remark-github";

const config = defineConfig({
  extensions: ['.md', '.zine'],
  layout: {
    paper: './src/lib/zine-layouts/paper/paper-layout.svelte',
    _: './src/lib/zine-layouts/default/default-layout.svelte',
  },
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [github],
  rehypePlugins: [],
});

export default config;
