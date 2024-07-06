import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetByID from './userGetByID';
import userUpdateByID from './userUpdateByID';
import userDeleteByID from './userDeleteByID';
import userDeleteAll from './userDeleteAll';

const router = new Router();

router.post('/', userRegister); // POST localhost:5000/user
router.get('/', userGetAll);
router.get('/:userID', userGetByID);
router.patch('/:userID', userUpdateByID);
router.delete('/:userID', userDeleteByID);
router.delete('/', userDeleteAll);






export default router;