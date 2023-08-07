'use client';

import { UserLogin } from '@/modules/user/domain/User';
import { Formik } from '../../shared/dependencies/formik';
import useLoginForm from '../hooks/useLoginForm';

const UserLoginContainer = ({ children }: IUserLoginContainerProps) => {
  const { formikRef, validateLoginForm, handleSubmit } = useLoginForm();

  return (
    <Formik<UserLogin>
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      validate={validateLoginForm}
    >
      {children}
    </Formik>
  )
}

export default UserLoginContainer

interface IUserLoginContainerProps {
  children: React.ReactNode;
}