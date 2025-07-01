const { Kafka } = require("kafkajs");

const kafka = new Kafka({

  clientId: "node-backend",
  brokers: ["kafka:9092"],

});

const producer = kafka.producer();

const sendToKafka = async (topic, message) => {
  try{
    await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
  }
  catch (error) {
    console.error('Error sending message to Kafka:', error);
    throw error; // Re-throw the error for further handling
  }
};

module.exports = sendToKafka;
