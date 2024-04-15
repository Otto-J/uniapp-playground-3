import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
debugger;
const plugin = uni();
console.log(plugin);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin],
});
