import express from "express";

//registration api
import { register, login } from "../api/auth.js";

import {singleUser} from "../api/user.js";
import { getProducts } from "../api/product.js";

//initialize express router
const Router = express.Router();


// ========= user controller ================
Router.post('/login', login );
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );

//Registration
Router.post('/register', register );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );




//user 
Router.get('/:username', singleUser );

//all products
Router.get('/products', getProducts);

export default Router;
