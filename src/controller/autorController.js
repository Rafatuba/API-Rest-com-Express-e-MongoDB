import { autorModel } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autorModel.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autorModel.create(req.body);
      res.status(201).json({
        message: "Autor adicionado com sucesso",
        autorModel: novoAutor,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao adicionar o novo autor`,
      });
    }
  }

  //busca autorModel por id
  static async listaAutorPorID(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autorModel.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na atualização` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "Autor deletado com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao deletar o autor` });
    }
  }
}

export default AutorController;
