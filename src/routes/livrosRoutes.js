import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();

//busca todos os livros
routes.get("/livros", LivroController.listarLivros);

//busca livro por id
routes.get("/livros/:id", LivroController.listaLivroPorID);

//atualiza informações do livro(por id)
routes.put("/livros/:id", LivroController.atualizarLivro);

//cria um novo livro
routes.post("/livros", LivroController.cadastrarLivro);

//excluir livro(por id)
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;
