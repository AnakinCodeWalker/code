import { Router } from "express";

import signupHandler from "../controllers/signup.controller.js";
import signinHandler from "../controllers/signin.controller.js";
import todoHandler from "../controllers/todo.controller.js";
import todosHandler from "../controllers/todos.controller.js";

const router = Router(); // ✅ this creates a new router instance

router.post('/signup', signupHandler);
router.post('/login', signinHandler);
router.post('/todo', todoHandler);
router.get('/todos', todosHandler);

export default router;
