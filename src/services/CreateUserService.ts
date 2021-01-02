import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  auth_provider_id: string;
  avatar?: string;
  name: string;
  email: string;
}

class CreateUserService {
  public async execute({
    auth_provider_id,
    avatar,
    name,
    email,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const UserAlreadyExists = await usersRepository.findOne({
      where: { auth_provider_id, email },
    });

    if (UserAlreadyExists) {
      return UserAlreadyExists;
    }

    const user = usersRepository.create({
      auth_provider_id,
      avatar,
      name,
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
