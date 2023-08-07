import { UserRegister } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const createUser = async (
  userRepository: UserRepository,
  userData: UserRegister
): Promise<void> => {
  await userRepository.save(userData);
}