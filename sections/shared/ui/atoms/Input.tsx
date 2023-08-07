'use client';

import { useField } from "../../dependencies/formik";

const Input = ({ name, placeholder, onChange }: IInputProps) => {
  const [field] = useField(name);

  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name={name}
      placeholder={placeholder}
      value={field.value}
      onChange={onChange ?? field.onChange}
      onBlur={field.onBlur}
    />
  )
}

export default Input

interface IInputProps {
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}