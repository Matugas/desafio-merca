const express = require("express");
const bodyParser = require("body-parser");
const AuthenticateJWT = require("./middlewares/AuthenticateJWT");
const AuthRouter = require("./routes/AuthRouter");
const ContactRouter = require("./routes/ContactRouter");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!<br>API working 100%");
});

app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/contacts", AuthenticateJWT, ContactRouter);

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
