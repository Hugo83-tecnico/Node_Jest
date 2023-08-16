"use strict";
//GET       - Ler dados
//POST      - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE    - Deletar os dados
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express"); // Library was imported 
const usersController_1 = require("./controllers/usersController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const userController = new usersController_1.UserController();
routes.get('/users', userController.getUser);
routes.post('/users', userController.createUser);
