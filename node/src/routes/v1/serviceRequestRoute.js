const express = require("express");
const router = express.Router();


const serviceRequestController = require("../../controllers/serviceRequestController");

const verifyToken = require("../../middleware/verifyToken");

router.get("/getlobbies",serviceRequestController.getAllLobbies)
router.post(
  "/create",
  verifyToken,
  serviceRequestController.createServiceRequest
);
router.get(
  "/worker",
  verifyToken,
  serviceRequestController.getServiceRequestsByWorker
);
router.get(
  "/client",
  verifyToken,
  serviceRequestController.getServiceRequestsByClient
);
router.get(
  "/:id",
  verifyToken,
  serviceRequestController.getServiceRequestById
);
router.get(
  "/",
  verifyToken,
  serviceRequestController.getAllServiceRequests
);
/* router.post(
  "/join/:serviceRequestId",
  verifyToken,
  serviceRequestController.joinServiceRequest
); */
router.post(
  "/invite",
  verifyToken,
  serviceRequestController.inviteWorkerToServiceRequest
)

// worker will be in waiting status meaning he can now bid
router.post("/joinbidding",
  verifyToken,
  serviceRequestController.joinServiceRequestBidding)

router.post(
  "/leave/:id",
  verifyToken,
  serviceRequestController.leaveServiceRequest
);

//after this one they start working ech one need to pay to continue working
router.post("/acceptworker",
  verifyToken,
  serviceRequestController.acceptWorkerToServiceRequest
)
//after they pay we wait for both of them to mark the job as done if both say yes then  we call thee paymet for handout
// firt route payment of both ,
//second route is mark as done for both
// third route is to pay the worker


router.post("/markasdone",
  verifyToken,
  serviceRequestController.markAsDone)




module.exports= router;