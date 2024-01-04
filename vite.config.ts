import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      // include: resolve(dirname(fileURLToPath(import.meta.url)), "./path/to/src/locales/**"),
    }),
  ],

  // resolve: {
  //   alias: {
  //     "@": "/src",
  //     "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
  //   },
  // },
});
