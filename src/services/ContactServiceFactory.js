const ContactServiceMacapa = require("./ContactServiceMacapa");
const ContactServiceVarejao = require("./ContactServiceVarejao");

class ContactServiceFactory {
    static getService(client) {
        switch (client) {
            case "macapa": return ContactServiceMacapa;
            case "varejao": return ContactServiceVarejao;
            default: throw new Error("Client not implemented");
        }
    }
}

module.exports = ContactServiceFactory;