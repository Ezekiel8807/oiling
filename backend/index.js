import cors from 'cors';
// import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import Express, { Router } from 'express';


//controller
import controller from './Router/controller.js';
import userController from './Router/userController.js';
import adminController from './Router/AdminController.js';

//listening port number
const port = process.env.PORT || 5000;

//setting file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//initiate express
const emak = Express();

//configure environment variable
dotenv.config();

//DataBace instancate
mongoose.connect(process.env.MONGOLINK,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>{
    console.log(err.message);
})

// ======= middle wares ==========
emak.use(cors());

// parse application/json
emak.use(bodyParser.json());

// parse application/x-www-form-urlencoded
emak.use(bodyParser.urlencoded({ extended: false }));

//static folders
// emak.use(Express.static(path.join(__dirname + '/fontend/build')));


// express entry point
emak.use("/api", controller);
emak.use("/api/users", userController);
emak.use("/api/admins", adminController);

//not found routes
emak.use("*", (req, res) => {
    // res.sendFile(path.join(__dirname + '/fontend/build',  'index.html'));
    res.status(404).json({"Msg": "Request not Found!"});
});

//server listening port
emak.listen( port, () => console.log("server runing on port " + port));
