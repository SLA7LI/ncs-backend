
const router = require('express').Router();

const sendTokafka = require('../../kafka/producer');



router.post("/create-escrow",async(req,res,next)=>{
try {
    const payload = req.body;

    await sendTokafka('create-escrow', payload);

    res.status(200).json({
      message: 'Escrow creation request sent to Kafka',
      payload,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports= router;