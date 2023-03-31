import file from 'fs';
import cors from 'cors';
import Express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';


//controllers
import index from './control/index.js';


//configure environment variable
dotenv.config();


//initiate express
const getpalmoil = Express();


// ========== middle wares =======================
getpalmoil.use(cors());

// parse application/json
getpalmoil.use(bodyParser.json());

// parse application/x-www-form-urlencoded
getpalmoil.use(bodyParser.urlencoded({ extended: false }));


// express entry point
getpalmoil.get("/api", index);


//not found routes
getpalmoil.use(Express.static('./fontend/build'));
getpalmoil.get("*", (req, res) => {
    res.sendFile("./fontend/build",  "index.html");
});


//server listening port
getpalmoil.listen( process.env.PORT, () => console.log("server runing on port " + process.env.PORT));