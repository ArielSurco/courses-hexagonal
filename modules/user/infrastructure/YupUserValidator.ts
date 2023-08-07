import { ValidationErrors, Validator } from '@/modules/shared/domain/Validator';
import * as Yup from 'yup';
import { UserLogin, UserRegister } from '../domain/User';

export const createYupUserRegisterValidator = (): Validator<UserRegister> => ({
  validate: validateRegisterUser
});

export const createYupUserLoginValidator = (): Validator<UserLogin> => ({
  validate: validateUserLogin
})

const validateRegisterUser = (data: UserRegister): ValidationErrors<UserRegister> => {
  try {
    userRegisterSchema.validateSync(data, { abortEarly: false });
    return {}
  } catch(errors: any) {
    return parseYupErrors(errors);
  }
}

const validateUserLogin = (data: UserLogin): ValidationErrors<UserLogin> => {
  try {
    userLoginSchema.validateSync(data, { abortEarly: false });
    return {}
  } catch(errors: any) {
    return parseYupErrors(errors);
  }
}

/* UTILS */
const userRegisterSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  name: Yup.string().required(),
  surname: Yup.string().required(),
});

const userLoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const parseYupErrors = (errors: any) => {
  return errors?.inner?.reduce((acc: any, error: any) => {
    acc[error.path] = error.message;
    return acc;
    }, {});
}