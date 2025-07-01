const prisma = require("../config/prisma-client");
const passwordutils = require("../utils/passwordUtils");
class AuthService {
  async checkUserExists(email) {
    try {
      
      const user = await prisma.users.findUnique({
        where: { email },
      });
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error in checkUserExists:", error);
      throw error;
    }
  }
  async registerClient(clientData) {
    try {
      const { name, email, password, phone, wilaya, baladia } = clientData;
      const hashPassword = await passwordutils.hashPassword(password);
      if (await this.checkUserExists(email) !=null) {
        const error = new Error("User already exists");
        error.statusCode = 409; // Conflict
        throw error;
      }
      const result = await prisma.users.create({
        data: {
          name,
          email,
          password: hashPassword,
          phone,
          wilaya,
          baladia,
          role: "client",
        },
      });
      if (!result) {
        const error = new Error("Failed to register client");
        error.statusCode = 500;
        throw error;
      }
      return result;
    } catch (error) {
      console.error("Error in registerClient:", error);
      throw error;
    }
  }

  async registerWorker(workerData) {
    try {
      const { name, email, password, phone, wilaya, baladia, genre, bio } =
        workerData;
      if (await this.checkUserExists(email) !== null) {
        const error = new Error("User already exists");
        error.statusCode = 409; // Conflict
        throw error;
      }
      const hashPassword = await passwordutils.hashPassword(password);
      const result = await prisma.users.create({
        data: {
          name,
          email,
          password: hashPassword,
          phone,
          wilaya: wilaya,
          baladia: baladia,
          role: "worker",
          worker: {
            create: {
              availability: [],
              rating: 0,
              completedJobs: 0,
              genre,
              bio,
              verified: false,
              // you can also add picture, nationalIDPicture, etc. if needed
            },
          },
        },
        include: {
          worker: true, // optional: include worker in response
        },
      });

      if (!result) {
        const error = new Error("Failed to register worker");
        error.statusCode = 500;
        throw error;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  async login(email, password) {
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await passwordutils.comparedPasswords(password, user.password);
    if (!isPasswordValid) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    let additionalData = {
      user,
    };

    if (user.role === "worker") {
      const worker = await prisma.worker.findUnique({
        where: { userId: user.id },
      });

      additionalData.worker = worker;
    }

    return additionalData;
  } catch (error) {
    throw error;
  }
}

async getWorkers(rating, category, wilaya, baladia, genre) {
  try {
    const filters = {};

    if (rating && !isNaN(parseFloat(rating))) {
      filters.rating = { gte: parseFloat(rating) };
    }

    if (category) filters.category = category;
    if (wilaya) filters.wilaya = wilaya;
    if (baladia) filters.baladia = baladia;
    if (genre) filters.genre = genre;

    const workers = await prisma.users.findMany({
      where: {
        role: "worker",
        worker: {
          ...filters,
        },
      },
      include: {
        worker: true,
      },
    });

    return workers.length > 0 ? workers : [];
  } catch (error) {
    console.error("Error in getWorkers:", error);
    throw error;
  }
}

async getProfile(userId) {
  try {
    const user = await prisma.users.findUnique({
      where: { id: userId,role: "worker"},
      include: {
        worker: true, // Include worker details if the user is a worker
      },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    return user;
  } catch (error) {
    console.error("Error in getProfile:", error);
    throw error;
  }
}

}

module.exports = new AuthService;
