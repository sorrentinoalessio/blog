import express from 'express';
import { registerRoutes } from './src/routes/routes.js';
import { connect } from './database.js';
import {Server} from 'socket.io';
import http from 'http';
import SocketIoInitializer from './src/components/SocketIoInitializer.js';

export const host = 'localhost';
export const port = 3001;

const app = express(); // gestisce le richiesta REST
app.use(express.json()); // permette la lettura del body in json 
await connect(); // attende connessione a database
const httpServer = http.createServer(app); // crea un server http passandoli app express
const io = new Server(httpServer); // crea il server socket
registerRoutes(app); // sto abbinando le routes rest a express 
new SocketIoInitializer(io); // inizializzo il server socket registrando i vari middleware e REST
app.use((err, req, res, next) => { // gestione errori joi
    if(err?.error && err.error.isJoi) {
        res.status(400).json({type: err.type, message: err.error.toString()});
    }
    else{
        next(err);
    }
})
httpServer.listen(port, host, () => { // avvia il server in modalita ascolto
    console.log(`Server avviato ${host}: ${port}.`)
})

export default app;