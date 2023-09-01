const jwt = require("jsonwebtoken");
const config = require("./config");

const verifyAccessToken = async (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(req.token, config.secret, (err, authData) => {
        if (err) {
          return res.status(403).json({ message: "Unauthorized" });
        } else {
          req.authData = authData;
          next();
        }
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "something went wrong", status: 500 });
  }
};

const generateToken = async (req, res, next) => {
  try {
    let token = jwt.sign({}, config.secret,{ expiresIn: 43200});
    return res.status(200).json({token, status: 200, message: 'success'})
  } catch (err) {
      console.log(err,'<<<<<<<<<<<<,why')
    return res
      .status(500)
      .json({ message: "something went wrong", status: 500 });
  }
};

module.exports = {
  verifyAccessToken,
  generateToken
};
