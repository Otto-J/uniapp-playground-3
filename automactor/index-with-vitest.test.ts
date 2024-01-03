import automator from "miniprogram-automator";
import path from "node:path";
import { describe, beforeAll, expect, afterAll, test, it } from "vitest";

const projectPath = path.resolve(__dirname, "../dist/dev/mp-weixin");

describe("index", () => {
  let miniProgram;
  let page;

  beforeAll(async () => {
    miniProgram = await automator.launch({
      projectPath: projectPath,
    });
    page = await miniProgram.reLaunch("/pages/index/index");
    await page.waitFor(500);
  }, 30000);

  afterAll(async () => {
    await miniProgram.close();
  });

  // it("启动首页", async () => {
  //   expect(true).toBe(true);
  // });
  it("启动首页2", async () => {
    const element = await page.$(".title");
    const text = await element.text();
    expect(typeof text).toBe("string");
    expect(text.length).toBeGreaterThan(0);
  });
});
// 工具项目窗口启动初次编译需要一定时长，Jest 默认 5 秒超时太短，需修改。
