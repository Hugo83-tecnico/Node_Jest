import { makeMockResponse } from "../mocks/mocksResponse";
import { UserController } from "./usersController";
import { Request } from 'express';

describe('Users Controllers', ()=>{
    const usersController = new UserController();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    it('Deve listar os nossos usários',()=>{
        usersController.getUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(1);
    })

    it('Deve criar um novo usuário', ()=>{
        mockRequest.body = {
            name: 'Novo usuário'
        }

        usersController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuario ${mockRequest.body.name} criado`})
    })

    it('Não deve criar um usuário com nome em branco', ()=>{
        mockRequest.body = {
            name: ''
        }
        usersController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({'mensagem': 'Não é possivel criar usuarios sem nome'});
    })

})

