import cors from 'cors';
import path from 'path';
import Express, { Router } from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

//controller
import controller from './Router/auth.js';
import DataBase from './dataBase.js';

//setting file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initiate express
const getpalmoil = Express();

//configure environment variable
dotenv.config();

//DataBace instancate
DataBase();

// ======= middle wares ==========
getpalmoil.use(cors());

// parse application/json
getpalmoil.use(bodyParser.json());

// parse application/x-www-form-urlencoded
getpalmoil.use(bodyParser.urlencoded({ extended: false }));

//static folders
getpalmoil.use(Express.static(path.join(__dirname + '/fontend/build')));


// express entry point
getpalmoil.use("/api", controller);


//not found routes
getpalmoil.use("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/fontend/build',  'index.html'));
});

//server listening port
getpalmoil.listen( process.env.PORT, () => console.log("server runing on port " + process.env.PORT));
