import { getRepository } from 'typeorm';
import User from '../models/User';

class FindUserService {
  public async execute(id: string): Promise<User | undefined> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { id },
    });

    return user;
  }
}

export default FindUserService;
