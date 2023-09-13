import React from "react";
import express from "express";

//administrators api
import { adminLogin } from "../api/admin.js";

//initialize express router
const Router = express.Router();

// ======= Admin controller ================



// ========= user controller ================
Router.post('/login', adminLogin );
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
// Router.post('/register', register );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );

export default Router;