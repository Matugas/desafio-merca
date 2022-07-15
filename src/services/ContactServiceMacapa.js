const dbConnection = require("../utils/DbConnection");
const Validators = require("../utils/Validators");
const EnumClient = require("../utils/Client.enum");

class ContactServiceMacapa {
  static async create(contacts) {
    const mysqlConnection = await dbConnection.getMySqlConnection(EnumClient.MACAPA);
    try {
      mysqlConnection.beginTransaction();

      for (const contact of contacts) {
        const name = Validators.validateNameMacapa(contact.name);
        const cellphone = Validators.validateCellPhoneMacapa(contact.cellphone);

        const querySQL = `INSERT INTO contacts (nome, celular) VALUES (?, ?)`;
        mysqlConnection.query(querySQL, [name, cellphone]);
      }

      mysqlConnection.commit();
    } catch(error) {
      mysqlConnection.rollback();
      console.error(error);
      throw error;
    }
  }
}

module.exports = ContactServiceMacapa;
