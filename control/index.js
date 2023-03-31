import express from 'express';
import { landingRoute } from "../Router/indexRouter.js";


const Router = express.Router();

Router.get('/', landingRoute);





export default Router;