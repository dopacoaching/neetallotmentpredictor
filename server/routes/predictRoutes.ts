import { Router } from 'express';
import { getSpecialties, getFilters, predictAllotment } from '../controllers/predictController';

const router = Router();

router.get('/specialties', getSpecialties);
router.get('/filters', getFilters);
router.post('/predict', predictAllotment);

export default router;
