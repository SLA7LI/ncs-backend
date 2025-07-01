
const authjwt= require('../middleware/authJWT');
const authService = require('../services/authService');

class AuthController{


    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                const error = new Error('Email and password are required');
                error.statusCode = 400;
                throw error;
            }
            const user = await authService.login(email, password);
            const token=email
            const accessToken = authjwt.createAccessToken(token);
            const refreshToken = authjwt.createRefreshToken(token);

            res.status(200).json({ message: 'Login successful', user, accessToken, refreshToken });
           
        } catch (error) {
            next(error);
        }
    }
    async registerClient(req, res, next) {
        try {
            const { name, email, password, phone, wilaya, baladia } = req.body;
            
            const clientData = { name, email, password, phone, wilaya, baladia };
            
            if (!name || !email || !password || !phone || !wilaya || !baladia) {
                const error = new Error('All fields are required');
                error.statusCode = 400;
                throw error;
            }
            const result = await authService.registerClient(clientData);
            const token= email
            
            const accessToken = authjwt.createAccessToken(token);
            const refreshToken = authjwt.createRefreshToken(token);

            res.status(201).json({ message: 'Client registered successfully', client: result, accessToken, refreshToken });
        } catch (error) {
            next(error);
        }
    }
    async registerWorker(req, res, next) {
        try {
            const { name, email, password, phone, wilaya, baladia, genre, bio } = req.body;
            const workerData = { name, email, password, phone, wilaya, baladia, genre, bio };
            if (!name || !email || !password || !phone || !wilaya || !baladia  || !genre || !bio) {
                const error = new Error('All fields are required');
                error.statusCode = 400;
                throw error;
            }
            const result = await authService.registerWorker(workerData);
            const token=email
            const accessToken = authjwt.createAccessToken(token);
            const refreshToken = authjwt.createRefreshToken(token);

            res.status(201).json({ message: 'Worker registered successfully', worker: result, accessToken, refreshToken });
        } catch (error) {
            next(error);
        }
    }


    async getProfile(req, res, next) {
        try{
            const {id}=req.query

           
            const parsedID=parseInt(id,10)
            const result=await authService.getProfile(parsedID);
            return res.status(200).json({
                message: 'Profile retrieved successfully',
                profile: result
            });
        }
        catch(error){
            next(error);
        }
    }

    async getWorkers(req, res, next) {
        try{
            const {rating, category, wilaya, baladia, genre} = req.params;
            const result=await authService.getWorkers({rating, category, wilaya, baladia, genre});
            res.status(200).json({
                message: 'Workers retrieved successfully',
                workers: result
            });
        }
        catch(error){
            next(error)
            console.error("Error in getWorkers:", error);
        }
    }
    
}

module.exports = new AuthController;