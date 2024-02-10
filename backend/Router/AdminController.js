import express from "express";

//administrators api
import { adminLogin, createAdmin, getAllAdmins } from "../api/admin.js";
import { allOrder, removeOrder, setOrder, updateOrder } from "../api/order.js";
import { getProducts, setProduct, updateProduct } from "../api/product.js";

//initialize express router
const Router = express.Router();


// ======= Admin controller ================
Router.get("/admins", getAllAdmins);

// ======= Admin controller ================
Router.post('/login', adminLogin);
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', createAdmin );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );


//Order routes
Router.get('/order', allOrder );
Router.post('/order', setOrder );
Router.get('/order/:id', removeOrder);
Router.put('/order/:id', updateOrder);

//Product routes
Router.get('/products', getProducts );
Router.post('/product', setProduct );
// Router.get('/product/:id', removeOrder);
Router.put('/product/:id', updateProduct);

export default Router;