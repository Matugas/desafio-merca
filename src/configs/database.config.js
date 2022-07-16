require("dotenv").config();
const EnumClient = require("../utils/Client.enum");

module.exports = {
  desafioMerca: {
    stringConnection: process.env.DESAFIOMERCA_DB_CONNECTION,
  },
  [EnumClient.MACAPA]: {
    stringConnection: process.env.MACAPA_DB_CONNECTION,
  },
  [EnumClient.VAREJAO]: {
    stringConnection: process.env.VAREJAO_DB_CONNECTION,
  },
};
