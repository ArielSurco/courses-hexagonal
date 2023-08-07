'use client';

import { useRef } from "react"
import { FormikErrors, FormikProps } from "../../shared/dependencies/formik";
import { UserLogin, ensureUserLoginIsValid } from "@/modules/user/domain/User";
import { useUser } from "../context/UserContext";
import { getSessionToken } from "@/modules/user/application/getSessionToken";

const useLoginForm = () => {
  const { repository, loginValidator } = useUser();
  const formikRef = useRef<FormikProps<UserLogin>>(null);

  const validateLoginForm = (data: UserLogin): FormikErrors<UserLogin> => {
    return ensureUserLoginIsValid(loginValidator, data) ?? {};
  }

  const handleSubmit = async (data: UserLogin): Promise<void> => {
    try {
      const token = await getSessionToken(repository, data);
      console.log(token);
    } catch(error: any) {
      console.log(error);
      formikRef.current?.setFieldError('password', error.message);
    }
  }

  return {
    formikRef,
    validateLoginForm,
    handleSubmit
  }
}

export default useLoginForm