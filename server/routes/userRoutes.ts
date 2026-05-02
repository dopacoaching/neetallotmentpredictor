import { Router } from 'express';
import { registerUser, getHealth } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.get('/health', getHealth);

export default router;
