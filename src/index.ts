import express from "express";
import { routes } from './routes';

const server = express();
const porta = 5000;

server.use(express.json());
server.use(routes);

server.listen(porta, ()=>{
    console.log(`Servidor on na porta ${porta}`);
});



