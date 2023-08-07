import { Form } from '@/sections/shared/dependencies/formik'
import Button from "@/sections/shared/ui/atoms/Button"
import Input from "@/sections/shared/ui/atoms/Input"
import Typography from "@/sections/shared/ui/atoms/Typography"
import Field from "@/sections/shared/ui/molecules/Field"

const UserRegisterForm = () => {
  return (
    <div className='p-8 rounded-3xl border-2 bg-slate-300'>
      <Typography label="LOGIN"/>
      <Form className='flex flex-col gap-2'>
        <div className="flex gap-2">
          <Field label='Nombre'>
            <Input name="name" placeholder='Ingresá tu nombre' />
          </Field>
          <Field label='Apellido'>
            <Input name="surname" placeholder='Ingresá tu apellido' />
          </Field>
        </div>
        <Field label='Email'>
          <Input name="email" placeholder='Ingresá tu correo' />
        </Field>
        <Field label='Contraseña'>
          <Input name="password" placeholder='Ingresá tu contraseña' />
        </Field>
        <Button label="Crear cuenta" type='submit' />
      </Form>
    </div>
  )
}

export default UserRegisterForm;
