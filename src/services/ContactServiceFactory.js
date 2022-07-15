const ContactServiceMacapa = require("./ContactServiceMacapa");
const ContactServiceVarejao = require("./ContactServiceVarejao");
const EnumClient = require("../utils/Client.enum");

class ContactServiceFactory {
    static getService(client) {
        switch (client) {
            case EnumClient.MACAPA: return ContactServiceMacapa;
            case EnumClient.VAREJAO: return ContactServiceVarejao;
            default: throw new Error("Client not implemented");
        }
    }
}

module.exports = ContactServiceFactory;