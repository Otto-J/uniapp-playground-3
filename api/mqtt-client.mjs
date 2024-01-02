// 引入 mqtt 模块
import mqtt from "mqtt";

// MQTT 服务器的连接选项
const options = {
  clientId: "mqtt-example",
  clean: true,
};

// 连接到 MQTT 服务器
const client = mqtt.connect("mqtt://localhost:1883", options);

// 连接成功时的回调函数
client.on("connect", () => {
  console.log("Connected to MQTT server");

  // 订阅一个主题
  client.subscribe("test/topic", (err) => {
    if (err) {
      console.error("Failed to subscribe to topic", err);
    } else {
      console.log("Subscribed to topic");
    }
  });

  // 发布一条消息到主题
  client.publish("test/topic", "Hello, MQTT!");
});

// 接收到消息时的回调函数
client.on("message", (topic, message) => {
  console.log("Received message:", message.toString());

  // 取消订阅主题
  client.unsubscribe("test/topic", (err) => {
    if (err) {
      console.error("Failed to unsubscribe from topic", err);
    } else {
      console.log("Unsubscribed from topic");
    }

    // 断开与 MQTT 服务器的连接
    client.end();
  });
});

// 连接断开时的回调函数
client.on("close", () => {
  console.log("Disconnected from MQTT server");
});
