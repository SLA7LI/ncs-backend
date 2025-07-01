const prisma = require("../config/prisma-client");
class ServiceRequestService {
  async createServiceRequest(serviceRequestData) {
    try {
      const {
        clientId,
        category,
        description,
        status,
        budget,
        urgency,
        longitude,
        latitude,
      } = serviceRequestData;

      if (
        !clientId ||
        !category ||
        !description ||
        !status ||
        !budget ||
        !urgency ||
        !longitude ||
        !latitude
      ) {
        const error = new Error("All fields are required");
        error.statusCode = 400;
        throw error;
      }

      const result = await prisma.serviceRequest.create({
        data: {
          clientId,

          category,
          description,
          status,
          budget,
          urgency,
          latitude,
          longitude,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getServiceRequestsByClient(clientId) {
    try {
      /* const requests = await prisma.serviceRequest.findMany({
                where: { clientId },
            }); */
      const requests = await prisma.serviceRequest.findMany({
        where: { clientId },
        include: {
          participants: {
            include: {
              worker: {
                include: {
                  user: true, // include user details of the worker
                },
              },
            },
          },
        },
      });
      if (!requests || requests.length === 0) {
        const error = new Error("No service requests found for this client");
        error.statusCode = 404;
        throw error;
      }

      return requests;
    } catch (error) {
      throw error;
    }
  }

  async getServiceRequestsByWorker(workerId) {
    try {
      const requests = await prisma.lobbyParticipant.findMany({
        where: { workerId },
        include: {
          serviceRequest: true, // this includes the ServiceRequest info
        },
      });

      if (!requests || requests.length === 0) {
        const error = new Error("No service requests found for this worker");
        error.statusCode = 404;
        throw error;
      }

      return requests;
    } catch (error) {
      throw error;
    }
  }

  async getServiceRequests() {
    try {
      const requests = await prisma.serviceRequest.findMany({
        include: {
          client: true, // Include client details
          worker: true, // Include worker details
        },
      });
      if (!requests || requests.length === 0) {
        const error = new Error("No service requests found");
        error.statusCode = 404;
        throw error;
      }
      return requests;
    } catch (error) {
      throw error;
    }
  }

  // worker join a lobby
  async joinServiceRequest(workerBiddingData) {
    try {
      const { serviceRequestId, workerId, source } = workerBiddingData;

      //check if srvice request still open

      const checkServiceRequest = await this.getServiceRequestById(
        serviceRequestId
      );
      if (!checkServiceRequest) {
        const error = new Error("Service request not found");
        error.statusCode = 404;
        throw error;
      }

      if (checkServiceRequest.status !== "open") {
        const error = new Error("Service request is not open");
        error.statusCode = 400;
        throw error;
      }
      //check if he is already in the lobby

      let INTserviceRequestId = parseInt(serviceRequestId, 10);
      let INTworkerId = parseInt(workerId, 10);
      const existingLobby = await prisma.lobbyParticipant.findFirst({
        where: {
          serviceRequestId: INTserviceRequestId,
          workerId: INTworkerId,
        },
      });
      if (existingLobby) {
        const error = new Error("Worker already joined this service request");
        error.statusCode = 400;
        throw error;
      }

      const lobby = await prisma.lobbyParticipant.create({
        data: {
          serviceRequestId: INTserviceRequestId,
          workerId,
          source: source,
          bid: 0,
        },
      });
      return lobby;
    } catch (error) {
      throw error;
    }
  }

  //worker is auto assigned
  async autoAssignServiceRequest(workerBiddingData) {
    try {
      //source = autoAssigned
      const { serviceRequestId, workerId, source } = workerBiddingData;
      const lobby = await prisma.Lobby.create({
        data: {
          serviceRequestId,
          workerId,
          source: source,
        },
      });
      return lobby;
    } catch (error) {
      throw error;
    }
  }

  //place a bid when autoassigned
  async placeBid(serviceRequestId, workerId, bid) {
    try {
      const lobby = await prisma.lobbyParticipant.update({
        where: {
          serviceRequestId_workerId: {
            serviceRequestId,
            workerId,
          },
        },
        data: {
          bid,
        },
      });
      return lobby;
    } catch (error) {
      throw error;
    }
  }

  async getServiceRequestById(id) {
    try {
      const serviceRequest = await prisma.serviceRequest.findUnique({
        where: { id: parseInt(id, 10) },
        include: {
          client: true,
          participants: {
            include: {
              worker: true, // ✅ includes related worker from LobbyParticipant
            },
          },
          images: true,
        },
      });

      if (!serviceRequest) {
        const error = new Error("Service request not found");
        error.statusCode = 404;
        throw error;
      }
      return serviceRequest;
    } catch (error) {
      throw error;
    }
  }

  async leaveServiceRequest(serviceRequestId, workerId) {
    try {
      const lobby = await prisma.lobbyParticipant.delete({
        where: {
          serviceRequestId_workerId: {
            serviceRequestId: parseInt(serviceRequestId, 10),
            workerId: parseInt(workerId, 10),
          },
        },
      });
      return lobby;
    } catch (error) {
      throw error;
    }
  }

  async joinServiceRequestBidding(workerBiddingData) {
    try {
      const { serviceRequestId, workerId, status } = workerBiddingData;

      //check if srvice request still open
      const checkServiceRequest = await this.getServiceRequestById(
        serviceRequestId
      );
      if (!checkServiceRequest) {
        const error = new Error("Service request not found");
        error.statusCode = 404;
        throw error;
      }

      if (checkServiceRequest.status !== "open") {
        const error = new Error("Service request is not open");
        error.statusCode = 400;
        throw error;
      }

      //check if he is already in the lobby
      let INTserviceRequestId = parseInt(serviceRequestId, 10);
      let INTworkerId = parseInt(workerId, 10);
      const existingLobby = await prisma.lobbyParticipant.findFirst({
        where: {
          serviceRequestId: INTserviceRequestId,
          workerId: INTworkerId,
        },
      });
      if (!existingLobby) {
        const error = new Error(
          "Lobby not found for this service request and worker"
        );
        error.statusCode = 400;
        throw error;
      }

      const updatedLobby = await prisma.lobbyParticipant.update({
        where: {
          serviceRequestId_workerId: {
            serviceRequestId: INTserviceRequestId,
            workerId: INTworkerId,
          },
        },
        data: {
          status: status,
          bid: 0, // or keep existingLobby.bid if you want to preserve it
        },
      });
      return updatedLobby;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async acceptWorkerToServiceRequest(serviceRequestId, workerId) {
    try {
      
      //check if the cliebt on the
      //check if srvice request still open
      
        console.log("serviceRequestId", serviceRequestId, "workerId", workerId);
      

      //check if he is already in the lobby
      
     
      const existingLobby = await prisma.lobbyParticipant.findFirst({
        where: {
          serviceRequestId: serviceRequestId,
          workerId: workerId,
        },
      });
      if (!existingLobby) {
        const error = new Error(
          "Lobby not found for this service request and worker"
        );
        error.statusCode = 400;
        throw error;
      }
console.log("serviceRequestId", serviceRequestId);
      const updatedLobby = await prisma.lobbyParticipant.update({
        where: {
          serviceRequestId_workerId: {
            serviceRequestId: serviceRequestId,
            workerId: workerId,
          },
        },
        data: {
          status: "accepted",
        },
      });

      //update the requestservice
      
      const updatedServiceRequest = await prisma.serviceRequest.update({
        where: { id: serviceRequestId },
        data: {
          status: "in_progress", // or whatever status you want to set
        },
      });
      return updatedLobby;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async markAsDone(serviceRequestId, isWorker, workerId, userId) {
    try {
      let updateWorker, updateClient;

      const serviceRequest = await this.getServiceRequestById(serviceRequestId);
      if (!serviceRequest) {
        const error = new Error("Service request not found");
        error.statusCode = 404;
        throw error;
      }

      if (isWorker) {
        // Check if the worker is part of the service request
        const participant = serviceRequest.participants.find(
          (p) => p.workerId === userId
        );
        if (!participant) {
          const error = new Error("Worker is not part of this service request");
          error.statusCode = 403;
          throw error;
        } else {
          updateWorker = await prisma.lobbyParticipant.update({
            where: {
              serviceRequestId_workerId: {
                serviceRequestId: parseInt(serviceRequestId, 10),
                workerId: parseInt(userId, 10),
              },
            },
            data: {
              workerCompleted: true,
            },
          });
        }
      } else {
        // Check if the client is the owner of the service request
        if (serviceRequest.clientId !== userId) {
          console.log(serviceRequest.clientId, userId);
          const error = new Error(
            "Client is not authorized to mark this service request as done"
          );
          error.statusCode = 403;
          throw error;
        } else {
          updateClient = await prisma.lobbyParticipant.update({
            where: {
              serviceRequestId_workerId: {
                serviceRequestId: parseInt(serviceRequestId, 10),
                workerId: parseInt(workerId, 10),
              },
            },
            data: {
              clientCompleted: true,
            },
          });
        }
      }

      // check if both has had mark done

      let getdata;

      if (isWorker) {
        console.log("isWorker", userId);
        getdata = await prisma.lobbyParticipant.findFirst({
          where: {
            serviceRequestId: parseInt(serviceRequestId, 10),
            workerId: parseInt(userId, 10),
          },
        });
      } else {
        console.log("isClient", workerId);
        getdata = await prisma.lobbyParticipant.findFirst({
          where: {
            serviceRequestId: parseInt(serviceRequestId, 10),
            workerId: parseInt(workerId, 10),
          },
        });
      }
      let dataStatus = getdata.clientCompleted && getdata.workerCompleted;
      if (dataStatus) {
        // meaning both have marked as done
        const updatedServiceRequest = await prisma.serviceRequest.update({
          where: { id: parseInt(serviceRequestId, 10) },
          data: {
            status: "closed",
          },
        });
        // Here you can add logic to handle payment or any other finalization steps
        return true;
      } else if (updateWorker) {
        return false;
      } else if (updateClient) {
        return false;
      } else {
        const error = new Error(
          "Something went wrong while marking the service request as done"
        );
        error.statusCode = 500;
        throw error;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllLobbies(){
    try{
        const result=await prisma.serviceRequest.findMany({
        
        })

        if(!result || result.length === 0){
            const error = new Error("No lobbies found");
            error.statusCode = 404;
            throw error;
        }
        return result;
    }
    catch(error){
        console.error(error);
      throw error;
    }
  }
}

module.exports = new ServiceRequestService;
