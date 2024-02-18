import express from "express";

//registration api
import {singleUser, updateUser, updatePassword, delUser, AllUser } from "../api/user.js";
import { removeOrder, setOrder, updateOrder, userOrder } from "../api/order.js";
import { getProducts, setProduct, updateProduct } from "../api/product.js";

//initialize express router
const Router = express.Router();

//Product routes
Router.get('/products', getProducts );
Router.post('/product', setProduct );
// Router.get('/product/:id', removeOrder);
Router.put('/product/:id', updateProduct);

//user order routes
Router.post('/orders', setOrder);
Router.get('/orders/:id', userOrder);
Router.put('/orders/:id', updateOrder);
Router.delete('/orders/:id', removeOrder);

//user public router
Router.get('/', AllUser );
Router.put('/changePass', updatePassword);
Router.get('/:id', singleUser );
Router.put('/:id',  updateUser);
Router.delete('/:id', delUser );




export default Router;