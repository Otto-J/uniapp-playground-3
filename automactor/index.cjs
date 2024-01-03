const automator = require("miniprogram-automator");
const path = require("node:path");

const projectPath = path.resolve(__dirname, "../dist/dev/mp-weixin");

automator
  .launch({
    // cliPath: "path/to/cli", // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: projectPath, // 项目文件地址
  })
  .then(async (miniProgram) => {
    const page = await miniProgram.reLaunch("/pages/index/index");
    await page.waitFor(500);
    const element = await page.$(".demo");
    console.log(await element.attribute("class"));
    await element.tap();

    await miniProgram.close();
  });
