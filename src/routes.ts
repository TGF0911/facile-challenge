import { Router } from 'express';
import { EncryptController } from './controllers/EncryptController';

const router = Router();

const encryptController = new EncryptController();

router.post('/encrypts', encryptController.create);
router.get('/encrypts/:id', encryptController.read);

export { router };
