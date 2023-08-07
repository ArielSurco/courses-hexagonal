'use client';

import { createContext, useContext, useMemo } from 'react';
import { Validator } from '@/modules/shared/domain/Validator';
import { UserLogin } from '@/modules/user/domain/User';
import { UserRepository } from '@/modules/user/domain/UserRepository';

interface IContextState {
  repository: UserRepository;
  loginValidator: Validator<UserLogin>;
  registerValidator: Validator<UserLogin>;
}

interface IUserProviderProps extends IContextState {
  children: React.ReactNode;
}

export const UserContext = createContext({} as IContextState);

export const UserProvider = ({ children, repository, loginValidator, registerValidator }: IUserProviderProps) => {
  const contextState = useMemo(() => ({
    repository,
    loginValidator,
    registerValidator
  }), [repository, loginValidator, registerValidator]);

  return (
    <UserContext.Provider value={contextState}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context;
}