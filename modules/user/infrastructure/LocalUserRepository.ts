import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { User, UserLogin, UserRegister, UserToken } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const createLocalUserRepository = (): UserRepository => ({
  get,
  getToken,
  save,
});

const users: User[] = []

const get = async (id: string): Promise<User> => {
  const user = getUserFromLocal(id);

  if(!user) throw new Error('User not found');

  return user;
}

const getToken = async (credentials: UserLogin): Promise<UserToken> => {
  const user = users.find((user) => user.email === credentials.email);

  if(!user) throw new Error('User not found');

  const token = createToken(user);

  return { token };
}

const save = async (userData: UserRegister): Promise<void> => {
  const user: User = {
    id: uuidv4(),
    email: userData.email,
    name: userData.name,
    surname: userData.surname,
  };

  saveUserInLocal(user);
}

/* UTILS */
const createToken = (user: User): string => {
  const token = jwt.sign(user, 'secret');
  return token;
}

const getUserFromLocal = (id: string): User | undefined => {
  return users.find((user) => user.id === id)
}

const saveUserInLocal = (user: User): void => {
  users.push(user);
}