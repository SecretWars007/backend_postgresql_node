const express = require("express");
const router = express.Router();
const {
  obtenerPedidos,
  crearPedido,
  obtenerPedidoPorId,
  eliminarPedido,
  actualizarPedido,
} = require("../controllers/pedido.controller");
router.get("/", obtenerPedidos);
router.post("/", crearPedido);
router.get("/:id", obtenerPedidoPorId);
router.delete("/:id", eliminarPedido);
router.put("/:id", actualizarPedido);
module.exports = router;
