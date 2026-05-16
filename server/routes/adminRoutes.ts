import express from 'express';
import { adminLogin, exportUsersExcel, getAllUsers, getCutoffData } from '../controllers/adminController';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/users', getAllUsers);
router.get('/export', exportUsersExcel);
router.get('/cutoffs', getCutoffData);

export default router;
