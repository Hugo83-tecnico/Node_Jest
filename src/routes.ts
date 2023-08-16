//GET       - Ler dados
//POST      - Criar os dados
//PUT/PATCH - Editar os dados
//DELETE    - Deletar os dados


import { Router } from "express"; // Library was imported 
import { UserController } from "./controllers/usersController";


const routes = Router();
const userController = new UserController();

routes.get('/users', userController.getUser);

routes.post('/users', userController.createUser);

export { routes};