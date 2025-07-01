const jwt = require('jsonwebtoken');
const  config  = require('../config/config');

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("her")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      const error = new Error('No token provided');
      error.statusCode = 401;
      error.status = 'fail';
      return next(error);
    }
    
    const token = authHeader.split(" ")[1];
   
    jwt.verify(token, config.accessTokenJWT, (err, decoded) => {
      if (err) {
        console.log("Token verification error:", err);
        const error = new Error('Failed to authenticate token');
        error.statusCode = 403;
        error.status = 'fail';
        return next(error);
      }
      
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error("Error:", error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

module.exports = verifyToken;
