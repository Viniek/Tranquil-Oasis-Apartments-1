import {Router} from 'express';
import { createUser } from '../controllers/users.controllers.js';
const routerr=Router();



routerr.post("/register", createUser)
export default routerr