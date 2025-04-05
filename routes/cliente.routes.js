const express = require("express");
const Cliente = require("../models/cliente");
const router = express.Router();
const {
  obtenerClientes,
  crearCliente,
  obtenerClientePorId,
  eliminarCliente,
  actualizarCliente,
} = require("../controllers/cliente.controller");
// Obtener todos los clientes
router.get("/", obtenerClientes);
// Crear un cliente
router.post("/", crearCliente);
// Obtener un cliente por ID
router.get("/:id", obtenerClientePorId);
// Eliminar un cliente por ID
router.delete("/:id",eliminarCliente);
// Actualizar un cliente por ID
router.put("/:id", actualizarCliente);
module.exports = router;
