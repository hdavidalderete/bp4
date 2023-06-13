const Client = require("../models/client");
const Joi = require("joi");

// Esquema de validación
const schema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  birthdate: Joi.date().iso(),
  email: Joi.string().email().required(),
  cuit: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required(),
  address: Joi.string(),
  cellPhone: Joi.string().required(),
});

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).send({ client });
  } catch (error) {
    res.status(500).send({ msg: "Error al modificar un cliente", error });
  }
};

const getClients = async (req, res) => {
  try {
    const { name } = req.query;
    let clients;
    if (name) {
      clients = await Client.find({ name: { $regex: name, $options: "i" } });
    } else {
      clients = await Client.find();
    }
    res.status(200).send({ clients });
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener los clientes", error });
  }
};

const createClient = async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: "Datos inválidos", msg: error.details[0].message });
    }
    const newClient = new Client(value);
    const client = await newClient.save();
    res.status(201).send({ client });
  } catch (error) {
    res.status(500).send({ msg: "Error al crear un cliente", error });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: "Datos inválidos", msg: error.details[0].message });
    }
    const client = await Client.findByIdAndUpdate(id, value);
    res.status(200).send({ client });
  } catch (error) {
    res.status(500).send({ msg: "Error al modificar un cliente", error });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await Client.findByIdAndDelete(id);
    res.status(200).send({ msg: "El cliente se elimino con exito" });
  } catch (error) {
    res.status(500).send({ msg: "Error al elliminar un cliente", error });
  }
};

module.exports = {
  getById,
  getClients,
  createClient,
  updateClient,
  deleteClient,
};
