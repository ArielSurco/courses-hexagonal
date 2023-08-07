import { Form } from "../../shared/dependencies/formik";
import Typography from "../../shared/ui/atoms/Typography"
import Input from '../../shared/ui/atoms/Input';
import Field from '../../shared/ui/molecules/Field';
import Button from "../../shared/ui/atoms/Button";

const UserLoginForm = () => {
  return (
    <div className='p-8 rounded-3xl border-2 bg-slate-300'>
      <Typography label="LOGIN"/>
      <Form className='flex flex-col gap-2'>
        <Field label='Email'>
          <Input name="email" placeholder='Ingresá tu correo' />
        </Field>
        <Field label='Contraseña'>
          <Input name="password" placeholder='Ingresá tu contraseña' />
        </Field>
        <Button label="Ingresar" type='submit' />
      </Form>
    </div>
  )
}

export default UserLoginForm