import express from 'express';
import { adminLogin, exportUsersExcel, getAllUsers } from '../controllers/adminController';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/users', getAllUsers);
router.get('/export', exportUsersExcel);

export default router;
