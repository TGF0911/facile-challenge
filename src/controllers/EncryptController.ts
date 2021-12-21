import { Request, Response } from 'express';
import { EncryptService } from '../services/EncryptService';

export class EncryptController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ code: 'E_VALIDATION_FAILURE', message: 'O campo "name" é obrigatório' });
    }

    const encryptService = new EncryptService();

    const encrypt = await encryptService.create(name);

    return res.json(encrypt);
  }

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const encryptService = new EncryptService();

    const encrypt = await encryptService.read(id);

    if (!encrypt) {
      return res.status(404).json({ error: 'Encrypt not found' });
    }
    return res.json(encrypt);
  }
}
