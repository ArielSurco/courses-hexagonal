'use client';

import { UserProvider } from '../user/context/UserContext';
import { createLocalUserRepository } from '@/modules/user/infrastructure/LocalUserRepository';
import { createYupUserLoginValidator, createYupUserRegisterValidator } from '@/modules/user/infrastructure/YupUserValidator';

const ContextProviders = ({ children }: IContextProviders) => {
  const userRepository = createLocalUserRepository();
  const userLoginValidator = createYupUserLoginValidator();
  const userRegisterValidator = createYupUserRegisterValidator();

  return (
    <UserProvider
      repository={userRepository}
      loginValidator={userLoginValidator}
      registerValidator={userRegisterValidator}
    >
      {children}
    </UserProvider>
  )
}

export default ContextProviders;

interface IContextProviders {
  children: React.ReactNode;
}