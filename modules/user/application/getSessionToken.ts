import { UserLogin } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const getSessionToken = async (userRepository: UserRepository, credentials: UserLogin) => {
  const token = await userRepository.getToken(credentials);

  return token;
}