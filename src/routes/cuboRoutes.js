const express = require("express");
const router = express.Router();

const cuboControllers = require("../controllers/cuboControllers")
const usuarioControllers = require("../controllers/usuarioControllers")
const authControllers = require("../controllers/authControllers")

const {checkAuth} = require("../middlewares/auth")

//Rotas normais
router.get("/cubos", cuboControllers.exibeTodos)
router.post("/cuboNovo", cuboControllers.novoCubo)
router.patch("/editarCubo/:id", cuboControllers.alteraCubo)
router.delete("/deletaCubo/:id", checkAuth,cuboControllers.deleteCubo)

//Rotas para Autenticação
router.get("/usuarios", usuarioControllers.exibeUsuarios)
router.post("/novoUsuario", usuarioControllers.criarUsuarios)
router.post("/login", authControllers.login)

module.exports = router;