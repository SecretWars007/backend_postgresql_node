var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// Carga las variables de entorno
require('dotenv').config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// Carga las variables de entorno
require('dotenv').config();
var app = express();

const clienteRoutes = require("./routes/cliente.routes");
const pedidoRoutes = require("./routes/pedido.routes");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/clientes", clienteRoutes);
app.use("/api/pedidos", pedidoRoutes);

// const PORT = process.env.PORT || 3001;
const PORT = 3001;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);

module.exports = app;
