import { createSSRApp, getCurrentInstance } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  console.log(555, app.config.globalProperties);
  return {
    app,
  };
}
