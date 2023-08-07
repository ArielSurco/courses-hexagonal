const Typography = ({ className, label }: ITypographyProps) => {
  return (
    <p className={className}>
      {label}
    </p>
  )
}

export default Typography

interface ITypographyProps {
  className?: string;
  label: string;
}