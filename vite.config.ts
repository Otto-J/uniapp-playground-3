import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    proxy: {
      // "/foo": "http://localhost:4567",
      "/api": {
        target: "http://127.0.0.1:8080/",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
          console.log("有打印");
          proxy.on("proxyRes", (proxyRes, req, res) => {
            // 在终端控制台有打印
            console.log(req.url);
          });
        },
      },
    },
  },
});
