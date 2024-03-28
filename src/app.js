import express from "express";
import conectaNoBanco from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNoBanco();

conexao.on("error", (erro) => {
  console.error("⛔ Erro de conexão com o Banco de Dados.", erro);
});

conexao.once("open", () => {
  console.log("👍✅ Conectado ao Banco de Dados.");
});

const app = express();
routes(app);

export default app;
