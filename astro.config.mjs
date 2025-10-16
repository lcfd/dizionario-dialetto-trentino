// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  base: "/dizionario-dialetto-trentino",
  vite: {
    plugins: [tailwindcss()],
  },
});
