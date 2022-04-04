import React from 'react'
import { Form, Formik } from 'formik'

// Components
import Button from '../../../components/Button'
import Checkbox from '../../../components/Checkbox'
import InputField from '../../../components/InputField'

// Utils
import registerValidation from '../../../utils/auth/registerValidation'

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        termsConditions: false
      }}
      validationSchema={registerValidation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
      }}
    >
      <Form>
        <InputField
          label="Nombre"
          type="text"
          placeholder="Nombre Completo"
          name="name"
        />
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

        <Checkbox name="terms-conditions">
          I agree with the{' '}
          <a
            href="#pablo"
            className="text-sky-500"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>
        </Checkbox>

        <div className="text-center mt-6">
          <Button type="submit" variant={Button.variant.PRIMARY}>
            Registrarse
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default RegisterForm
