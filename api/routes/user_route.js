import express from 'express';
import { deleteUser, route, updateUser, getUserListings } from '../controllers/user_controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/route', route);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;