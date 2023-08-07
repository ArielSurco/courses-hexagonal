'use client';

import { useField } from "../../dependencies/formik";
import Typography from "./Typography";

const FieldError = ({ name }: IFieldErrorProps) => {
  const [, meta] = useField(name);

  return meta.touched && meta.error
    ? (
      <Typography
        className='text-red-500 '
        label={meta.error ?? ''}
      />
    )
    : null;
}

export default FieldError

interface IFieldErrorProps {
  name: string;
}