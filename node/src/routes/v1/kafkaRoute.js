const router = require("express").Router();
const sendToKafka = require("../../kafka/producer");
const { waitForResponse } = require("../../kafka/consumer");
const { v4: uuidv4 } = require("uuid");

router.post("/create-escrow", async (req, res) => {
  const requestId = uuidv4();
  const payload = { ...req.body, requestId };

  try {
    await sendToKafka("create-escrow", payload);
    const response = await waitForResponse(requestId);
    res.json(response);
  } catch (err) {
    res.status(504).json({ error: err.message });
  }
});

router.post("/pay-worker", async (req, res) => {
  const requestId = uuidv4();
  const payload = { escrow_id: req.body.escrow_id, requestId };

  try {
    await sendToKafka("worker-pay-assurance", payload); // ⬅️ send to new topic
    const response = await waitForResponse(requestId); // ⬅️ reuses same logic
    res.json(response);
  } catch (err) {
    res.status(504).json({ error: err.message });
  }
});

module.exports = router;
