import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// import piniaPersist from "./presist-ui";
import piniaPersist from "pinia-plugin-persist-uni";

const pinia = createPinia();
pinia.use(piniaPersist);

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);

  return {
    app,
  };
}
