import { createServer } from "node:http";
import { createApp, toNodeListener, eventHandler, createRouter, readBody, setHeaders } from "h3";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const PORT = 3000;
const app = createApp();
const router = createRouter();

router.get(
  "/upload",
  eventHandler(async (event) => {
    return "get ok";
  })
);

router.post(
  "/upload",
  eventHandler(async (event) => {
    const body = await readBody(event);

    setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    });

    console.log("body", body);
    await delay(4000);
    return {
      status: "上传成功",
    };
  })
);

app.use(router);

createServer(toNodeListener(app)).listen(PORT, () => {
  console.log("服务器已启动，监听端口 " + PORT);
});
