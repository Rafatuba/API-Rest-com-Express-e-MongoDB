import express from "express";
import AutorController from "../controller/autorController.js";

const routes = express.Router();

//busca todos os autores
routes.get("/autores", AutorController.listarAutores);

//busca autor por id
routes.get("/autores/:id", AutorController.listaAutorPorID);

//atualiza informações do autor(por id)
routes.put("/autores/:id", AutorController.atualizarAutor);

//cria um novo autor
routes.post("/autores", AutorController.cadastrarAutor);

//excluir autor(por id)
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;
