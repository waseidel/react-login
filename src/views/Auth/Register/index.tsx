import React from 'react'
import AuthLayout from '../AuthLayout'
import RegisterFooter from './RegisterFooter'

// Components
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <AuthLayout text='Registro' footer={<RegisterFooter />}>
      <RegisterForm />
    </AuthLayout>
  )
}

export default Register
