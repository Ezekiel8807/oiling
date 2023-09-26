import React from "react";
import express from "express";

//administrators api
import { adminLogin, createAdmin } from "../api/admin.js";
import { allOrder, setOrder } from "../api/order.js";

//initialize express router
const Router = express.Router();

// ======= Admin controller ================
Router.post('/login', adminLogin );
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', createAdmin );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );


//Registration
Router.get('/order', allOrder );
Router.post('/order', setOrder );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );

export default Router;