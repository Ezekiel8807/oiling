import express from "express";

//administrators api
import { allOrders, removeOrder } from "../api/order.js";
import { getProducts, setProduct, updateProduct } from "../api/product.js";
import { adminLogin, createAdmin, delAdmin, getAllAdmins, singleAdmin } from "../api/admin.js";


//initialize express router
const Router = express.Router();




// ======= Admin controller ================
Router.post('/login', adminLogin);
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', createAdmin );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );


//Order routes
Router.get("/orders", allOrders );
Router.delete('/orders/:id', removeOrder);


//Product routes
Router.get('/products', getProducts );
Router.post('/product', setProduct );
Router.put('/products/:id', updateProduct);
// Router.get('/products/:id', removeOrder);


// ======= Admin controller ================
Router.get("/", getAllAdmins);
Router.get("/:id", singleAdmin);
Router.delete('/:id', delAdmin );


export default Router;