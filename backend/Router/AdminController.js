import express from "express";

//administrators api
import { adminLogin, createAdmin, getAllAdmins } from "../api/admin.js";
import { allOrders, removeOrder, setOrder, updateOrder } from "../api/order.js";
import { getProducts, setProduct, updateProduct } from "../api/product.js";

//initialize express router
const Router = express.Router();


// ======= Admin controller ================
Router.get("/", getAllAdmins);

// ======= Admin controller ================
Router.post('/login', adminLogin);
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', createAdmin );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );


//Order routes
Router.post('/order', setOrder );
Router.get('/orders', allOrders );
Router.put('/orders/:id', updateOrder);
Router.delete('/orders/:id', removeOrder);


//Product routes
Router.get('/products', getProducts );
Router.post('/product', setProduct );
Router.put('/products/:id', updateProduct);
// Router.get('/products/:id', removeOrder);

export default Router;