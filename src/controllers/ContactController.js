const ContactServiceFactory = require("../services/ContactServiceFactory");

class ContactController {
  static async get(req, res) {
    return res.send("TODO: buscar um contato");
  }

  static async create(req, res) {
    try {
      const { contacts } = req.body;
      if (!contacts || contacts.length <= 0) return res.status(400).json({ error: "At least one contact is required" });

      const Service = ContactServiceFactory.getService(req.tokenData.clientLogin);
      await Service.create(contacts);

      return res.status(200).json({ message: "Contact(s) were created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContactController;
