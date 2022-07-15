const jwt = require("jsonwebtoken");

function AuthenticateJWT(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async function (err, data) {
      if (err) return res.sendStatus(401);
  
      req.tokenData = data;
      next();
    });
  } catch(error) {
    return res.sendStatus(500).json({ error: error.message });
  }
}

module.exports = AuthenticateJWT;
