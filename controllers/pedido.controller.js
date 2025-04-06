const { Pedido } = require("../models");
// Obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};
// Crear pedido
exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};
// Obtener pedido por id
exports.obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Eliminar un pedido
exports.eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    await pedido.destroy();
    res.json({ message: "Pedido eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Actualizar un pedido
exports.actualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    await pedido.update(req.body); 
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
