import React from 'react'

import AuthLayout from '../AuthLayout'
import LoginFooter from './LoginFooter'
import LoginForm from './LoginForm'

const Login = () => {
  const handleLogin = (values: any) => {
    console.log(values)
  }
  return (
    <AuthLayout text='Iniciar Sesión' footer={<LoginFooter />}>
      <LoginForm handleSubmit={handleLogin} />
    </AuthLayout>
  )
}

export default Login
