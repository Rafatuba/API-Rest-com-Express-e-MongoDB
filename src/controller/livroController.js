import livro from "../models/Livro.js";
import { autorModel } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autorModel.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({
        message: "Livro criado com sucesso",
        livro: livroCriado,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao criar o novo Livro` });
    }
  }

  //busca livro por id
  static async listaLivroPorID(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição do livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na atualização` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao deletar o livro` });
    }
  }
}

export default LivroController;
