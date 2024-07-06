import { Router } from 'express';
import info from './info';

const router = new Router();

router.post('/', info);
router.get('/', info);


export default router;