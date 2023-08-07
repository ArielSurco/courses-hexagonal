'use client';

import { UserRegister } from '@/modules/user/domain/User';
import { Formik } from '../../shared/dependencies/formik';
import useRegisterForm from '../hooks/useRegisterForm';

const UserRegisterContainer = ({ children }: IUserRegisterContainerProps) => {
  const { formikRef, validateRegisterForm, handleSubmit } = useRegisterForm();

  return (
    <Formik<UserRegister>
      initialValues={{
        name: '',
        surname: '',
        email: '',
        password: ''
      }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      validate={validateRegisterForm}
    >
      {children}
    </Formik>
  )
}

export default UserRegisterContainer

interface IUserRegisterContainerProps {
  children: React.ReactNode;
}