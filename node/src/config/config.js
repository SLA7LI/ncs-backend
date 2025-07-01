require('dotenv').config();
const config={
    port:process.env.PORT || 5000,
    accessTokenJWT: process.env.ACCESS_JWT_SECRET || "",
  refreshTokenJWT: process.env.REFRESH_JWT_SECRET || "",
    
}

module.exports=config;