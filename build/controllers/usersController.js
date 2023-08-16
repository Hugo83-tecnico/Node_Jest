"use strict";
//STATUS CODE
//200 E 201 - OK
//404       - Página não encontrada
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const dataBase_1 = require("../dataBase");
class UserController {
    createUser(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ 'mensagem': 'Não é possivel criar usuarios sem nome' });
        }
        dataBase_1.dataBase.push(name);
        return response.status(201).json({ 'mensagem': `Usuario ${name} criado` });
    }
    getUser(request, response) {
        return response.status(200).json(dataBase_1.dataBase);
    }
}
exports.UserController = UserController;
;
