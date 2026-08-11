const clientService = require("../services/clients.service");

exports.getClients = (req, res) => {
  const clients = clientService.getClients();
  res.json(clients);
};

exports.createClient = (req, res) => {
  const client = req.body;

  const newClient = clientService.createClient(client);

  res.status(201).json(newClient);
};