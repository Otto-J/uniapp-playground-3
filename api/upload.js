const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mock delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// app.get / return ok
app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/upload", async (req, res) => {
  // 获取上传的数据
  const { file } = req.body;

  // 模拟处理上传的逻辑
  // 这里可以根据实际需求进行相应的处理，例如保存文件、验证文件类型等
  await delay(4000);

  // 返回模拟的响应
  // res.header
  // 设置响应头允许跨域请求
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.status(200).json({ message: "文件上传成功" });
});

// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动，监听端口 3000");
});
