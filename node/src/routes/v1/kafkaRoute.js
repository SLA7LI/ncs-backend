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

router.post("/payout", async (req, res) => {
  const { escrow_id } = req.body;

  if (!escrow_id) {
    return res.status(400).json({ error: "escrow_id is required" });
  }

  const requestId = uuidv4();

  try {
    await sendToKafka("worker-full-payout", {
      escrow_id,
      requestId,
    });

    const response = await waitForResponse(requestId, 10000); // 10s timeout
    res.json({
      message: "Worker payout triggered successfully",
      response,
    });
  } catch (err) {
    res.status(504).json({
      error: "Timeout or failure in Kafka payout response",
      details: err.message,
    });
  }
});

module.exports = router;
