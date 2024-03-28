import mongoose, { mongo } from "mongoose";

async function conectaNoBanco() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default conectaNoBanco;

// mongodb+srv://rafatuba:<password>@cluster0.kxem5aj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
