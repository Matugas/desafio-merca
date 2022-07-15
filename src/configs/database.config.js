require("dotenv").config();

module.exports = {
  desafioMerca: {
    host: "localhost",
    port: 5432,
    database: "desafio-merca",
    user: "admin",
    password: process.env.DESAFIO_MERCAFACIL_DB_PASSWORD,
  },
  macapa: {
    host: "localhost",
    port: 3306,
    database: "admin",
    user: "admin",
    password: process.env.MACAPA_DB_PASSWORD
  },
  varejao: {
    host: "localhost",
    port: 5432,
    database: "admin",
    user: "admin",
    password: process.env.VAREJAO_DB_PASSWORD
  },
};