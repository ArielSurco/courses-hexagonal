import { ValidationErrors, Validator } from "@/modules/shared/domain/Validator";

export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
}

export interface UserLogin {
  email: string;
  password: string;
};

export interface UserToken {
  token: string;
};

export interface UserRegister {
  email: string;
  password: string;
  name: string;
  surname: string; 
}

export const ensureUserRegisterIsValid = (
  validator: Validator<UserRegister>,
  registerData: UserRegister
): ValidationErrors<UserRegister> => {
  const errors = validator.validate(registerData);

  return errors;
}

export const ensureUserLoginIsValid = (
  validator: Validator<UserLogin>,
  loginData: UserLogin
): ValidationErrors<UserLogin> => {
  const errors = validator.validate(loginData);

  return errors;
}