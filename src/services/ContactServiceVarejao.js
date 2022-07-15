const dbConnection = require("../utils/DbConnection");
const Validators = require("../utils/Validators");
const EnumClient = require("../utils/Client.enum");

class ContactServiceVarejao {
  static async create(contacts) {
    const pgClient = await dbConnection.getPgSqlClient(EnumClient.VAREJAO);
    try {
      pgClient.query("BEGIN");

      for (const contact of contacts) {
        const name = Validators.validateNameVarejao(contact.name);
        const cellphone = Validators.validateCellPhoneVarejao(contact.cellphone);

        const querySQL = `INSERT INTO contacts (nome, celular) VALUES ($1, $2)`;
        await pgClient.query(querySQL, [name, cellphone]);
      }

      pgClient.query("COMMIT");
    } catch(error) {
      pgClient.query("ROLLBACK");
      console.error(error);
      throw error;
    }
  }
}

module.exports = ContactServiceVarejao;
