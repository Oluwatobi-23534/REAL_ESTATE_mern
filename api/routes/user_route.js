import express from 'express';
import { route, updateUser } from '../controllers/user_controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/route', route);
router.post('/update/:id', verifyToken, updateUser);

export default router;