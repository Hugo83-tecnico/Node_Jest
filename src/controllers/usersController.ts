//STATUS CODE
//200 E 201 - OK
//404       - Página não encontrada


import { dataBase } from "../dataBase";
import { Request, Response } from "express";

export class UserController {
    createUser(request: Request, response: Response): Response{

        const {  name } = request.body;

        if(name.length < 1){
            return response.status(403).json({'mensagem': 'Não é possivel criar usuarios sem nome'})
        }
        dataBase.push(name);

        return response.status(201).json({'mensagem': `Usuario ${name} criado`});
    }

    getUser(request: Request, response: Response): Response{
        return response.status(200).json(dataBase);
    }

};

