import { User, UserLogin, UserRegister, UserToken } from "./User";

export interface UserRepository {
  save(user: UserRegister): Promise<void>;
  get(id: string): Promise<User>;
  getToken(credentials: UserLogin): Promise<UserToken>;
}