import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import pugPlugin from "vite-plugin-pug";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), pugPlugin()],
});
