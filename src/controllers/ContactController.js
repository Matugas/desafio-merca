const ContactServiceFactory = require("../services/ContactServiceFactory");

class ContactController {
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

  static async get(req, res) {
    try {
      const Service = ContactServiceFactory.getService(req.tokenData.clientLogin);
      const contact = await Service.get(req.params.contactId);

      if (!contact || contact.length <= 0) return res.status(200).json({ message: "Contact not found" });

      return res.status(200).json({ message: "Contact successfully recovered", data: contact });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const Service = ContactServiceFactory.getService(req.tokenData.clientLogin);
      const allContacts = await Service.getAll();

      return res.status(200).json({ message: "All contacts successfully recovered", data: allContacts });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContactController;
