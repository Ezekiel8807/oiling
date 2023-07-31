import cors from 'cors';
import path from 'path';
import Express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

//controllers
import index from './api/index.js';

//configure environment variable
dotenv.config();

//setting file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initiate express
const getpalmoil = Express();

// ======= middle wares ==========
getpalmoil.use(cors());

// parse application/json
getpalmoil.use(bodyParser.json());

// parse application/x-www-form-urlencoded
getpalmoil.use(bodyParser.urlencoded({ extended: false }));

// express entry point
getpalmoil.get("/api", index);

//not found routes
getpalmoil.use(Express.static(path.join(__dirname + '/fontend/build')));
getpalmoil.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/fontend/build',  'index.html'));
});

//server listening port
getpalmoil.listen( process.env.PORT, () => console.log("server runing on port " + process.env.PORT));
