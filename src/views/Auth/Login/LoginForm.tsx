import React from 'react'
import { Form, Formik } from 'formik'

// Components
import Button from '../../../components/Button'
import Checkbox from '../../../components/Checkbox'
import InputField from '../../../components/InputField'

// Utils
import loginValidation from '../../../utils/auth/loginValidation'

interface Props {
  handleSubmit: (values: any) => void
}

const LoginForm = ({ handleSubmit }: Props) => {
  return (
    <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        validationSchema={loginValidation}
        onSubmit={handleSubmit}
      >
      <Form>
        <InputField
          label="Correo electronico"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <InputField
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          name="password"
        />
        <Checkbox name="rememberMe">
          Recordarme
        </Checkbox>
        <div className='text-center mt-6'>
          <Button
            type="submit"
            variant={Button.variant.PRIMARY}
          >
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm
