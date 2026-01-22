import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
const dbName = 'todolist-prod'; // nome database mongoDbAtlas
const connectionString = process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;
// se esiste un url per collgarmi a mongoAtlas altrimenti si collega al mongo locale

let mongoServer;

export const connect = async () => { // sto esportando la variabile connect per il server.js
  try {
    if (process.env.NODE_ENV === 'test') { // NODE_ENV è variabile d'ambiente settata nel npm script
      mongoServer = await MongoMemoryServer.create();//se avvio il test crea un database temporaneo per gestire i dati e le repo
      await mongoose.connect(mongoServer.getUri(), { dbName });
      console.log('Connected to memory server');
    } else {
      await mongoose.connect(connectionString); // se non è in test si collega a mongoAtlas o mongo locale
      console.log('Connected to mongodb');
    }
  } catch (err) {
    console.error('Connection error', err);
    throw err;
  }
};

export const disconnect = async () => { //esporto variabile che fa disconettere dal database
  await mongoose.disconnect();
  if (mongoServer) await mongoServer.stop();
};


