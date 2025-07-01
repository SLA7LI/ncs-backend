const jwt = require("jsonwebtoken");
const config = require("../config/config");
class AuthJWT {
  createRefreshToken = (user) => {
    const email = user.email;
    const token = jwt.sign({ user }, config.refreshTokenJWT, {
      expiresIn: "1d",
    });
    return token;
  };
  createAccessToken = (user) => {
    const email = user.email;

    const token = jwt.sign({ user }, config.accessTokenJWT, {
      expiresIn: "10h",
    });
    return token;
  };

 createEmailInvitation = (inviteeEmail, inviterEmail, specialToken) => {
    const token = jwt.sign(
      { inviteeEmail, inviterEmail, specialToken },
      config.accessTokenJWT,
      { expiresIn: "2h" }
    );
    return token;
  };
}

module.exports = new AuthJWT();
