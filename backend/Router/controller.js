import express from "express";

//registration api
import { register, login } from "../api/auth.js";

//initialize express router
const Router = express.Router();


// ========= user controller ================
Router.post('/login', login );


//Registration
Router.post('/register', register );


export default Router;
