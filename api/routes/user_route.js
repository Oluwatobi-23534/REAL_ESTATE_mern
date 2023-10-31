import express from 'express';
import { route } from '../controllers/user_controller.js';

const router = express.Router();

router.get('/route', route);

export default router;