const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'node-backend',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const sendToKafka = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
};

module.exports = sendToKafka;