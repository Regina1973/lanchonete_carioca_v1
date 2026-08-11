const clientService = require("../services/clients.service");

exports.getClients = (req, res) => {
  const clients = clientService.getClients();
  res.json(clients);
};

exports.createClient = (req, res) => {
  const newClient = clientService.createClient(req.body);
  res.status(201).json(newClient);
};

exports.getClientById = (req, res) => {
  const client = clientService.getClientById(req.params.id);
  res.json(client);
};

exports.updateClient = (req, res) => {
  const client = clientService.updateClient(
    req.params.id,
    req.body
  );

  res.json(client);
};

exports.deleteClient = (req, res) => {
  clientService.deleteClient(req.params.id);
  res.status(204).send();
};