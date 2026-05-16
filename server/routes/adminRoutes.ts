import express from 'express';
import { adminLogin, exportUsersExcel, getAllUsers, getCutoffData, debugCutoffData } from '../controllers/adminController';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/users', getAllUsers);
router.get('/export', exportUsersExcel);
router.get('/cutoffs', getCutoffData);
router.get('/cutoffs-debug', debugCutoffData);

export default router;
