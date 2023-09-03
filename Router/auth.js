import React from "react";
import express from "express";

//registration api
import { register, login } from "../api/auth.js";


//initialize express router
const Router = express.Router();


//authentication
Router.post('/login', login );
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', register );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );

export default Router;
