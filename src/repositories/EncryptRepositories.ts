import { EntityRepository, Repository } from 'typeorm';
import { Encrypt } from '../entities/Encrypt';

@EntityRepository(Encrypt)
export class EncryptRepository extends Repository<Encrypt> {}
