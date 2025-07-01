


function errorHandler(error,req,res,next){
    if(res.headersSent){
        return next(error)
    }
    const statusCode = error.statusCode || 500;
    const status = error.status || 'error';
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({
        status:status,
        message:message
    })
}

module.exports=errorHandler;