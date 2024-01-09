import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
    uni(),
  ],
});
