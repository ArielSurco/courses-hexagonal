import FieldError from "../atoms/FieldError";
import Typography from "../atoms/Typography"

const Field = ({ children, label }: IFieldProps) => {
  return (
    <label className="flex flex-col">
      <Typography label={label} />
        {children}
      <FieldError name={children.props?.name}/>
    </label>
  )
}

export default Field;

interface IFieldProps {
  children: React.ReactElement;
  label: string;
}