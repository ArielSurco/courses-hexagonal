'use client';

import { useRef } from "react"
import { FormikErrors, FormikProps } from "../../shared/dependencies/formik";
import { UserRegister, ensureUserRegisterIsValid } from "@/modules/user/domain/User";
import { useUser } from "../context/UserContext";
import { createUser } from "@/modules/user/application/createUser";
import { useRouter } from "next/navigation";

const useRegisterForm = () => {
  const { repository, registerValidator } = useUser();
  const router = useRouter();
  const formikRef = useRef<FormikProps<UserRegister>>(null);

  const validateRegisterForm = (data: UserRegister): FormikErrors<UserRegister> => {
    return ensureUserRegisterIsValid(registerValidator, data) ?? {};
  }

  const handleSubmit = async (data: UserRegister): Promise<void> => {
    try {
      await createUser(repository, data);
      router.push('/login');
    } catch(error: any) {
      console.log(error);
      formikRef.current?.setFieldError('password', error.message);
    }
  }

  return {
    formikRef,
    validateRegisterForm,
    handleSubmit
  }
}

export default useRegisterForm;
