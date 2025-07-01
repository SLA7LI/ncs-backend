const serviceRequestService = require("../services/serviceRequestService");
class ServiceRequestService {
  async createServiceRequest(req, res, next) {
    try {
      const { category, description, status, budget, urgency, longitude, latitude } = req.body;
      const email = req.user.user;

      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);

      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "client") {
        return res.status(403).json({
          message: "Only clients can create service requests",
        });
      }

      const clientId = user.id;
      const serviceRequestData = { clientId, category, description, status, budget, urgency, longitude, latitude };
      const result = await serviceRequestService.createServiceRequest(serviceRequestData);
      res.status(201).json({
        message: "Service request created successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getServiceRequestsByWorker(req, res, next) {
    try {
      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      const workerId = user.id;
      const result = await serviceRequestService.getServiceRequestsByWorker(workerId);
      return res.status(200).json({
        message: "Service requests retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getServiceRequestsByClient(req, res, next) {
    try {
      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      const clientId = user.id;
      const result = await serviceRequestService.getServiceRequestsByClient(clientId);
      return res.status(200).json({
        message: "Service requests retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async getServiceRequestById(req, res, next) {
    try {
      const { id } = req.params;
    } catch (error) {
      next(error);
    }
  }

  async getAllServiceRequests(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  /*   async joinServiceRequest(req, res, next) {
    try {
      const { serviceRequestId } = req.params;

     
      const email = req.user.user;
      const authService = require('../services/authService');
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: 'User not found, jwt false',
        });
      }
      if (user.role !== 'worker') {
        return res.status(403).json({
          message: 'Only workers can join service requests',
        });
      }
      const workerId = user.id;
      const workerBiddingData={serviceRequestId, workerId, source: 'manual'}
      const result = await serviceRequestService.joinServiceRequest(workerBiddingData);
      return res.status(200).json({
        message: 'Joined service request successfully',
        data: result,
      });
      
    } catch (error) {
      next(error);
    }
  } */

  async inviteWorkerToServiceRequest(req, res, next) {
    try {
      const { serviceRequestId, workerId } = req.body;

      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "client") {
        return res.status(403).json({
          message: "Only clients can invite workers to service requests",
        });
      }
      //check if the cliebt on the service request
      const serviceRequest = await serviceRequestService.getServiceRequestById(serviceRequestId);

      const clientId = user.id;
      if (serviceRequest.clientId !== clientId) {
        return res.status(403).json({
          message: "You are not authorized to invite workers to this service request",
        });
      }

      const workerBiddingData = { serviceRequestId, workerId, source: "manual" };
      const result = await serviceRequestService.joinServiceRequest(workerBiddingData);
      return res.status(200).json({
        message: "Worker invited to service request successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async leaveServiceRequest(req, res, next) {
    try {
      const { serviceRequestId } = req.body;

      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "worker") {
        return res.status(403).json({
          message: "Only workers can leave service requests",
        });
      }
      const workerId = user.id;
      const result = await serviceRequestService.leaveServiceRequest(serviceRequestId, workerId);
      return res.status(200).json({
        message: "Left service request successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async joinServiceRequestBidding(req, res, next) {
    try {
      const { serviceRequestId } = req.body;

      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "worker") {
        return res.status(403).json({
          message: "Only workers can join service request bidding",
        });
      }
      const workerId = user.id;
      const workerBiddingData = { serviceRequestId, workerId, status: "bidding" };
      const result = await serviceRequestService.joinServiceRequestBidding(workerBiddingData);
      return res.status(200).json({
        message: "Joined service request bidding successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async acceptWorkerToServiceRequest(req, res, next) {
    try {
      const { serviceRequestId, workerId } = req.body;

      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "client") {
        return res.status(403).json({
          message: "Only clients can accept workers to service requests",
        });
      }
      //check if the cliebt on the service request

      const serviceRequest = await serviceRequestService.getServiceRequestById(serviceRequestId);

      const clientId = user.id;
      if (serviceRequest.clientId !== clientId) {
        return res.status(403).json({
          message: "You are not authorized to accept workers to this service request",
        });
      }
      if (serviceRequest.status !== "open") {
        const error = new Error("Service request is not open");
        error.statusCode = 400;
        throw error;
      }

      const result = await serviceRequestService.acceptWorkerToServiceRequest(serviceRequestId, workerId);
      return res.status(200).json({
        message: "Worker accepted to service request successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async markAsDone(req, res, next) {
    try {
      const { serviceRequestId, isWorker, workerId } = req.body;
      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      let result;

      if (isWorker) {
        //worker
        result = await serviceRequestService.markAsDone(serviceRequestId, isWorker, null, user.id);
      } else {
        result = await serviceRequestService.markAsDone(serviceRequestId, isWorker, workerId, user.id);
      }

      if (!result) {
        return res.status(200).json({
          message: "Service request marked as done successfully",
          data: result,
        });
      }

      //here we return payment and we can call the payment service to pay the worker
      res.status(200).json("Service request marked as done successfully, payment initiated");

      ///////////// add the payment
      const requestId = uuidv4();
      try {
        await sendToKafka("worker-full-payout", {
          escrow_id: result.escrow_id,
          requestId,
        });

        const paymentResponse = await waitForResponse(requestId, 10000);
        console.log("💸 Kafka payout response:", paymentResponse);

        return res.status(200).json({
          message: "Service request marked as done and payment sent.",
          payment: paymentResponse,
        });
      } catch (err) {
        console.error("❌ Kafka payment error:", err.message);
        return res.status(200).json({
          message: "Marked done, but payment failed.",
          error: err.message,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  async getAllLobbies(req, res, next) {
    try {
      const result = await serviceRequestService.getAllLobbies();
      return res.status(200).json({
        message: "Lobbies retrieved successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async placeBid(req, res, next) {
    try {
      const { serviceRequestId, money } = req.body;

      const email = req.user.user;
      const authService = require("../services/authService");
      const user = await authService.checkUserExists(email);
      if (!user) {
        return res.status(404).json({
          message: "User not found, jwt false",
        });
      }
      if (user.role !== "worker") {
        return res.status(403).json({
          message: "Only workers can place bids on service requests",
        });
      }

      const workerId = user.id;
      const result = await serviceRequestService.placeBid(serviceRequestId, workerId, money);
      return res.status(200).json({
        message: "Bid placed successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = new ServiceRequestService();
