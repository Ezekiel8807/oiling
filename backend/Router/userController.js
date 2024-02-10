import express from "express";

//registration api
import {singleUser, updateUser, updatePassword, delUser } from "../api/user.js";
import { removeOrder, setOrder, updateOrder, userOrder } from "../api/order.js";

//initialize express router
const Router = express.Router();



//user order routes
Router.post('/orders', setOrder);
Router.get('/orders/:id', userOrder);
Router.put('/orders/:id', updateOrder);
Router.delete('/orders/:id', removeOrder);

//user public router
Router.put('/changePass', updatePassword);
Router.get('/:id', singleUser );
Router.put('/:id',  updateUser);
Router.delete('/:id', delUser );




export default Router;