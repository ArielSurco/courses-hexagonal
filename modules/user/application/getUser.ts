import { User } from "../domain/User"
import { UserRepository } from "../domain/UserRepository"

export const getUser = async (userRepository: UserRepository, id: string): Promise<User> => {
  const user = await userRepository.get(id);
  return user;
}