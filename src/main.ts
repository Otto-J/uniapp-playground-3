import { createSSRApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

// import en from "./en.json";
// import zhHans from "./zh-Hans.json";
// import zhHant from "./zh-Hant.json";
const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
  "zh-Hans": {
    message: {
      hello: "你好，世界",
    },
  },
};

let i18nConfig = {
  legacy: false, // you must set `false`, to use Composition API
  locale: uni.getLocale(), // 获取已设置的语言
  fallbackLocale: "en", // set fallback locale
  messages,
};
const i18n = createI18n(i18nConfig);

export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  return {
    app,
  };
}
