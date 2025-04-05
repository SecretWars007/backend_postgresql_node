const { Cliente } = require("../models");
// listar todos clientes
exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};
// crear un cliente
exports.crearCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};
// buscar un cliente por id
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({ id: req.params.id });;
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findOne({id: req.params.id});
    if (!clienteEliminado) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await clienteEliminado.destroy();
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Actualizar un cliente
exports.actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({ id: req.params.id });
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await cliente.update(req.body); 
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


