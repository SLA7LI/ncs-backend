

const express = require("express");
const router = express.Router();


const authController = require("../../controllers/authController");


router.post("/registerasworker", authController.registerWorker);
router.post("/registerasclient", authController.registerClient);
router.post("/login", authController.login);
router.get("/getWorkers", authController.getWorkers);
router.get("/getprofile", authController.getProfile);
module.exports = router;