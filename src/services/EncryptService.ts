import { getCustomRepository } from 'typeorm';
import crypto from 'crypto';
import { v4 as uuid } from 'uuid';
import { EncryptRepository } from '../repositories/EncryptRepositories';

export class EncryptService {
  public async create(name: string) {
    try {
      const encryptRepository = getCustomRepository(EncryptRepository);

      const iv = crypto.randomBytes(16);

      console.log('Passou por aqui Antes de criar o cipher');

      const cipher = crypto.createCipheriv('aes-256-gcm', String(process.env.SECRET), iv);

      cipher.update(name);

      const encryptedName = cipher.final('hex');

      console.log('Passou por aqui depois de criar o cipher');

      console.log('encryptedName: ', encryptedName.toString());

      const encrypt = encryptRepository.create({
        id: uuid(),
        name: encryptedName,
      });

      await encryptRepository.save(encrypt);

      console.log('Passou por aqui depois de salvar o cipher');

      return encrypt;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async read(id: string) {
    try {
      const encryptRepository = getCustomRepository(EncryptRepository);

      const encrypt = await encryptRepository.findOne(id);

      if (!encrypt) {
        return;
      }

      const iv = crypto.randomBytes(16);

      const decipher = crypto.createDecipheriv('aes-256-cbc', 'secret', iv);

      decipher.update(encrypt.name, 'hex');

      const decryptedName = decipher.final('utf8');

      return { id: encrypt.id, encrypted_name: decryptedName };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
