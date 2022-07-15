const jwt = require("jsonwebtoken");
const dbConnection = require("../utils/DbConnection");

class AuthController {
  static async login(req, res) {
    try {
      const { login, password } = req.body;
      if (!login || !password) return res.status(400).json({ error: "Login and Password are required" });

      const pgClient = await dbConnection.getPgSqlConnection("desafioMerca");

      const queryResponse = await pgClient.query(
        `
          SELECT
            id,
            login
          FROM clients
          WHERE
            login = $1
            AND password = $2
        `,
        [login, password]
      );

      if (queryResponse.rowCount <= 0) return res.status(400).json({ error: "Login or Password incorrect" });

      const currentClient = queryResponse.rows[0];

      const accessToken = jwt.sign(
        {
          clientId: currentClient.id,
          clientLogin: currentClient.login,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      return res.status(200).json({
        currentClient,
        accessToken,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
