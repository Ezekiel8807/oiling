import cors from 'cors';
import path from 'path';
import Express, { Router } from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

//controller
import DataBase from './dataBase.js';
import UserController from './Router/userController.js';
import AdminController from './Router/AdminController.js';

//listening port number
const port = process.env.PORT || 5000;

//setting file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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
// getpalmoil.use(Express.static(path.join(__dirname + '/fontend/build')));


// express entry point
getpalmoil.use("/api", UserController);
getpalmoil.use("/api/admin", AdminController);

//not found routes
getpalmoil.use("*", (req, res) => {
    // res.sendFile(path.join(__dirname + '/fontend/build',  'index.html'));
    res.status(404);
});

//server listening port
getpalmoil.listen( port, () => console.log("server runing on port " + port));
