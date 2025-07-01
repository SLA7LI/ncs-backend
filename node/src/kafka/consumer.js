const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "node-backend",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "escrow-responder-group" });

let isConsumerRunning = false;
const responseMap = new Map(); // requestId -> resolver

// Run consumer only once
async function startConsumer() {
  if (isConsumerRunning) return;

  await consumer.connect();

  // ⬇️ Subscribe to both response topics
  await consumer.subscribe({ topic: "escrow-response", fromBeginning: false });
  await consumer.subscribe({ topic: "payworker-response", fromBeginning: false });
  await consumer.subscribe({ topic: "paypayout-response", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const response = JSON.parse(message.value.toString());
      const { requestId } = response;

      if (requestId && responseMap.has(requestId)) {
        responseMap.get(requestId)(response);
        responseMap.delete(requestId);
      }
    },
  });

  isConsumerRunning = true;
}

// Public function to wait for a response by requestId
async function waitForResponse(requestId, timeoutMs = 10000) {
  await startConsumer();

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      responseMap.delete(requestId);
      reject(new Error("Timeout waiting for Kafka escrow response"));
    }, timeoutMs);

    responseMap.set(requestId, (res) => {
      clearTimeout(timeout);
      resolve(res);
    });
  });
}

module.exports = { waitForResponse };
