import { getCustomRepository } from 'typeorm';
import CryptoJS from 'crypto-js';
import { customAlphabet } from 'nanoid';
import { v4 as uuid } from 'uuid';
import { EncryptRepository } from '../repositories/EncryptRepositories';

export class EncryptService {
  public async create(name: string) {
    try {
      const encryptRepository = getCustomRepository(EncryptRepository);

      const key = CryptoJS.enc.Utf8.parse(String(process.env.SECRET));

      let encrypted = CryptoJS.AES.encrypt(name, key.toString()).toString();

      const encryptedName = encrypted;
      const nanoid = customAlphabet('1234567890abcdef', 6);
      const id = nanoid();

      const encrypt = encryptRepository.create({
        id,
        name: encryptedName,
      });

      await encryptRepository.save(encrypt);

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

      const key = CryptoJS.enc.Utf8.parse(String(process.env.SECRET));

      const decrypted = CryptoJS.AES.decrypt(encrypt.name, key.toString()).toString(CryptoJS.enc.Utf8);

      return { id: encrypt.id, encrypted_name: decrypted };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
