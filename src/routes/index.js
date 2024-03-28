import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

//centralizar as rotas
const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livros, autores);
};

export default routes;
