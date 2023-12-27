import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import nested from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import tailwindcssConfig from "./tailwind.config"; // 注意匹配实际文件
import postcssPresetEnv from "postcss-preset-env";
// import uni from '@dcloudio/vite-plugin-uni';
import uniTailwind from "@uni-helper/vite-plugin-uni-tailwind";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),

    uniTailwind({
      /* options */
    }),
  ],
  css: {
    postcss: {
      plugins: [
        nested(),
        tailwindcss({
          config: tailwindcssConfig,
        }),
        postcssPresetEnv({
          stage: 3,
          features: { "nesting-rules": false },
        }),
      ],
    },
  },
});
