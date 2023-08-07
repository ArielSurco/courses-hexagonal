'use client';

const Button = ({ label, ...nativeProps }: IButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...nativeProps}
    >
      {label}
    </button>
  )
}

export default Button

interface IButtonProps extends React.ComponentProps<'button'> {
  label: string;
}